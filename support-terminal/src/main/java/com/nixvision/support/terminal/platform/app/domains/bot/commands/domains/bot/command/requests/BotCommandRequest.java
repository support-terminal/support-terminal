package com.nixvision.support.terminal.platform.app.domains.bot.commands.domains.bot.command.requests;



import com.nixvision.support.terminal.platform.app.domains.core.action.models.actions.Action;
import lombok.Data;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Collection;

@Data
public class BotCommandRequest {

    @NotBlank
    private String name;

    @NotBlank
    private String cmd;

    @NotNull
    @Valid
    private Action action;

    @NotEmpty
    private Collection<String> botIds;

    private String state;

}
