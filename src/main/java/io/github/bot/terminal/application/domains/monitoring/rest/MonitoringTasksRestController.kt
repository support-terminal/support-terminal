package io.github.bot.terminal.application.domains.monitoring.rest

import io.github.bot.terminal.application.domains.common.conditions.dto.ConditionTypeDTO
import io.github.bot.terminal.application.domains.common.cron.dto.CronFrequencyDTO
import io.github.bot.terminal.application.domains.monitoring.rest.dto.MonitoringTaskDTO
import io.github.bot.terminal.application.domains.monitoring.rest.dto.MonitoringTaskTypeDTO
import io.github.bot.terminal.application.domains.monitoring.rest.requests.MonitoringTaskRequest
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
@RequestMapping("/api/monitoring/tasks")
class MonitoringTasksRestController(
        private val monitoringTasksRestService: MonitoringTasksRestService
) {
    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    fun add(@RequestBody request: @Valid MonitoringTaskRequest): MonitoringTaskDTO {
        return monitoringTasksRestService.add(request)
    }

    @GetMapping
    @ResponseStatus(code = HttpStatus.OK)
    fun list(): List<MonitoringTaskDTO> {
        return monitoringTasksRestService.list()
    }

    @GetMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    operator fun get(@PathVariable id: String): MonitoringTaskDTO {
        return monitoringTasksRestService[id]
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    fun delete(@PathVariable id: String) {
        monitoringTasksRestService.delete(id)
    }

    @PutMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    fun edit(@PathVariable id: String,
             @RequestBody request: @Valid MonitoringTaskRequest): MonitoringTaskDTO {
        return monitoringTasksRestService.edit(id, request)
    }

    @GetMapping("/cron-frequencies")
    @ResponseStatus(code = HttpStatus.OK)
    fun cronFrequencies(): List<CronFrequencyDTO> {
        return monitoringTasksRestService.cronFrequencies()
    }

    @GetMapping("/conditions")
    @ResponseStatus(code = HttpStatus.OK)
    fun conditionTypes(): List<ConditionTypeDTO> {
        return monitoringTasksRestService.conditionTypes()
    }

    @GetMapping("/types")
    @ResponseStatus(code = HttpStatus.OK)
    fun types(): Collection<MonitoringTaskTypeDTO> {
        return monitoringTasksRestService.types()
    }
}