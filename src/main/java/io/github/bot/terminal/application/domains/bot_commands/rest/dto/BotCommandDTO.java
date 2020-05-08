package io.github.bot.terminal.application.domains.bot_commands.rest.dto;



import io.github.bot.terminal.application.domains.common.action.dto.ActionDTO;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.Collection;

@Data
@Accessors(chain = true)
public class BotCommandDTO {
    private String id;
    private String name;
    private String cmd;
    private Collection<String> botIds;
    private ActionDTO action;
    private String state;
}

