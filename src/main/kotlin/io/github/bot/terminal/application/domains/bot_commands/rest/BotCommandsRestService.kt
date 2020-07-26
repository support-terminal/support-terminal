package io.github.bot.terminal.application.domains.bot_commands.rest

import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandDetails
import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandRepository
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandDTO
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandTypeDTO
import io.github.bot.terminal.application.domains.bot_commands.rest.requests.BotCommandRequest
import io.github.bot.terminal.application.domains.common.action.values.ActionType
import org.springframework.stereotype.Service
import java.util.stream.Collectors

@Service
class BotCommandsRestService(
        private val repository: BotCommandRepository,
        private val converter: BotCommandsRestConverter
) {

    fun add(request: BotCommandRequest): BotCommandDTO {
        val details = converter.mapToDetails(request)
        repository.add(details)
        return converter.mapToDto(details)
    }

    fun edit(id: String, request: BotCommandRequest): BotCommandDTO {
        val detailsUpdate = converter.mapToDetails(request)
        val details = getById(id)
        details.merge(detailsUpdate)
        repository.update(details)
        return converter.mapToDto(details)
    }

    operator fun get(id: String): BotCommandDTO {
        return converter.mapToDto(getById(id))
    }

    fun list(): List<BotCommandDTO> {
        return repository.findAll()
                .stream().map { details: BotCommandDetails -> converter.mapToDto(details) }
                .collect(Collectors.toList())
    }

    fun delete(id: String) {
        repository.deleteById(id)
    }

    fun types(): List<BotCommandTypeDTO> {
        return listOf(ActionType.SQL_SELECT_AS_TEXT,
                ActionType.SQL_SELECT_IN_EXCEL_FILE)
                .map { BotCommandTypeDTO(label = it.label, type = it.name) }
                .toList()
    }

    private fun getById(id: String): BotCommandDetails {
        return repository.findById(id)
                ?: throw IllegalArgumentException("Bot command not found: id=$id")
    }
}