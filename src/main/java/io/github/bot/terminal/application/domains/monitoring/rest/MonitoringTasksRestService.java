package io.github.bot.terminal.application.domains.monitoring.rest;

import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandTypeDTO;
import io.github.bot.terminal.application.domains.common.action.values.ActionType;
import io.github.bot.terminal.application.domains.common.conditions.dto.ConditionTypeDTO;
import io.github.bot.terminal.application.domains.common.conditions.values.ConditionType;
import io.github.bot.terminal.application.domains.common.cron.dto.CronFrequencyDTO;
import io.github.bot.terminal.application.domains.common.cron.values.Cron;
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskDetails;
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskRepository;
import io.github.bot.terminal.application.domains.monitoring.rest.dto.MonitoringTaskDTO;
import io.github.bot.terminal.application.domains.monitoring.rest.dto.MonitoringTaskTypeDTO;
import io.github.bot.terminal.application.domains.monitoring.rest.requests.MonitoringTaskRequest;
import io.github.bot.terminal.application.domains.workers.MonitoringTasksWorker;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class MonitoringTasksRestService {

    private final MonitoringTaskRepository repository;
    private final MonitoringTasksRestConverter converter;
    private final MonitoringTasksWorker worker;

    public MonitoringTaskDTO add(MonitoringTaskRequest request) {
        MonitoringTaskDetails details = converter.mapToDetails(request);
        repository.add(details);
        worker.runRefreshSchedulers();
        return converter.mapToDto(details);
    }

    public MonitoringTaskDTO edit(String id, MonitoringTaskRequest request) {
        MonitoringTaskDetails detailsUpdate = converter.mapToDetails(request);
        MonitoringTaskDetails details = getById(id);
        detailsUpdate.setId(details.getId());
        repository.update(detailsUpdate);
        worker.runRefreshSchedulers();
        return converter.mapToDto(detailsUpdate);
    }

    public List<MonitoringTaskDTO> list() {
        return repository.findAll()
                .stream().map(converter::mapToDto)
                .collect(Collectors.toList());
    }

    public MonitoringTaskDTO get(String id) {
        return converter.mapToDto(getById(id));
    }

    public void delete(String id) {
        repository.deleteById(id);
        worker.runRefreshSchedulers();
    }

    private MonitoringTaskDetails getById(String id) {
        return repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Monitoring task not found: id=" + id));
    }

    public List<CronFrequencyDTO> cronFrequencies() {
        return Arrays.stream(Cron.values())
                .map(t -> new CronFrequencyDTO().setLabel(t.getLabel()).setCron(t.getCron()))
                .collect(Collectors.toList());
    }

    public List<MonitoringTaskTypeDTO> types() {
        return Stream.of(ActionType.SQL_SELECT_AS_ONE_NUMBER)
                .map(t -> new MonitoringTaskTypeDTO().setLabel(t.getLabel()).setType(t.name()))
                .collect(Collectors.toList());
    }

    public List<ConditionTypeDTO> conditionTypes() {
        return Stream.of(ConditionType.values())
            .map(t -> new ConditionTypeDTO().setLabel(t.getLabel()).setType(t.name()))
            .collect(Collectors.toList());
    }
}
