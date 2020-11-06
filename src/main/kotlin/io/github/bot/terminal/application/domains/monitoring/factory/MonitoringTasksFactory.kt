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

    fun createNew(details: MonitoringTaskDetails): MonitoringTask {
        val task = build(details)
        repository.add(details)
        return task
    }

    fun update(id: String, detailsUpdate: MonitoringTaskDetails): MonitoringTask {
        val details = getById(id)
        details.merge(detailsUpdate)
        val task = build(details)
        repository.update(details)
        return task
    }

    fun getById(id: String): MonitoringTaskDetails = repository.findById(id)
            ?: throw IllegalArgumentException("MonitoringTask not found by id=${id}")

    fun all(): List<MonitoringTask> = repository.findAll()
            .map { details: MonitoringTaskDetails -> build(details) }

    fun byId(id: String): MonitoringTask {
        return build(getById(id))
    }

    fun delete(id: String) {
        repository.findById(id)?.let {
            repository.deleteById(id)
        }
    }

    fun build(details: MonitoringTaskDetails): MonitoringTask {
        val action = actionsFactory.build(details.actionDetails)
        val conditions = details.conditions
                .map { c: ConditionDetails -> conditionsFactory.build(c) }
        val notifies = details.notifyList
                .map { n: NotifyDetails -> notifyFactory.build(n) }
        return MonitoringTask(
                details = details,
                action = action,
                conditions = conditions,
                notifyList = notifies
        )
    }

}