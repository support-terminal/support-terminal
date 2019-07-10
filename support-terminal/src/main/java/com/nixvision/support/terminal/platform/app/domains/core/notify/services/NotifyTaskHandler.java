package com.nixvision.support.terminal.platform.app.domains.core.notify.services;


import com.nixvision.support.terminal.platform.app.domains.core.CoreConfiguration;
import com.nixvision.support.terminal.platform.app.domains.core.api.slack.SlackApiClient;
import com.nixvision.support.terminal.platform.app.domains.core.api.slack.models.Channel;
import com.nixvision.support.terminal.platform.app.domains.core.api.slack.requests.SendMessageRequest;
import com.nixvision.support.terminal.platform.app.domains.core.api.slack.responses.GetChannelsResponse;
import com.nixvision.support.terminal.platform.app.domains.core.bots.entities.SlackBot;
import com.nixvision.support.terminal.platform.app.domains.core.bots.services.BotsService;
import com.nixvision.support.terminal.platform.app.domains.core.notify.models.NotifySlackBot;
import com.nixvision.support.terminal.platform.app.domains.core.notify.models.NotifyTask;
import com.nixvision.support.terminal.platform.app.domains.core.notify.values.NotifyTypes;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class NotifyTaskHandler{

    public static final String NOTIFY_TASK_HANDLER_QUEUE = "NOTIFY_TASK_HANDLER_QUEUE";

    private final BotsService botsService;
    private final SlackApiClient slackApiClient;

    @JmsListener(destination = NOTIFY_TASK_HANDLER_QUEUE + NotifyTypes.SLACK_BOT_API,
            containerFactory = CoreConfiguration.JMS_FACTORY_NAME)
    public void answerBySqlSelectCommand(NotifyTask notifyTask) {
        NotifySlackBot notifySlackBot = (NotifySlackBot)notifyTask.getNotify();
        SlackBot slackBot = (SlackBot)botsService.getById(notifySlackBot.getBotId());

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

        SendMessageRequest request = new SendMessageRequest()
                    .setChannel(channel.getId())
                    .setText(notifyTask.getMessage());
        slackApiClient.sendMessage(slackBot.getToken(), request);

    }


}
