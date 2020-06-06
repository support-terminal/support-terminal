package io.github.bot.terminal.application.domains.common.notify.entity;


import io.github.bot.terminal.application.domains.notificarion_api.entity.Message;
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@RequiredArgsConstructor
public class Notify {
    private final NotificationApi notificationApi;
    private final String messageTemplate;

    public void execute() {
        notificationApi.sendMessage(new Message(messageTemplate));
    }
}
