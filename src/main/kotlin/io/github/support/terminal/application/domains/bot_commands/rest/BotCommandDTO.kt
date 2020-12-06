package io.github.support.terminal.application.domains.bot_commands.rest

import io.github.support.terminal.application.domains.common.action.ActionDTO

data class BotCommandDTO(
        val id: String,
        val name: String,
        val cmdTemplate: String,
        val botIds: Collection<String>,
        val action: ActionDTO,
        val enabled: Boolean
)