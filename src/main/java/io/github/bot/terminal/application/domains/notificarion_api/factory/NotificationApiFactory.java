package io.github.bot.terminal.application.domains.notificarion_api.factory;


import io.github.bot.terminal.application.domains.notificarion_api.entity.AbstractNotificationApiDetails;
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi;
import io.github.bot.terminal.application.domains.notificarion_api.entity.SlackNotificationApi;
import io.github.bot.terminal.application.domains.notificarion_api.entity.SlackNotificationApiDetails;
import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NotificationApiFactory {

    private final NotificationApiRepository repository;

    public NotificationApi createNew(AbstractNotificationApiDetails details) {
        details.setId(UUID.randomUUID().toString());
        repository.add(details);
        return create(details);
    }

    private NotificationApi create(AbstractNotificationApiDetails details) {
        switch (details.getType()) {
            case SLACK_BOT:
                return createSlackBotNotificationApi((SlackNotificationApiDetails) details);
            default:
                throw new IllegalArgumentException("Not known notification type " + details.getType().name());
        }
    }

    private NotificationApi createSlackBotNotificationApi(SlackNotificationApiDetails details) {
        return new SlackNotificationApi(details, repository);
    }

    public List<NotificationApi> getAll() {
        return repository.findAll().stream()
                .map(this::create).collect(Collectors.toList());
    }
}
