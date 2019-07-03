package com.nixvision.support.terminal.platform.app.domains.bot.commands.domains.bot.command.dto;



import com.nixvision.support.terminal.platform.app.domains.core.action.models.actions.Action;
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

