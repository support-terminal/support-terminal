package io.github.support.terminal.platform.app.domains.core.bots.models;


import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class SlackBotDTO extends BotDTO {
   private String token;
   private String channel;
}
