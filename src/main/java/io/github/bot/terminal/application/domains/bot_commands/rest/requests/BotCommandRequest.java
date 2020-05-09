package io.github.bot.terminal.application.domains.bot_commands.rest.requests;


import io.github.bot.terminal.application.domains.bot_commands.values.BotCommandState;
import io.github.bot.terminal.application.domains.common.action.requests.ActionRequest;
import lombok.Data;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Collection;

@Data
@Accessors(chain = true)
public class BotCommandRequest {

    @NotBlank
    private String name;

    @NotBlank
    private String cmd;

    @NotNull
    protected ActionRequest action;

    @NotEmpty
    private Collection<String> botIds;

    private String state = BotCommandState.ENABLED.name();

}
