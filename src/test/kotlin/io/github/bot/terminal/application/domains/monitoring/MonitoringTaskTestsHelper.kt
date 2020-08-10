package io.github.bot.terminal.application.domains.monitoring

import com.nhaarman.mockitokotlin2.mock
import com.nhaarman.mockitokotlin2.spy
import io.github.bot.terminal.application.domains.common.action.dto.SqlSelectAsTextActionDTO
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsTextAction
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsTextActionDetails
import io.github.bot.terminal.application.domains.common.action.factory.ActionsFactory
import io.github.bot.terminal.application.domains.common.action.requests.ActionRequest
import io.github.bot.terminal.application.domains.common.action.requests.SqlSelectAsTextActionRequest
import io.github.bot.terminal.application.domains.common.action.values.ActionType
import io.github.bot.terminal.application.domains.common.conditions.dto.ConditionDTO
import io.github.bot.terminal.application.domains.common.conditions.entity.Condition
import io.github.bot.terminal.application.domains.common.conditions.entity.ConditionDetails
import io.github.bot.terminal.application.domains.common.conditions.factory.ConditionsFactory
import io.github.bot.terminal.application.domains.common.conditions.requests.ConditionRequest
import io.github.bot.terminal.application.domains.common.conditions.values.ConditionType
import io.github.bot.terminal.application.domains.common.notify.dto.NotifyDTO
import io.github.bot.terminal.application.domains.common.notify.entity.Notify
import io.github.bot.terminal.application.domains.common.notify.entity.NotifyDetails
import io.github.bot.terminal.application.domains.common.notify.factory.NotifyFactory
import io.github.bot.terminal.application.domains.common.notify.requests.NotifyRequest
import io.github.bot.terminal.application.domains.db_connection.entity.DbConnection
import io.github.bot.terminal.application.domains.monitoring.entity.MonitoringTask
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskDetails
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskRepository
import io.github.bot.terminal.application.domains.monitoring.rest.dto.MonitoringTaskDTO
import io.github.bot.terminal.application.domains.monitoring.rest.dto.MonitoringTaskTypeDTO
import io.github.bot.terminal.application.domains.monitoring.rest.requests.MonitoringTaskRequest
import io.github.bot.terminal.application.domains.notificarion_api.NotificationApiTestData
import io.github.bot.terminal.application.domains.notificarion_api.NotificationsApiDataSet


object MonitoringTaskDataSet {
    val repository: MonitoringTaskRepository = mock()
    val actionsFactory: ActionsFactory = mock()
    val notifyFactory: NotifyFactory = mock()
    val dbConnectionMock: DbConnection<*> = mock()
    val conditionsFactory: ConditionsFactory = spy(ConditionsFactory())

    val typeDtos = listOf(
            MonitoringTaskTypeDTO(ActionType.SQL_SELECT_AS_ONE_NUMBER.label, ActionType.SQL_SELECT_AS_ONE_NUMBER.name)
    )

    enum class Conditions(val type: ConditionType, val expectedValue: Double) {
        CONDITION_1(ConditionType.NUMERIC_EQUAL, 10.0),
        CONDITION_2(ConditionType.NUMERIC_LESS_THAN, 10.0);

        fun dto() = ConditionDTO(
                type = type.name,
                expectedValue = expectedValue
        )

        fun request() = ConditionRequest(
                type = type.name,
                expectedValue = expectedValue
        )

        fun details() = ConditionDetails(
                conditionType = type,
                expectedValue = expectedValue
        )

        fun condition() = Condition(
                conditionType = type,
                expectedValue = expectedValue
        )

    }


    enum class Notifys(val notificationApiId: NotificationApiTestData, val messageTemplate: String) {
        NOTIFY_1(NotificationsApiDataSet.Slack.SLACK_1, "result1 \${name}"),
        NOTIFY_2(NotificationsApiDataSet.Slack.SLACK_2, "result2 \${name}");

        fun dto() = NotifyDTO(
                notificationApiId = notificationApiId.id(),
                messageTemplate = messageTemplate
        )

        fun request() = NotifyRequest(
                notificationApiId = notificationApiId.id(),
                messageTemplate = messageTemplate
        )

        fun details() = NotifyDetails(
                notificationApiId = notificationApiId.id(),
                messageTemplate = messageTemplate
        )

        fun notify() = Notify(
                notificationApi = notificationApiId.api(),
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

    enum class MonitoringTasks(val id: String, val label: String, val enabled: Boolean,
                               val cron: String, val action: Actions,
                               var conditions: List<Conditions>,
                               val notifyList: List<Notifys>) {
        MONITORING_TASK_1("MT_01", "MT_01", true, "cron1", Actions.ACTION_1,
                listOf(Conditions.CONDITION_1), listOf(Notifys.NOTIFY_1)),
        MONITORING_TASK_2("MT_02", "MT_02", false, "cron2", Actions.ACTION_2,
                listOf(Conditions.CONDITION_2), listOf(Notifys.NOTIFY_2)),
        MONITORING_TASK_1_UPDATE("MT_01", "MT_02", false, "cron2", Actions.ACTION_2,
                listOf(Conditions.CONDITION_2), listOf(Notifys.NOTIFY_2));

        fun id() = id

        fun dto() = MonitoringTaskDTO(
                id = id,
                name = label,
                enabled = enabled,
                action = action.dto(),
                cron = cron,
                conditions = conditions.map { it.dto() },
                notifyList = notifyList.map { it.dto() }
        )

        fun details() = MonitoringTaskDetails(
                id = id,
                name = label,
                isEnabled = enabled,
                actionDetails = action.details(),
                cron = cron,
                conditions = conditions.map { it.details() },
                notifyList = notifyList.map { it.details() }
        )

        fun task() = MonitoringTask(
                details = details(),
                action = action.action(),
                conditions = conditions.map { it.condition() },
                notifyList = notifyList.map { it.notify() }
        )

        fun request() = MonitoringTaskRequest(
                name = label,
                enabled = enabled,
                cron = cron,
                action = action.request(),
                conditions = conditions.map { it.request() },
                notifyList = notifyList.map { it.request() }
        )

    }

}
