package io.github.bot.terminal.application.domains.notificarion_api.entity;

import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class TelegramNotificationApiDetails extends AbstractNotificationApiDetails {

    public TelegramNotificationApiDetails() {
        type = NotificationApiType.TELEGRAM_BOT;
    }

    private String botFatherName;
    private String token;
}
