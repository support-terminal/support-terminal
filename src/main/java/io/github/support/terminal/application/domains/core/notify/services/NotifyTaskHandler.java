package io.github.support.terminal.application.domains.core.notify.services;


import io.github.support.terminal.application.domains.core.api.slack.SlackApiClient;
import io.github.support.terminal.application.domains.core.api.slack.models.Channel;
import io.github.support.terminal.application.domains.core.api.slack.requests.SendMessageRequest;
import io.github.support.terminal.application.domains.core.api.slack.responses.GetChannelsResponse;
import io.github.support.terminal.application.domains.core.bots.entities.SlackBot;
import io.github.support.terminal.application.domains.core.bots.services.BotsService;
import io.github.support.terminal.application.domains.core.notify.models.NotifySlackBot;
import io.github.support.terminal.application.domains.core.notify.models.NotifyTask;
import io.github.support.terminal.application.domains.core.notify.values.NotifyTypes;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class NotifyTaskHandler{

    private final BotsService botsService;
    private final SlackApiClient slackApiClient;


    @Async
    @EventListener(condition = "#notifyTask.notify.type == '"+ NotifyTypes.SLACK_BOT_API+"'")
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
