package io.github.support.terminal.application.domains.monitoring.rest

import io.github.support.terminal.application.domains.common.action.ActionRestConverter
import io.github.support.terminal.application.domains.common.conditions.ConditionRestConverter
import io.github.support.terminal.application.domains.common.conditions.entity.ConditionDetails
import io.github.support.terminal.application.domains.common.conditions.ConditionRequest
import io.github.support.terminal.application.domains.common.notify.NotifyRestConverter
import io.github.support.terminal.application.domains.common.notify.entity.NotifyDetails
import io.github.support.terminal.application.domains.common.notify.NotifyRequest
import io.github.support.terminal.application.domains.monitoring.repository.MonitoringTaskDetails
import org.springframework.stereotype.Service

@Service
class MonitoringTasksRestConverter(
        private val actionRestConverter: ActionRestConverter,
        private val conditionRestConverter: ConditionRestConverter,
        private val notifyRestConverter: NotifyRestConverter
) {


    fun mapToDetails(request: MonitoringTaskRequest): MonitoringTaskDetails {
        val conditions = request.conditions
                .map { c: ConditionRequest -> conditionRestConverter.mapToDetails(c) }
        val notifyList = request.notifyList
                .map { c: NotifyRequest -> notifyRestConverter.mapToDetails(c) }
        return MonitoringTaskDetails(
                name = request.name,
                isEnabled = request.enabled,
                actionDetails = actionRestConverter.mapToDetails(request.action),
                cron = request.cron,
                notifyList = notifyList,
                conditions = conditions
        )
    }

    fun mapToDto(details: MonitoringTaskDetails): MonitoringTaskDTO {
        val conditions = details.conditions
                .map { c: ConditionDetails -> conditionRestConverter.mapToDto(c) }
        val notifyList = details.notifyList
                .map { n: NotifyDetails -> notifyRestConverter.mapToDto(n) }
        return MonitoringTaskDTO(
                id = details.id,
                name = details.name,
                enabled = details.isEnabled,
                action = actionRestConverter.mapToDto(details.actionDetails),
                cron = details.cron,
                notifyList = notifyList,
                conditions = conditions
        )
    }
}