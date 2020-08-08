package io.github.bot.terminal.application.domains.bot_commands.rest.requests

import io.github.bot.terminal.application.domains.common.action.requests.ActionRequest
import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotEmpty
import javax.validation.constraints.NotNull

data class BotCommandRequest(
        val name: @NotBlank String,
        val cmd: @NotBlank String,
        val action: @NotNull ActionRequest,
        val botIds: @NotEmpty Collection<String> = ArrayList(),
        val enabled: Boolean
)