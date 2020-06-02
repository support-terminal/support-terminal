package io.github.bot.terminal.application.domains.notificarion_api.entity;

import io.github.bot.terminal.application.domains.common.Persistable;
import io.github.bot.terminal.application.domains.integrations.DocumentFile;

import java.util.List;


public interface NotificationApi<D extends NotificationApiDetails> extends Persistable {

    D getDetails();

    List<Message> getLastMessages();

    void sendMessage(Message message);

    void sendDocument(DocumentFile file);

}
