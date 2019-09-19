package io.github.support.terminal.platform.app.domains.core.bots.requests;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.github.support.terminal.platform.app.domains.core.bots.values.BotType;
import lombok.Data;

import javax.validation.constraints.NotBlank;


@Data
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = SlackBotRequest.class, name = BotType.SLACK_BOT),
        @JsonSubTypes.Type(value = TelegramBotRequest.class, name = BotType.TELEGRAM_BOT)
})
public abstract class BotRequest {
    @NotBlank
    private String label;
    @NotBlank
    private String type;

    private String state;
}
