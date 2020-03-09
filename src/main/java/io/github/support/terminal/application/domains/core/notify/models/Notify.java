package io.github.support.terminal.application.domains.core.notify.models;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.github.support.terminal.application.domains.core.notify.values.NotifyTypes;
import lombok.Data;

@Data
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = NotifyTelegramBot.class, name = NotifyTypes.TELEGRAM_BOT_API),
        @JsonSubTypes.Type(value = NotifySlackBot.class, name = NotifyTypes.SLACK_BOT_API),
        @JsonSubTypes.Type(value = NotifyEmailBot.class, name = NotifyTypes.EMAIL_API)
})
public abstract class Notify {
    private String type;
    private String messageTemplate;
}
