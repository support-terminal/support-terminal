package io.github.bot.terminal.application.domains.notificarion_api.rest.requests;


import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotBlank;

@Data
public class SlackNotificationApiRequest extends NotificationApiRequest {

    public SlackNotificationApiRequest() {
        super(NotificationApiType.Constants.SLACK_BOT);
    }

    @NotBlank
    private String token;
    @NotBlank
    private String chanel;
}