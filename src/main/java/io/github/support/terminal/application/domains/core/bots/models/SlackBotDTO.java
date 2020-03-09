package io.github.support.terminal.application.domains.core.bots.models;


import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class SlackBotDTO extends BotDTO {
   private String token;
   private String channel;
}
