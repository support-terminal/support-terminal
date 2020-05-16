package io.github.bot.terminal.application.domains.common.notify.requests;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.github.bot.terminal.application.domains.common.notify.values.NotifyTypes;
import lombok.Data;

@Data
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = NotifySlackBotRequest.class, name = NotifyTypes.Constants.SLACK_BOT_API),
})
public abstract class NotifyRequest {
    private String type;
    private String messageTemplate;
}
