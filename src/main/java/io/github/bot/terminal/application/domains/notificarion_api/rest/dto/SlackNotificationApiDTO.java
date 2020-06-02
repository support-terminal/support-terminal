package io.github.bot.terminal.application.domains.notificarion_api.rest.dto;


import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class SlackNotificationApiDTO extends NotificationApiDTO {

    public SlackNotificationApiDTO() {
        super(NotificationApiType.Constants.SLACK_BOT);
    }

    private String token;
    private String chanel;
}
