package io.github.bot.terminal.application.domains.notificarion_api.entity;

public interface NotificationApi<D extends AbstractNotificationApiDetails> {

    D getDetails();

}
