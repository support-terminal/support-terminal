package io.github.support.terminal.application.domains.bot_commands.dto;



import io.github.support.terminal.app.domains.core.action.models.actions.Action;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.Collection;

@Data
@Accessors(chain = true)
public class BotCommandDTO {
    private String id;
    private String name;
    private String cmd;
    private Action action;
    private Collection<String> botIds;
    private String state;
}

