package io.github.bot.terminal.application.domains.notificarion_api.entity;

import io.github.bot.terminal.application.domains.common.Persistable;

public interface NotificationApi<D extends NotificationApiDetails> extends Persistable {

    D getDetails();

}
