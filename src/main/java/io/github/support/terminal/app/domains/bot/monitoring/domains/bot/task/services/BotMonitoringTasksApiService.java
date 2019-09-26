package io.github.support.terminal.app.domains.bot.monitoring.domains.bot.task.services;


import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.support.terminal.app.domains.bot.monitoring.domains.bot.task.dto.BotMonitoringTaskDTO;
import io.github.support.terminal.app.domains.bot.monitoring.domains.bot.task.models.BotMonitoringTask;
import io.github.support.terminal.app.domains.bot.monitoring.domains.bot.task.requests.BotMonitoringTaskRequest;
import io.github.support.terminal.app.domains.bot.monitoring.domains.bot.task.values.BotTaskStates;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class BotMonitoringTasksApiService {

    private final BotMonitoringTasksService botTasksService;
    private final ObjectMapper objectMapper;

    public BotMonitoringTaskDTO add(BotMonitoringTaskRequest request) {
        BotMonitoringTask command = objectMapper.convertValue(request, BotMonitoringTask.class);
        command.setId(UUID.randomUUID().toString());
        command.setState(BotTaskStates.ENABLED);
        return getCommandDTO(botTasksService.add(command));
    }

    public Collection<BotMonitoringTaskDTO> getList() {
        return botTasksService.getAll()
                .stream().map(c -> getCommandDTO(c))
                .collect(Collectors.toList());
    }

    public BotMonitoringTaskDTO getById(String id) {
        BotMonitoringTask command = botTasksService.getById(id);
        return getCommandDTO(command);
    }

    public BotMonitoringTaskDTO update(String id, BotMonitoringTaskRequest request) throws Exception {
        if(botTasksService.getById(id) == null){
            throw new Exception("Command not found");
        }
        BotMonitoringTask command = objectMapper.convertValue(request, BotMonitoringTask.class);
        command.setId(id);
        return getCommandDTO(botTasksService.update(command));
    }

    public void delete(String id) {
        botTasksService.delete(id);
    }

    private BotMonitoringTaskDTO getCommandDTO(BotMonitoringTask command) {
        BotMonitoringTaskDTO dto = objectMapper.convertValue(command, BotMonitoringTaskDTO.class);
        return dto;
    }



}
