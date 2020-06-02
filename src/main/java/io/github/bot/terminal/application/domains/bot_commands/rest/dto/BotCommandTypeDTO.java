package io.github.bot.terminal.application.domains.bot_commands.rest.dto;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class BotCommandTypeDTO {
    private String label;
    private String type;
}
