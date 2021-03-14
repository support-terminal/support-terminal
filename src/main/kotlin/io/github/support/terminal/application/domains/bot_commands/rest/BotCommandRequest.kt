package io.github.support.terminal.application.domains.bot_commands.rest

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import io.github.support.terminal.application.domains.common.action.ActionRequest
import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotEmpty
import javax.validation.constraints.NotNull

@JsonIgnoreProperties(ignoreUnknown = true)
data class BotCommandRequest(
        val name: @NotBlank String,
        val cmdTemplate: @NotBlank String,
        val action: @NotNull ActionRequest,
        val botIds: @NotEmpty Collection<String> = ArrayList(),
        val enabled: Boolean
)