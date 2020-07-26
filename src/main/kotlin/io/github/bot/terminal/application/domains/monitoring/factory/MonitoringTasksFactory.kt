package io.github.bot.terminal.application.domains.monitoring.factory

import io.github.bot.terminal.application.domains.common.action.factory.ActionsFactory
import io.github.bot.terminal.application.domains.common.conditions.entity.ConditionDetails
import io.github.bot.terminal.application.domains.common.conditions.factory.ConditionsFactory
import io.github.bot.terminal.application.domains.common.notify.entity.NotifyDetails
import io.github.bot.terminal.application.domains.common.notify.factory.NotifyFactory
import io.github.bot.terminal.application.domains.monitoring.entity.MonitoringTask
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskDetails
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskRepository
import org.springframework.stereotype.Service
import java.util.stream.Collectors

@Service
class MonitoringTasksFactory(
        private val repository: MonitoringTaskRepository,
        private val actionsFactory: ActionsFactory,
        private val notifyFactory: NotifyFactory,
        private val conditionsFactory: ConditionsFactory
) {

    fun build(details: MonitoringTaskDetails): MonitoringTask {
        val action = actionsFactory.build(details.actionDetails)
        val conditions = details.conditions.stream()
                .map { c: ConditionDetails -> conditionsFactory.build(c) }
                .collect(Collectors.toList())
        val notifies = details.notifyList.stream()
                .map { n: NotifyDetails -> notifyFactory.build(n) }
                .collect(Collectors.toList())
        return MonitoringTask(
                isEnabled = details.isEnabled,
                details = details,
                action = action,
                conditions = conditions,
                notifyList = notifies
        )
    }

    val all: List<MonitoringTask>
        get() = repository
                .findAll()
                .map { details: MonitoringTaskDetails -> build(details) }
                .toList()
}