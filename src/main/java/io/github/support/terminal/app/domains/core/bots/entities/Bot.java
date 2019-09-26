package io.github.support.terminal.app.domains.core.bots.entities;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.github.support.terminal.app.domains.core.bots.values.BotType;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.dizitart.no2.objects.Id;


@Data
@EqualsAndHashCode(of={"id"})
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = SlackBot.class, name = BotType.SLACK_BOT),
        @JsonSubTypes.Type(value = TelegramBot.class, name = BotType.TELEGRAM_BOT)
})
public abstract class Bot {
    @Id
    private String id;
    private String label;
    private String state;
    private String type;
    public abstract void accept(JoinRequest joinRequest);
    public abstract void denied(JoinRequest joinRequest);
}
