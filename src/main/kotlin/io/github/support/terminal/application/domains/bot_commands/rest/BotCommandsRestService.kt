package io.github.support.terminal.application.domains.bot_commands.rest

import io.github.support.terminal.application.domains.bot_commands.entity.BotCommandsFactory
import io.github.support.terminal.application.domains.common.action.entity.ActionType
import org.springframework.stereotype.Service

@Service
class BotCommandsRestService(
        private val factory: BotCommandsFactory,
        private val converter: BotCommandsRestConverter
) {

    fun add(request: BotCommandRequest): BotCommandDTO {
        val details = converter.mapToDetails(request)
        val botCommand = factory.createNew(details)
        return converter.mapToDto(botCommand.details)
    }

    fun edit(id: String, request: BotCommandRequest): BotCommandDTO {
        val detailsUpdate = converter.mapToDetails(request)
        val botCommand = factory.update(id, detailsUpdate)
        return converter.mapToDto(botCommand.details)
    }

    fun get(id: String): BotCommandDTO {
        val botCommand = factory.byId(id)
        return converter.mapToDto(botCommand.details)
    }

    fun list(): List<BotCommandDTO> {
        return factory.all()
                .map { converter.mapToDto(it.details) }
    }

    fun delete(id: String) {
        factory.delete(id)
    }

    fun types(): List<BotCommandTypeDTO> {
        return listOf(ActionType.SQL_SELECT_AS_TEXT,
                ActionType.JOIN_SQL_SELECTS_AS_TEXT,
                ActionType.SQL_SELECT_IN_EXCEL_FILE)
                .map { BotCommandTypeDTO(label = it.label, type = it.name) }
    }

}