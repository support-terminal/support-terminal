package io.github.bot.terminal.application.domains.monitoring.rest

import io.github.bot.terminal.application.domains.common.action.values.ActionType
import io.github.bot.terminal.application.domains.common.conditions.dto.ConditionTypeDTO
import io.github.bot.terminal.application.domains.common.conditions.values.ConditionType
import io.github.bot.terminal.application.domains.common.cron.dto.CronFrequencyDTO
import io.github.bot.terminal.application.domains.common.cron.values.Cron
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskDetails
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskRepository
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
        private val repository: MonitoringTaskRepository,
        private val converter: MonitoringTasksRestConverter,
        private val worker: MonitoringTasksWorker
) {

    fun add(request: MonitoringTaskRequest): MonitoringTaskDTO {
        val details = converter.mapToDetails(request)
        repository.add(details)
        worker.runRefreshSchedulers()
        return converter.mapToDto(details)
    }

    fun edit(id: String, request: MonitoringTaskRequest): MonitoringTaskDTO {
        val detailsUpdate = converter.mapToDetails(request)
        val details = getById(id)
        details.merge(detailsUpdate)
        repository.update(details)
        worker.runRefreshSchedulers()
        return converter.mapToDto(details)
    }

    fun list(): List<MonitoringTaskDTO> {
        return repository.findAll()
                .stream().map { details: MonitoringTaskDetails -> converter.mapToDto(details) }
                .collect(Collectors.toList())
    }

    operator fun get(id: String): MonitoringTaskDTO {
        return converter.mapToDto(getById(id))
    }

    fun delete(id: String) {
        repository.deleteById(id)
        worker.runRefreshSchedulers()
    }

    private fun getById(id: String): MonitoringTaskDetails {
        return repository.findById(id)
                ?: throw IllegalArgumentException("Monitoring task not found: id=$id")
    }

    fun cronFrequencies(): List<CronFrequencyDTO> {
        return Arrays.stream(Cron.values())
                .map { t: Cron -> CronFrequencyDTO(t.label,t.cron) }
                .collect(Collectors.toList())
    }

    fun types(): List<MonitoringTaskTypeDTO> {
        return Stream.of(ActionType.SQL_SELECT_AS_ONE_NUMBER)
                .map { MonitoringTaskTypeDTO(label = it.label, type = it.name) }
                .collect(Collectors.toList())
    }

    fun conditionTypes(): List<ConditionTypeDTO> {
        return Stream.of(*ConditionType.values())
                .map { t: ConditionType -> ConditionTypeDTO(t.label, t.name) }
                .collect(Collectors.toList())
    }
}