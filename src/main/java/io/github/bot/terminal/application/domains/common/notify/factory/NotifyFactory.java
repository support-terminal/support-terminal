package io.github.bot.terminal.application.domains.common.notify.factory;


import io.github.bot.terminal.application.domains.common.notify.entity.Notify;
import io.github.bot.terminal.application.domains.common.notify.entity.NotifyDetails;
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi;
import io.github.bot.terminal.application.domains.notificarion_api.factory.NotificationApiFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class NotifyFactory {

    private final NotificationApiFactory notificationApiFactory;

    public Notify build(NotifyDetails details) {
        NotificationApi notificationApi = notificationApiFactory.byId(details.getNotificationApiId());
        return new Notify(notificationApi, details.getMessageTemplate());
    }


}
