package io.github.support.terminal.app.domains.bot.monitoring.rest;


import io.github.support.terminal.app.domains.bot.monitoring.domains.bot.task.dto.BotMonitoringTaskDTO;
import io.github.support.terminal.app.domains.bot.monitoring.domains.bot.task.requests.BotMonitoringTaskRequest;
import io.github.support.terminal.app.domains.bot.monitoring.domains.bot.task.services.BotMonitoringTasksApiService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;


@RestController
@Slf4j
@RequestMapping("/api/bot-monitoring/tasks")
@RequiredArgsConstructor
public class BotMonitoringTasksController {

    private final BotMonitoringTasksApiService botMonitoringTasksApiService;

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public BotMonitoringTaskDTO add(@RequestBody @Valid BotMonitoringTaskRequest request) throws Exception {
        return botMonitoringTasksApiService.add(request);
    }

    @GetMapping
    @ResponseStatus(code = HttpStatus.OK)
    public Collection<BotMonitoringTaskDTO> getAll() throws Exception {
        return botMonitoringTasksApiService.getList();
    }


    @GetMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public BotMonitoringTaskDTO getById(@PathVariable String id) throws Exception {
        return botMonitoringTasksApiService.getById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String id) throws Exception {
        botMonitoringTasksApiService.delete(id);
    }


    @PutMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public BotMonitoringTaskDTO update(@PathVariable String id,
                                       @RequestBody @Valid BotMonitoringTaskRequest request) throws Exception {
        return botMonitoringTasksApiService.update(id, request);
    }


}

