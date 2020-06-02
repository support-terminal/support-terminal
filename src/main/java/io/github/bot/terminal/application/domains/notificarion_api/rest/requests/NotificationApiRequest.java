package io.github.bot.terminal.application.domains.notificarion_api.rest.requests;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiState;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType;
import lombok.Data;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotBlank;


@Data
@Accessors(chain = true)
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = SlackNotificationApiRequest.class, name = NotificationApiType.Constants.SLACK_BOT),
        @JsonSubTypes.Type(value = TelegramNotificationApiRequest.class, name = NotificationApiType.Constants.TELEGRAM_BOT)
})
public abstract class NotificationApiRequest {

    public NotificationApiRequest(String type) {
        this.type = type;
    }

    @NotBlank
    protected String label;
    private String type;
    protected String state = NotificationApiState.ENABLED.name();
}
