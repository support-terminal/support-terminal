package io.github.bot.terminal.application.domains.notificarion_api.rest.requests;


import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType;
import lombok.Data;

import javax.validation.constraints.NotBlank;


@Data
public class TelegramNotificationApiRequest extends NotificationApiRequest {

    public TelegramNotificationApiRequest() {
        super(NotificationApiType.Constants.TELEGRAM_BOT);
    }

    @NotBlank
    private String botFatherName;
    @NotBlank
    private String token;
}
