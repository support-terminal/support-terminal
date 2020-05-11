package io.github.bot.terminal.application.domains.notificarion_api.entity;

import io.github.bot.terminal.application.domains.common.Persistable;

import java.util.List;


//todo они сами отрабатывают join request и фильтруют сообщения
public interface NotificationApi<D extends NotificationApiDetails> extends Persistable {

    D getDetails();

    List<Message> getLastMessages();

    void sendMessage(Message message);

}
