package io.github.bot.terminal.application.domains.monitoring

import com.nhaarman.mockitokotlin2.mock
import io.github.bot.terminal.application.domains.common.action.dto.SqlSelectAsTextActionDTO
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsTextAction
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsTextActionDetails
import io.github.bot.terminal.application.domains.common.action.factory.ActionsFactory
import io.github.bot.terminal.application.domains.common.action.requests.ActionRequest
import io.github.bot.terminal.application.domains.common.action.requests.SqlSelectAsTextActionRequest
import io.github.bot.terminal.application.domains.common.action.values.ActionType
import io.github.bot.terminal.application.domains.common.conditions.dto.ConditionDTO
import io.github.bot.terminal.application.domains.common.notify.dto.NotifySlackBotDTO
import io.github.bot.terminal.application.domains.db_connection.entity.DbConnection
import io.github.bot.terminal.application.domains.monitoring.entity.MonitoringTask
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskDetails
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskRepository
import io.github.bot.terminal.application.domains.monitoring.rest.dto.MonitoringTaskDTO
import io.github.bot.terminal.application.domains.monitoring.rest.dto.MonitoringTaskTypeDTO
import io.github.bot.terminal.application.domains.monitoring.rest.requests.MonitoringTaskRequest


interface MonitoringTaskTestData {
    fun dto(): MonitoringTaskDTO
    fun request(): MonitoringTaskRequest
    fun details(): MonitoringTaskDetails
    fun api(): MonitoringTask
    fun id(): String
}

object MonitoringTaskDataSet {
    val repository: MonitoringTaskRepository = mock()
    val actionsFactory: ActionsFactory = mock()
    val dbConnectionMock: DbConnection<*> = mock()

    val typeDtos = listOf(
            MonitoringTaskTypeDTO(ActionType.SQL_SELECT_AS_ONE_NUMBER.label, ActionType.SQL_SELECT_AS_ONE_NUMBER.name)
    )


    enum class Conditions(val type: String, val expectedValue: Double) {
        CONDITION_1("condition_type_1", 10.0);

        fun dto() = ConditionDTO(
                type = type,
                expectedValue = expectedValue
        )

    }


    enum class Notifys(val botId: String, val notificationApiId: String, val messageTemplate: String) {
        NOTIFY_1("select1", "db_connection1", "result1 \${name}");

        fun dto() = NotifySlackBotDTO(
                botId = botId,
                notificationApiId = notificationApiId,
                messageTemplate = messageTemplate
        )

    }

    enum class Actions(val select: String, val dbConnectionId: String, val resultTemplate: String) {
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

    enum class MonitoringTasks(val id: String, val enabled: Boolean,
                               val cron: String, val action: Actions,
                               var conditions: List<Conditions>,
                               val notifyList: List<Notifys>) {
        MONITORING_TASK_1("MT_01", true, "cron1", Actions.ACTION_1,
                listOf(Conditions.CONDITION_1), listOf(Notifys.NOTIFY_1));

        fun id() = id

        fun dto() = MonitoringTaskDTO(
                id = id,
                name = name,
                enabled = enabled,
                action = action.dto(),
                cron = cron,
                conditions = conditions.map { it.dto() },
                notifyList = notifyList.map { it.dto() }
        )


    }

}
