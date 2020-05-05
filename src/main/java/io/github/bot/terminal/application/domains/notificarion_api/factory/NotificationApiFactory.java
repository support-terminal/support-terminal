package io.github.bot.terminal.application.domains.notificarion_api.factory;


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

    public NotificationApi<?> createNew(AbstractNotificationApiDetails details) {
        details.setId(UUID.randomUUID().toString());
        repository.add(details);
        return create(details);
    }

    public NotificationApi<?> byId(String id) {
        AbstractNotificationApiDetails details = getById(id);
        return create(details);
    }

    public NotificationApi<?> merge(String id, AbstractNotificationApiDetails detailsUpdate) {
        AbstractNotificationApiDetails details = getById(id);
        detailsUpdate.setId(details.getId());
        repository.update(detailsUpdate);
        return create(detailsUpdate);
    }

    private AbstractNotificationApiDetails getById(String id) {
       return repository.findById(id)
                .orElseThrow(() ->new IllegalArgumentException("Notfication API not found: id="+id));
    }

    private NotificationApi<?> create(AbstractNotificationApiDetails details) {
        if (NotificationApiType.SLACK_BOT.equals(details.getType())) {
            return createSlackBotNotificationApi((SlackNotificationApiDetails) details);
        } else if (NotificationApiType.TELEGRAM_BOT.equals(details.getType())) {
            return createTelegramBotNotificationApi((TelegramNotificationApiDetails) details);

        }
        throw new IllegalArgumentException("Unknown notification api type");
    }

    private NotificationApi<?> createTelegramBotNotificationApi(TelegramNotificationApiDetails details) {
        return new TelegramNotificationApi(details, repository);
    }

    private NotificationApi<SlackNotificationApiDetails> createSlackBotNotificationApi(SlackNotificationApiDetails details) {
        return new SlackNotificationApi(details, repository);
    }

    public List<NotificationApi<?>> getAll() {
        return repository.findAll().stream()
                .map(this::create).collect(Collectors.toList());
    }
}
