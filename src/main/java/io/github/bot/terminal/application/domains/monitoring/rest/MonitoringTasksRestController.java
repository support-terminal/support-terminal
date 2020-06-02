package io.github.bot.terminal.application.domains.monitoring.rest;


import io.github.bot.terminal.application.domains.common.conditions.dto.ConditionTypeDTO;
import io.github.bot.terminal.application.domains.common.cron.dto.CronFrequencyDTO;
import io.github.bot.terminal.application.domains.monitoring.rest.dto.MonitoringTaskDTO;
import io.github.bot.terminal.application.domains.monitoring.rest.dto.MonitoringTaskTypeDTO;
import io.github.bot.terminal.application.domains.monitoring.rest.requests.MonitoringTaskRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;
import java.util.List;

@RestController
@Slf4j
@RequestMapping("/api/monitoring/tasks")
@RequiredArgsConstructor
public class MonitoringTasksRestController {

    private final MonitoringTasksRestService monitoringTasksRestService;

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public MonitoringTaskDTO add(@RequestBody @Valid MonitoringTaskRequest request) {
        return monitoringTasksRestService.add(request);
    }

    @GetMapping
    @ResponseStatus(code = HttpStatus.OK)
    public List<MonitoringTaskDTO> list() {
        return monitoringTasksRestService.list();
    }

    @GetMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public MonitoringTaskDTO get(@PathVariable String id) {
        return monitoringTasksRestService.get(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String id) {
        monitoringTasksRestService.delete(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public MonitoringTaskDTO edit(@PathVariable String id,
                                  @RequestBody @Valid MonitoringTaskRequest request) {
        return monitoringTasksRestService.edit(id, request);
    }

    @GetMapping("/cron-frequencies")
    @ResponseStatus(code = HttpStatus.OK)
    public List<CronFrequencyDTO> cronFrequencies() {
        return monitoringTasksRestService.cronFrequencies();
    }

    @GetMapping("/conditions")
    @ResponseStatus(code = HttpStatus.OK)
    public List<ConditionTypeDTO> conditionTypes() {
        return monitoringTasksRestService.conditionTypes();
    }

    @GetMapping("/types")
    @ResponseStatus(code = HttpStatus.OK)
    public Collection<MonitoringTaskTypeDTO> types() {
        return monitoringTasksRestService.types();
    }

}

