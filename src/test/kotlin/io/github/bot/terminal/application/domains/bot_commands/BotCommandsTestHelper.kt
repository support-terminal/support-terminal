/*
package io.github.bot.terminal.application.domains.bot_commands

import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandDetails
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandDTO
import io.github.bot.terminal.application.domains.bot_commands.rest.requests.BotCommandRequest
import io.github.bot.terminal.application.domains.bot_commands.values.BotCommandState
import io.github.bot.terminal.application.domains.common.action.dto.SqlSelectAsTextActionDTO
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsTextActionDetails
import io.github.bot.terminal.application.domains.common.action.requests.SqlSelectAsTextActionRequest
import io.github.bot.terminal.application.domains.common.action.values.ActionType
import java.util.*

open class BotCommandsTestHelper {
    var type = ActionType.SQL_SELECT_AS_TEXT
    var type2 = ActionType.SQL_SELECT_AS_TEXT
    var select = UUID.randomUUID().toString()
    var dbConnectionId = UUID.randomUUID().toString()
    var resultTemplate = UUID.randomUUID().toString()
    var id = UUID.randomUUID().toString()
    var name = UUID.randomUUID().toString()
    var cmd = UUID.randomUUID().toString()
    var botIds = listOf(UUID.randomUUID().toString())
    var state: BotCommandState = BotCommandState.ENABLED
    var select2 = UUID.randomUUID().toString()
    var dbConnectionId2 = UUID.randomUUID().toString()
    var resultTemplate2 = UUID.randomUUID().toString()
    var id2 = UUID.randomUUID().toString()
    var name2 = UUID.randomUUID().toString()
    var cmd2 = UUID.randomUUID().toString()
    var botIds2 = listOf(UUID.randomUUID().toString())
    var state2: BotCommandState = BotCommandState.DISABLED
    val sqlAsSelectBotCommandDetails1: BotCommandDetails
        get() {
            val actionDetails = SqlSelectAsTextActionDetails()
            actionDetails.setType(ActionType.SQL_SELECT_AS_TEXT)
            actionDetails.dbConnectionId = dbConnectionId
            actionDetails.select = select
            actionDetails.resultTemplate = resultTemplate
            val details = BotCommandDetails()
            details.setId(id)
            details.cmd = cmd
            details.name = name
            details.botIds = botIds
            details.setState(state)
            details.actionDetails = actionDetails
            return details
        }

    val sqlAsSelectBotCommandDetails2: BotCommandDetails
        get() {
            val actionDetails2 = SqlSelectAsTextActionDetails()
            actionDetails2.setType(ActionType.SQL_SELECT_AS_TEXT)
            actionDetails2.dbConnectionId = dbConnectionId2
            actionDetails2.select = select2
            actionDetails2.resultTemplate = resultTemplate2
            val details2 = BotCommandDetails()
            details2.setId(id)
            details2.cmd = cmd2
            details2.name = name2
            details2.botIds = botIds2
            details2.setState(state2)
            details2.actionDetails = actionDetails2
            return details2
        }

    val sqlAsSelectBotCommandDto1: BotCommandDTO
        get() {
            val actionDTO = SqlSelectAsTextActionDTO()
            actionDTO.setType(ActionType.SQL_SELECT_AS_TEXT.name)
            actionDTO.setDbConnectionId(dbConnectionId)
            actionDTO.setSelect(select)
            actionDTO.setResultTemplate(resultTemplate)
            val dto = BotCommandDTO()
            dto.setId(id)
            dto.setCmd(cmd)
            dto.setName(name)
            dto.setBotIds(botIds)
            dto.setState(state.name())
            dto.setAction(actionDTO)
            return dto
        }

    val sqlAsSelectBotCommandDto2: BotCommandDTO
        get() {
            val actionDTO2 = SqlSelectAsTextActionDTO()
            actionDTO2.setType(ActionType.SQL_SELECT_AS_TEXT.name)
            actionDTO2.setDbConnectionId(dbConnectionId2)
            actionDTO2.setSelect(select2)
            actionDTO2.setResultTemplate(resultTemplate2)
            val dto2 = BotCommandDTO()
            dto2.setId(id2)
            dto2.setCmd(cmd2)
            dto2.setName(name2)
            dto2.setBotIds(botIds2)
            dto2.setState(state2.name())
            dto2.setAction(actionDTO2)
            return dto2
        }

    val sqlAsSelectBotCommandRequest1: BotCommandRequest
        get() {
            val actionRequest = SqlSelectAsTextActionRequest()
            actionRequest.type = ActionType.SQL_SELECT_AS_TEXT.name
            actionRequest.setDbConnectionId(dbConnectionId)
            actionRequest.setSelect(select)
            actionRequest.setResultTemplate(resultTemplate)
            val request = BotCommandRequest()
            request.setCmd(cmd)
            request.setName(name)
            request.setBotIds(botIds)
            request.setState(state.name())
            request.setAction(actionRequest)
            return request
        }

    val sqlAsSelectBotCommandRequest2: BotCommandRequest
        get() {
            val action = SqlSelectAsTextActionRequest()
            action.type = ActionType.SQL_SELECT_AS_TEXT.name
            action.setDbConnectionId(dbConnectionId2)
            action.setSelect(select2)
            action.setResultTemplate(resultTemplate2)
            val request = BotCommandRequest()
            request.setCmd(cmd2)
            request.setName(name2)
            request.setBotIds(botIds2)
            request.setState(state2.name())
            request.setAction(action)
            return request
        }
}*/
