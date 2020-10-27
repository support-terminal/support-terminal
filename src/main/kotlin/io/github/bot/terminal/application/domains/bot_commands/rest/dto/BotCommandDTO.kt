package io.github.bot.terminal.application.domains.bot_commands.rest.dto

import io.github.bot.terminal.application.domains.common.action.dto.ActionDTO

data class BotCommandDTO(
        val id: String,
        val name: String,
        val cmdTemplate: String,
        val botIds: Collection<String>,
        val action: ActionDTO,
        val enabled: Boolean
)