package io.github.bot.terminal.application.domains.notificarion_api.factory;


import io.github.bot.terminal.application.domains.integrations.slack.SlackApiClient;
import io.github.bot.terminal.application.domains.integrations.telegram.TelegramApiClient;
import io.github.bot.terminal.application.domains.notificarion_api.entity.*;
import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NotificationApiFactory {

    private final NotificationApiRepository repository;
    private final SlackApiClient slackApiClient;
    private final TelegramApiClient telegramApiClient;

    public NotificationApi<?> createNew(NotificationApiDetails details) {
        details.setId(UUID.randomUUID().toString());
        repository.add(details);
        return build(details);
    }

    public NotificationApi<?> byId(String id) {
        NotificationApiDetails details = getById(id);
        return build(details);
    }

    public NotificationApi<?> merge(String id, NotificationApiDetails detailsUpdate) {
        NotificationApiDetails details = getById(id);
        detailsUpdate.setId(details.getId());
        repository.update(detailsUpdate);
        return build(detailsUpdate);
    }

    private NotificationApiDetails getById(String id) {
       return repository.findById(id)
                .orElseThrow(() ->new IllegalArgumentException("Notfication API not found: id="+id));
    }

    private NotificationApi<?> build(NotificationApiDetails details) {
        if (NotificationApiType.SLACK_BOT.equals(details.getType())) {
            return build((SlackNotificationApiDetails) details);
        } else if (NotificationApiType.TELEGRAM_BOT.equals(details.getType())) {
            return build((TelegramNotificationApiDetails) details);

        }
        throw new IllegalArgumentException("Unknown notification api type");
    }

    private NotificationApi<?> build(TelegramNotificationApiDetails details) {
        return new TelegramNotificationApi(details, repository, telegramApiClient);
    }

    private NotificationApi<SlackNotificationApiDetails> build(SlackNotificationApiDetails details) {
        return new SlackNotificationApi(details, repository, slackApiClient);
    }

    public List<NotificationApi<?>> getAll() {
        return repository.findAll().stream()
                .map(this::build).collect(Collectors.toList());
    }
}
