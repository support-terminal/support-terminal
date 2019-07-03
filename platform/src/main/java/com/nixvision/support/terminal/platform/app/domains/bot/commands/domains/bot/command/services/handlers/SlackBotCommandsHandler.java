package com.nixvision.support.terminal.platform.app.domains.bot.commands.domains.bot.command.services.handlers;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.nixvision.support.terminal.platform.app.domains.bot.commands.domains.bot.command.entities.BotCommand;
import com.nixvision.support.terminal.platform.app.domains.bot.commands.domains.bot.command.services.BotCommandsService;
import com.nixvision.support.terminal.platform.app.domains.bot.commands.domains.bot.command.values.BotsJmsQueues;
import com.nixvision.support.terminal.platform.app.domains.core.CoreConfiguration;
import com.nixvision.support.terminal.platform.app.domains.core.action.models.ActionExecution;
import com.nixvision.support.terminal.platform.app.domains.core.action.models.results.ActionResult;
import com.nixvision.support.terminal.platform.app.domains.core.action.models.results.SqlSelectActionResult;
import com.nixvision.support.terminal.platform.app.domains.core.action.models.results.SqlSelectInExcelFileActionResult;
import com.nixvision.support.terminal.platform.app.domains.core.action.values.ActionTypes;
import com.nixvision.support.terminal.platform.app.domains.core.api.slack.SlackApiClient;
import com.nixvision.support.terminal.platform.app.domains.core.api.slack.models.Channel;
import com.nixvision.support.terminal.platform.app.domains.core.api.slack.models.Message;
import com.nixvision.support.terminal.platform.app.domains.core.api.slack.requests.SendMessageRequest;
import com.nixvision.support.terminal.platform.app.domains.core.api.slack.responses.GetChannelHistoryResponse;
import com.nixvision.support.terminal.platform.app.domains.core.api.slack.responses.GetChannelsResponse;
import com.nixvision.support.terminal.platform.app.domains.core.api.slack.responses.GetUserInfoResponse;
import com.nixvision.support.terminal.platform.app.domains.core.bots.entities.Bot;
import com.nixvision.support.terminal.platform.app.domains.core.bots.entities.JoinRequest;
import com.nixvision.support.terminal.platform.app.domains.core.bots.entities.SlackBot;
import com.nixvision.support.terminal.platform.app.domains.core.bots.models.AnswerToSlack;
import com.nixvision.support.terminal.platform.app.domains.core.bots.services.BotsService;
import com.nixvision.support.terminal.platform.app.domains.core.bots.services.JoinRequestsService;
import com.nixvision.support.terminal.platform.app.domains.core.bots.values.BotType;
import com.nixvision.support.terminal.platform.app.domains.core.common.values.CoreJmsQueues;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.util.*;

import static java.util.Optional.ofNullable;


@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
class SlackBotCommandsHandler implements BotHandler {

    private static final String LISTENING_QUEUE = "SLACK_BOT_HANDLER_LISTENING_QUEUE";

    private static final String JOIN = "join";
    private static final String HELP = "help";

    private final SlackApiClient slackApiClient;
    private final JoinRequestsService joinRequestsService;
    private final BotCommandsService commandsService;
    private final BotsService botsService;
    private final JmsTemplate jmsTemplate;
    private final ObjectMapper objectMapper;


    @JmsListener(destination = BotsJmsQueues.BOT_COMMANDS_MODULE_HANDLE_BOTS_QUEUE + BotType.SLACK_BOT,
            containerFactory = CoreConfiguration.JMS_FACTORY_NAME)
    public void receiveBot(Bot bot) {

        SlackBot slackBot = (SlackBot) bot;

        //получаем прямые каналы
        GetChannelsResponse channelsResponse = slackApiClient.getСhannels(slackBot.getToken());
        if (!Boolean.TRUE.equals(channelsResponse.getOk())) {
            return;
        }

        //отфильтровываем только каналы с доступными пользователями
        Channel channel = channelsResponse.getChannels().stream()
                .filter(c -> slackBot.getChannel().equals(c.getName()))
                .findFirst().orElse(null);
        if (channel == null) {
            return;
        }

        GetChannelHistoryResponse channelHistory
                = slackApiClient.getChannelHistory(slackBot.getToken(), channel.getId(), String.format("%.0f", slackBot.getOldest()));
        if (!Boolean.TRUE.equals(channelHistory.getOk())) {
            return;
        }

        Collection<Message> messages = channelHistory.getMessages();
        if (messages == null || messages.isEmpty()) {
            log.debug("No fresh messages");
            return;
        }

        Double last = messages.stream()
                .sorted(Comparator.comparingDouble(Message::getTs).reversed())
                .map(Message::getTs)
                .findFirst().orElse(null);
        if (last == null) {
            slackBot.setOldest(new Double(new Date().toInstant().getEpochSecond()));
        } else {
            slackBot.setOldest(last + 1D);
        }
        botsService.update(slackBot);

        Collection<BotCommand> botCommands = commandsService.getEnabledByBotId(bot.getId());
        if (botCommands.size() == 0) {
            log.debug("Not found commands for that bot");
            return;
        }

        //check each message on contain /command
        messages.stream()
                .filter(m -> !StringUtils.isEmpty(m.getText()))
                .forEach(message -> {

                    if (message.getText().toLowerCase().contains(JOIN)) {
                        //регистрация запроса на добавление в список одобренных пользователей
                        joinRequestHandle(slackBot, message.getUser());
                        return;
                    }

                    if (!isPermited(slackBot, message)) {
                        return;
                    }

                    if (message.getText().toLowerCase().contains(HELP)) {
                        String response = helpRequestHandle(botCommands);

                        SendMessageRequest request = new SendMessageRequest()
                                .setChannel(channel.getId())
                                .setText(response);
                        slackApiClient.sendMessage(slackBot.getToken(), request);
                        return;
                    }

                    Map<String, Object> payload = new HashMap<>();
                    payload.put("answerTo", new AnswerToSlack().setBot(slackBot).setChannelId(channel.getId()));

                    botCommands
                            .stream()
                            .filter(command -> message.getText().contains(command.getCmd()))
                            .forEach(c -> {
                                ActionExecution commandExecution = new ActionExecution()
                                        .setAction(c.getAction())
                                        .setPayload(payload)
                                        .setResponseToQueue(LISTENING_QUEUE+c.getAction().getType());
                                jmsTemplate.convertAndSend(CoreJmsQueues.CORE_MODULE_ACTIONS_HANDLE_QUEUE + c.getAction().getType(), commandExecution);
                            });
                });

    }


    private boolean isPermited(SlackBot slackBot, Message message) {
        return ofNullable(slackBot.getApprovedUsers())
                .map(l -> l.contains(message.getUser())).orElse(false);
    }

    @Override
    @JmsListener(destination = LISTENING_QUEUE + ActionTypes.SQL_SELECT,
            containerFactory = CoreConfiguration.JMS_FACTORY_NAME)
    public void answerBySqlSelectCommand(ActionResult result) {
        SqlSelectActionResult sqlSelectActionResult = (SqlSelectActionResult)result;
        AnswerToSlack answerTo =  objectMapper.convertValue(sqlSelectActionResult.getPayload().get("answerTo"), AnswerToSlack.class);
        SlackBot bot = answerTo.getBot();

        if(!StringUtils.isEmpty(sqlSelectActionResult.getResponse())){
            SendMessageRequest request = new SendMessageRequest()
                    .setChannel(answerTo.getChannelId())
                    .setText(sqlSelectActionResult.getResponse());
            slackApiClient.sendMessage(bot.getToken(), request);
        }
    }


    @Override
    @JmsListener(destination = LISTENING_QUEUE + ActionTypes.SQL_SELECT_IN_EXCEL_FILE,
            containerFactory = CoreConfiguration.JMS_FACTORY_NAME)
    public void answerBySqlInExcelCommand(ActionResult result) {
        SqlSelectInExcelFileActionResult sqlSelectInExcelFileActionResult = (SqlSelectInExcelFileActionResult)result;
        AnswerToSlack answerTo =  objectMapper.convertValue(sqlSelectInExcelFileActionResult.getPayload().get("answerTo"), AnswerToSlack.class);
        SlackBot bot = answerTo.getBot();

        if(sqlSelectInExcelFileActionResult.getDocument() != null){
            try {
                slackApiClient.sendDocument(bot.getToken(), answerTo.getChannelId(), sqlSelectInExcelFileActionResult.getDocument());
            } catch (IOException e) {
                log.error("Не удалось отправить файл");
                SendMessageRequest request = new SendMessageRequest()
                        .setChannel(answerTo.getChannelId())
                        .setText("Не удалось отправить файл");
                slackApiClient.sendMessage(bot.getToken(), request);
            }
        }
    }

    private void joinRequestHandle(SlackBot slackBot, String userId) {

        GetUserInfoResponse userInfo
                = slackApiClient.getUserInfo(slackBot.getToken(), userId);

        if (!Boolean.TRUE.equals(userInfo.getOk())) {
            return;
        }

        JoinRequest joinRequest = new JoinRequest()
                .setFirstName(userInfo.getUser().getRealName())
                .setBotId(slackBot.getId())
                .setAccountId(userId);
        joinRequestsService.addNewRequest(joinRequest);
    }

    private String helpRequestHandle(Collection<BotCommand> botCommands) {
        StringBuilder responseBuilder = new StringBuilder();
        responseBuilder.append("Перечень доступных команд:").append("\n");
        botCommands
                .forEach(c -> {
                    responseBuilder.append("*").append(c.getCmd()).append("*");
                    responseBuilder.append(" - _").append(c.getName()).append("_");
                    responseBuilder.append("\n");
                });

        responseBuilder.append("*").append(JOIN).append("*");
        responseBuilder.append(" - _").append("Запрос на доступ к командам бота").append("_");
        responseBuilder.append("\n");

        return responseBuilder.toString();
    }

}
