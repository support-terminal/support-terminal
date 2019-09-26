package io.github.support.terminal.app.domains.bot.commands.domains.bot.command.services.handlers;


import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.support.terminal.app.domains.core.CoreConfiguration;
import io.github.support.terminal.app.domains.core.action.models.ActionExecution;
import io.github.support.terminal.app.domains.core.action.models.results.ActionResult;
import io.github.support.terminal.app.domains.core.action.models.results.SqlSelectActionResult;
import io.github.support.terminal.app.domains.core.action.models.results.SqlSelectInExcelFileActionResult;
import io.github.support.terminal.app.domains.core.action.values.ActionTypes;
import io.github.support.terminal.app.domains.core.api.telegram.TelegramApiClient;
import io.github.support.terminal.app.domains.core.api.telegram.models.Message;
import io.github.support.terminal.app.domains.core.api.telegram.models.Update;
import io.github.support.terminal.app.domains.core.api.telegram.requests.SendMessageRequest;
import io.github.support.terminal.app.domains.core.api.telegram.requests.UpdateRequest;
import io.github.support.terminal.app.domains.core.api.telegram.responses.UpdateResponse;
import io.github.support.terminal.app.domains.core.bots.entities.Bot;
import io.github.support.terminal.app.domains.core.bots.entities.JoinRequest;
import io.github.support.terminal.app.domains.core.bots.entities.TelegramBot;
import io.github.support.terminal.app.domains.core.bots.models.AnswerToTelegram;
import io.github.support.terminal.app.domains.core.bots.services.BotsService;
import io.github.support.terminal.app.domains.core.bots.services.JoinRequestsService;
import io.github.support.terminal.app.domains.core.bots.values.BotType;
import io.github.support.terminal.app.domains.core.common.values.CoreJmsQueues;
import io.github.support.terminal.app.domains.bot.commands.domains.bot.command.entities.BotCommand;
import io.github.support.terminal.app.domains.bot.commands.domains.bot.command.services.BotCommandsService;
import io.github.support.terminal.app.domains.bot.commands.domains.bot.command.values.BotsJmsQueues;
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
import static java.util.stream.Collectors.toSet;


@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
class TelegramBotCommandsHandler implements BotHandler {

    private static final String LISTENING_QUEUE = "TELEGRAM_BOT_HANDLER_LISTENING_QUEUE";

    private static final String JOIN = "/join";
    private static final String HELP = "/help";

    private static final int RESPONSE_MESSAGES_LIMIT = 100;

    private final TelegramApiClient telegramApiClient;
    private final JoinRequestsService joinRequestsService;
    private final BotCommandsService commandsService;
    private final BotsService botsService;
    private final JmsTemplate jmsTemplate;
    private final ObjectMapper objectMapper;


    @JmsListener(destination = BotsJmsQueues.BOT_COMMANDS_MODULE_HANDLE_BOTS_QUEUE + BotType.TELEGRAM_BOT,
            containerFactory = CoreConfiguration.JMS_FACTORY_NAME)
    public void receiveBot(Bot bot) {

        TelegramBot telegramBot = (TelegramBot) bot;

        Collection<Message> messages = getUpdates(telegramBot);
        if (messages.isEmpty()) {
            log.debug("No fresh messages");
            return;
        }

        Collection<BotCommand> botCommands = commandsService.getEnabledByBotId(bot.getId());
        if (botCommands.size() == 0) {
            log.debug("Not found commands for that bot");
            return;
        }

        //check each message on contain /command
        messages.stream()
                .filter(m -> !StringUtils.isEmpty(m.getText()))
                .forEach(message -> {

                    if (message.getText().contains(JOIN)) {
                        //регистрация запроса на добавление в список одобренных пользователей
                        joinRequestHandle(bot.getId(), message);
                        return;
                    }

                    if (!isPermited(telegramBot, message)) {
                        return;
                    }

                    if (message.getText().contains(HELP)) {
                        String response = helpRequestHandle(botCommands);
                        SendMessageRequest request = new SendMessageRequest()
                                .setChatId(message.getChat().getId())
                                .setParseMode("HTML")
                                .setText(response);
                        telegramApiClient.sendMessage(telegramBot.getToken(), request);
                        return;
                    }


                    Map<String, Object> payload = new HashMap<>();
                    payload.put("answerTo", new AnswerToTelegram().setBot(telegramBot).setChatId(message.getChat().getId()));


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

    @Override
    @JmsListener(destination = LISTENING_QUEUE + ActionTypes.SQL_SELECT,
            containerFactory = CoreConfiguration.JMS_FACTORY_NAME)
    public void answerBySqlSelectCommand(ActionResult result) {
        SqlSelectActionResult sqlSelectActionResult = (SqlSelectActionResult)result;
        AnswerToTelegram answerTo =  objectMapper.convertValue(sqlSelectActionResult.getPayload().get("answerTo"), AnswerToTelegram.class);
        TelegramBot bot = answerTo.getBot();

        if(!StringUtils.isEmpty(sqlSelectActionResult.getResponse())){
            SendMessageRequest request = new SendMessageRequest()
                    .setChatId(answerTo.getChatId())
                    .setText(sqlSelectActionResult.getResponse());
            telegramApiClient.sendMessage(bot.getToken(), request);
        }
    }

    @Override
    @JmsListener(destination = LISTENING_QUEUE + ActionTypes.SQL_SELECT_IN_EXCEL_FILE,
            containerFactory = CoreConfiguration.JMS_FACTORY_NAME)
    public void answerBySqlInExcelCommand(ActionResult result) {
        SqlSelectInExcelFileActionResult sqlSelectInExcelFileActionResult = (SqlSelectInExcelFileActionResult)result;
        AnswerToTelegram answerTo =  objectMapper.convertValue(sqlSelectInExcelFileActionResult.getPayload().get("answerTo"), AnswerToTelegram.class);
        TelegramBot bot = answerTo.getBot();

        if(sqlSelectInExcelFileActionResult.getDocument() != null){
            try {
                telegramApiClient.sendDocument(bot.getToken(), answerTo.getChatId(),  sqlSelectInExcelFileActionResult.getDocument());
            } catch (IOException e) {
                log.error("Не удалось отправить файл");
                SendMessageRequest request = new SendMessageRequest()
                        .setChatId(answerTo.getChatId())
                        .setText("Не удалось отправить файл");
                telegramApiClient.sendMessage(bot.getToken(), request);
            }
        }
    }

    private boolean isPermited(TelegramBot telegramBot, Message message) {
        return ofNullable(telegramBot.getApprovedUserIds())
                .map(l -> l.contains(message.getFrom().getId())).orElse(false);
    }

    private void joinRequestHandle(String botId, Message message) {
        JoinRequest joinRequest = new JoinRequest()
                .setFirstName(message.getFrom().getFirstName())
                .setLastName(message.getFrom().getLastName())
                .setBotId(botId)
                .setAccountId(""+message.getFrom().getId());
        joinRequestsService.addNewRequest(joinRequest);
    }

    private String helpRequestHandle(Collection<BotCommand> botCommands) {
        StringBuilder responseBuilder = new StringBuilder();
        responseBuilder.append("Перечень доступных команд:").append("\n");
        botCommands
                .forEach(c -> {
                    responseBuilder.append("<a>").append(c.getCmd()).append("</a>");
                    responseBuilder.append(" - ").append(c.getName());
                    responseBuilder.append("\n");
                });

        responseBuilder.append("<a>").append(JOIN).append("</a>");
        responseBuilder.append(" - ").append("Запрос на доступ к командам бота");
        responseBuilder.append("\n");

        return responseBuilder.toString();
    }


    private Set<Message> getUpdates(TelegramBot telegramBot) {
        Integer offset = telegramBot.getLastUpdateId() != null ? telegramBot.getLastUpdateId() + 1 : null;

        UpdateRequest updateRequest = new UpdateRequest()
                .setLimit(RESPONSE_MESSAGES_LIMIT)
                .setOffset(offset);

        UpdateResponse updateResponse = telegramApiClient.getUpdates(telegramBot.getToken(), updateRequest);

        if (!updateResponse.getOk()) {
            return Collections.emptySet();
        }

        Integer lastUpdateId = updateResponse
                .getResult().stream()
                .mapToInt(Update::getUpdateId)
                .max().orElse(0);

        if (lastUpdateId != 0) {
            telegramBot.setLastUpdateId(lastUpdateId);
            botsService.update(telegramBot);
        }

        return updateResponse
                .getResult().stream().map(u -> u.getMessage())
                .collect(toSet());
    }


}
