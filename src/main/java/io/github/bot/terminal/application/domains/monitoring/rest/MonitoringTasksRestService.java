package io.github.bot.terminal.application.domains.monitoring.rest;

import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskDetails;
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskRepository;
import io.github.bot.terminal.application.domains.monitoring.rest.dto.MonitoringTaskDTO;
import io.github.bot.terminal.application.domains.monitoring.rest.requests.MonitoringTaskRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MonitoringTasksRestService {

    private final MonitoringTaskRepository repository;
    private final MonitoringTasksRestConverter converter;

    public MonitoringTaskDTO add(MonitoringTaskRequest request) {
        MonitoringTaskDetails details = converter.mapToDetails(request);
        repository.add(details);
        return converter.mapToDto(details);
    }

    public MonitoringTaskDTO edit(String id, MonitoringTaskRequest request) {
        MonitoringTaskDetails detailsUpdate = converter.mapToDetails(request);
        MonitoringTaskDetails details = getById(id);
        detailsUpdate.setId(details.getId());
        repository.update(detailsUpdate);
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
    }

    private MonitoringTaskDetails getById(String id) {
        return repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Monitoring task not found: id=" + id));
    }
}
