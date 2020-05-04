package io.github.bot.terminal.application.domains.notificarion_api.entity;

import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class SlackNotificationApiDetails extends AbstractNotificationApiDetails {

    public SlackNotificationApiDetails() {
        type = NotificationApiType.SLACK_BOT;
    }

    private String token;
    private String chanel;
}
