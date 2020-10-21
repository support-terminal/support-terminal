package io.github.bot.terminal.application.domains.bot_commands

import com.nhaarman.mockitokotlin2.mock
import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommand
import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandDetails
import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandRepository
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandDTO
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandTypeDTO
import io.github.bot.terminal.application.domains.bot_commands.rest.requests.BotCommandRequest
import io.github.bot.terminal.application.domains.common.action.dto.SqlSelectAsTextActionDTO
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsTextAction
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsTextActionDetails
import io.github.bot.terminal.application.domains.common.action.factory.ActionsFactory
import io.github.bot.terminal.application.domains.common.action.requests.ActionRequest
import io.github.bot.terminal.application.domains.common.action.requests.SqlSelectAsTextActionRequest
import io.github.bot.terminal.application.domains.common.action.values.ActionType
import io.github.bot.terminal.application.domains.db_connection.entity.DbConnection
import io.github.bot.terminal.application.domains.notificarion_api.entity.*
import io.github.bot.terminal.application.domains.notificarion_api.rest.NotificationApiDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.NotificationApiRequest


interface BotCommandTestData {
    fun dto(): NotificationApiDTO
    fun request(): NotificationApiRequest
    fun details(): NotificationApiDetails
    fun api(): NotificationApi
    fun id(): String
}

object BotCommandsDataSet {
    val repository: BotCommandRepository = mock()
    val actionsFactory: ActionsFactory = mock()

    val dbConnectionMock: DbConnection<*> = mock()

    val typeDtos = listOf(
            BotCommandTypeDTO(ActionType.SQL_SELECT_AS_TEXT.label, ActionType.SQL_SELECT_AS_TEXT.name),
            BotCommandTypeDTO(ActionType.SQL_SELECT_AS_ONE_NUMBER.label, ActionType.SQL_SELECT_AS_ONE_NUMBER.name),
            BotCommandTypeDTO(ActionType.SQL_SELECT_IN_EXCEL_FILE.label, ActionType.SQL_SELECT_IN_EXCEL_FILE.name)
    )


    enum class Action(val select: String, val dbConnectionId: String, val resultTemplate: String) {
        ACTION_1("select1", "db_connection1", "result1 \${name}"),
        ACTION_2("select2", "db_connection2", "result2 \${name}");

        fun dto() = SqlSelectAsTextActionDTO(
                select = select,
                dbConnectionId = dbConnectionId,
                resultTemplate = resultTemplate
        )
        fun details() = SqlSelectAsTextActionDetails(
                select = select,
                dbConnectionId = dbConnectionId,
                resultTemplate = resultTemplate
        )
        fun request() = SqlSelectAsTextActionRequest(
                select = select,
                dbConnectionId = dbConnectionId,
                resultTemplate = resultTemplate
        )

        fun action() = SqlSelectAsTextAction(
                select = select,
                resultTemplate = resultTemplate,
                dbConnection = dbConnectionMock
        )

        fun requestWrong() = ActionRequest(type = "wrong")
    }

    enum class BotCommands(val id: String, val label: String, val cmd: String, val botIds: Collection<String>, val action: Action, var enabled: Boolean = true) {
        BOT_COMMAND_1("bot_command_1", "b_label_1", "cmd1", listOf("b1","b2"), Action.ACTION_1, true),
        BOT_COMMAND_2("bot_command_2", "b_label_2", "cmd2", listOf("b2","b3"), Action.ACTION_2, false),
        BOT_COMMAND_1_UPDATED("bot_command_1", "b_label_2", "cmd2", listOf("b2","b3"), Action.ACTION_2, false);

        fun id() = id

        fun dto() = BotCommandDTO(
                id = id,
                name = label,
                cmd = cmd,
                botIds = botIds,
                action = action.dto(),
                enabled = enabled
        )

        fun details() = BotCommandDetails(
                id = id,
                name = label,
                cmd = cmd,
                botIds = botIds,
                actionDetails = action.details(),
                isEnabled = enabled
        )

        fun botCommand() = BotCommand(
                details = details(),
                action = action.action()
        )

        fun request() = BotCommandRequest(
                name = label,
                cmd = cmd,
                botIds = botIds,
                action = action.request(),
                enabled = enabled
        )

        fun requestWrong() = BotCommandRequest(
                name = label,
                cmd = cmd,
                botIds = botIds,
                action = action.requestWrong(),
                enabled = enabled
        )

    }

}
