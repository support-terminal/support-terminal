package io.github.bot.terminal.application.domains.notificarion_api.entity;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiState;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.dizitart.no2.objects.Id;

@Data
@EqualsAndHashCode(of = {"id"})
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = SlackNotificationApiDetails.class, name = NotificationApiType.Constants.SLACK_BOT),
        @JsonSubTypes.Type(value = TelegramNotificationApiDetails.class, name = NotificationApiType.Constants.TELEGRAM_BOT)
})
public class NotificationApiDetails {
    @Id
    protected String id;
    protected String label;
    protected NotificationApiState state;
    protected NotificationApiType type;

}
