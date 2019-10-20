package io.github.support.terminal.application.domains.bot_commands.entities;


import io.github.support.terminal.app.domains.core.action.models.actions.Action;
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

