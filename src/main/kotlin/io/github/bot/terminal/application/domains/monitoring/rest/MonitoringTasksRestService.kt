package io.github.bot.terminal.application.domains.monitoring.rest

import io.github.bot.terminal.application.domains.common.action.values.ActionType
import io.github.bot.terminal.application.domains.common.conditions.dto.ConditionTypeDTO
import io.github.bot.terminal.application.domains.common.conditions.values.ConditionType
import io.github.bot.terminal.application.domains.common.cron.dto.CronFrequencyDTO
import io.github.bot.terminal.application.domains.common.cron.values.Cron
import io.github.bot.terminal.application.domains.monitoring.factory.MonitoringTasksFactory
import io.github.bot.terminal.application.domains.monitoring.rest.dto.MonitoringTaskDTO
import io.github.bot.terminal.application.domains.monitoring.rest.dto.MonitoringTaskTypeDTO
import io.github.bot.terminal.application.domains.monitoring.rest.requests.MonitoringTaskRequest
import io.github.bot.terminal.application.domains.workers.MonitoringTasksWorker
import org.springframework.stereotype.Service
import java.util.*
import java.util.stream.Collectors
import java.util.stream.Stream

@Service
class MonitoringTasksRestService(
        private val factory: MonitoringTasksFactory,
        private val converter: MonitoringTasksRestConverter,
        private val worker: MonitoringTasksWorker
) {

    fun add(request: MonitoringTaskRequest): MonitoringTaskDTO {
        val details = converter.mapToDetails(request)
        val task = factory.createNew(details)
        worker.runRefreshSchedulers()
        return converter.mapToDto(task.details)
    }


    fun edit(id: String, request: MonitoringTaskRequest): MonitoringTaskDTO {
        val detailsUpdate = converter.mapToDetails(request)
        val task = factory.update(id, detailsUpdate)
        worker.runRefreshSchedulers()
        return converter.mapToDto(task.details)
    }

    fun get(id: String): MonitoringTaskDTO {
        val task = factory.byId(id)
        return converter.mapToDto(task.details)
    }

    fun list(): List<MonitoringTaskDTO> {
        return factory.all()
                .map { converter.mapToDto(it.details) }
    }

    fun delete(id: String) {
        factory.delete(id)
    }

    fun cronFrequencies(): List<CronFrequencyDTO> {
        return Cron.values()
                .map { t: Cron -> CronFrequencyDTO(t.label, t.cron) }
    }

    fun types(): List<MonitoringTaskTypeDTO> {
        return listOf(ActionType.SQL_SELECT_AS_ONE_NUMBER)
                .map { MonitoringTaskTypeDTO(label = it.label, type = it.name) }
    }

    fun conditionTypes(): List<ConditionTypeDTO> {
        return ConditionType.values()
                .map { t: ConditionType -> ConditionTypeDTO(t.label, t.name) }
    }
}