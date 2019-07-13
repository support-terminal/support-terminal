package com.nixvision.support.terminal.platform.app.domains.bot.commands.domains.bot.command.entities;


import com.nixvision.support.terminal.platform.app.domains.core.action.models.actions.Action;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.dizitart.no2.objects.Id;

import java.util.Collection;

@Data
@EqualsAndHashCode(of={"id"})
public class BotCommand {
    @Id
    private String id;
    private String name;
    private String state;
    private String cmd;
    private Action action;
    private Collection<String> botIds;
}

