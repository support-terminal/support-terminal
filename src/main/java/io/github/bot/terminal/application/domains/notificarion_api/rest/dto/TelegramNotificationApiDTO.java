package io.github.bot.terminal.application.domains.notificarion_api.rest.dto;


import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Set;

@Data
@EqualsAndHashCode(callSuper = true)
public class TelegramNotificationApiDTO extends NotificationApiDTO {

    public TelegramNotificationApiDTO() {
        super(NotificationApiType.Constants.TELEGRAM_BOT);
    }

    private String botFatherName;
    private String token;
    private Integer lastUpdateId;
    private Set<Integer> approvedUsersIds;
}
