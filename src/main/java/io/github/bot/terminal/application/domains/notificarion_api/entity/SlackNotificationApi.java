package io.github.bot.terminal.application.domains.notificarion_api.entity;


import io.github.bot.terminal.application.domains.integrations.DocumentFile;
import io.github.bot.terminal.application.domains.integrations.slack.SlackApiClient;
import io.github.bot.terminal.application.domains.integrations.slack.models.Channel;
import io.github.bot.terminal.application.domains.integrations.slack.models.SlackMessage;
import io.github.bot.terminal.application.domains.integrations.slack.requests.SendMessageRequest;
import io.github.bot.terminal.application.domains.integrations.slack.responses.GetChannelHistoryResponse;
import io.github.bot.terminal.application.domains.integrations.slack.responses.GetChannelsResponse;
import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;


public final class SlackNotificationApi implements NotificationApi<SlackNotificationApiDetails> {

    private final SlackNotificationApiDetails details;
    private final NotificationApiRepository repository;
    private final SlackApiClient slackApiClient;

    public SlackNotificationApi(SlackNotificationApiDetails details,
                                NotificationApiRepository repository,
                                SlackApiClient slackApiClient) {
        this.details = details;
        this.repository = repository;
        this.slackApiClient = slackApiClient;

    }

    public SlackNotificationApiDetails getDetails() {
        return details;
    }

    @Override
    public List<Message> getLastMessages() {

        Optional<Channel> chanelOptional = getChanel();
        if (!chanelOptional.isPresent()) {
            return Collections.emptyList();
        }
        Channel chanel = chanelOptional.get();

        GetChannelHistoryResponse channelHistory
                = slackApiClient.getChannelHistory(details.getToken(),
                chanel.getId(), String.format("%.0f", details.getOldest()));
        if (!Boolean.TRUE.equals(channelHistory.getOk())) {
            return Collections.emptyList();
        }

        Collection<SlackMessage> messages = channelHistory.getMessages();
        if (messages == null || messages.isEmpty()) {
            return Collections.emptyList();
        }

        Double last = messages.stream()
                .sorted(Comparator.comparingDouble(SlackMessage::getTs).reversed())
                .map(SlackMessage::getTs)
                .findFirst().orElse(null);
        if (last == null) {
            details.setOldest(new Double(new Date().toInstant().getEpochSecond()));
        } else {
            details.setOldest(last + 1D);
        }
        repository.update(details);

        return messages.stream().map(slackMessage -> new Message().setText(slackMessage.getText()))
                .collect(Collectors.toList());
    }

    @Override
    public void sendMessage(Message message) {
        getChanel().ifPresent(channel -> {
            SendMessageRequest request = new SendMessageRequest();
            request.setText(message.getText());
            request.setChannel(channel.getId());
            slackApiClient.sendMessage(details.getToken(), request);
        });
    }

    @Override
    public void sendDocument(DocumentFile file) {
        getChanel().ifPresent(channel -> {
            try {
                slackApiClient.sendDocument(details.getToken(), channel.getId(), file);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
    }

    private Optional<Channel> getChanel() {
        GetChannelsResponse channelsResponse = slackApiClient.getСhannels(details.getToken());
        if (!Boolean.TRUE.equals(channelsResponse.getOk())) {
            return Optional.empty();
        }
        return channelsResponse.getChannels().stream()
                .filter(c -> details.getChanel().equals(c.getName()))
                .findFirst();
    }

    @Override
    public void delete() {
        repository.deleteById(details.id);
    }
}
