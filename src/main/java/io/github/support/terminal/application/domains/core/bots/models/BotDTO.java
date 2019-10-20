package io.github.support.terminal.application.domains.core.bots.models;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.github.support.terminal.application.domains.core.bots.values.BotType;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Collection;


@Data
@EqualsAndHashCode(of={"id"})
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = SlackBotDTO.class, name = BotType.SLACK_BOT),
        @JsonSubTypes.Type(value = TelegramBotDTO.class, name = BotType.TELEGRAM_BOT)
})
public abstract class BotDTO {
    private String id;
    private String label;
    private String state;
    private String type;
    private Collection<JoinRequestDTO> joinRequests;

}
