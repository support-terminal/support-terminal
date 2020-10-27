package io.github.bot.terminal.application.domains.bot_commands.rest

import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandDetails
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandDTO
import io.github.bot.terminal.application.domains.bot_commands.rest.requests.BotCommandRequest
import io.github.bot.terminal.application.domains.common.action.ActionRestConverter
import org.springframework.stereotype.Service

@Service
class BotCommandsRestConverter(
        private val actionRestConverter: ActionRestConverter
) {
    fun mapToDetails(request: BotCommandRequest): BotCommandDetails =
            BotCommandDetails(
                    name = request.name,
                    cmdTemplate = request.cmdTemplate,
                    isEnabled = request.enabled,
                    botIds = request.botIds,
                    actionDetails = actionRestConverter.mapToDetails(request.action)
            )

    fun mapToDto(details: BotCommandDetails): BotCommandDTO =
            BotCommandDTO(
                    id = details.id,
                    name = details.name,
                    cmdTemplate = details.cmdTemplate,
                    enabled = details.isEnabled,
                    botIds = details.botIds,
                    action = actionRestConverter.mapToDto(details.actionDetails)
            )

}