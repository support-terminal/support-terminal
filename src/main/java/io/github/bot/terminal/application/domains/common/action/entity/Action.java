package io.github.bot.terminal.application.domains.common.action.entity;

import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi;

public interface Action {
    void proceedAndNotify(NotificationApi<?> notificationApi);
}

