package io.github.bot.terminal.application.domains.monitoring.rest;


import io.github.bot.terminal.application.domains.common.action.ActionRestConverter;
import io.github.bot.terminal.application.domains.common.conditions.ConditionRestConverter;
import io.github.bot.terminal.application.domains.common.notify.NotifyRestConverter;
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskDetails;
import io.github.bot.terminal.application.domains.monitoring.rest.dto.MonitoringTaskDTO;
import io.github.bot.terminal.application.domains.monitoring.rest.requests.MonitoringTaskRequest;
import io.github.bot.terminal.application.domains.monitoring.values.MonitoringTaskState;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class MonitoringTasksRestConverter {

    private final ActionRestConverter actionRestConverter;
    private final ConditionRestConverter conditionRestConverter;
    private final NotifyRestConverter notifyRestConverter;

    MonitoringTaskDetails mapToDetails(MonitoringTaskRequest request) {
        MonitoringTaskDetails details = new MonitoringTaskDetails();
        details.setName(request.getName());

        if(StringUtils.isNotBlank(request.getState())) {
            details.setState(MonitoringTaskState.valueOf(request.getState()));
        }

        if(request.getAction() != null) {
            details.setActionDetails(actionRestConverter.mapToDetails(request.getAction()));
        }

        details.setCron(request.getCron());
        details.setConditions(request.getConditions().stream()
                .map(c -> conditionRestConverter.mapToDetails(c)).collect(Collectors.toList()));
        details.setNotifyList(request.getNotifyList().stream()
                .map(c -> notifyRestConverter.mapToDetails(c)).collect(Collectors.toList()));
        return details;
    }

    MonitoringTaskDTO mapToDto(MonitoringTaskDetails details) {
        MonitoringTaskDTO dto = new MonitoringTaskDTO();
        dto.setId(details.getId());
        dto.setName(details.getName());
        dto.setState(details.getState().name());
        if(details.getActionDetails() != null) {
            dto.setAction(actionRestConverter.mapToDto(details.getActionDetails()));
        }
        dto.setCron(details.getCron());
        dto.setConditions(details.getConditions().stream()
                .map(c -> conditionRestConverter.mapToDto(c)).collect(Collectors.toList()));
        dto.setNotifyList(details.getNotifyList().stream()
                .map(n -> notifyRestConverter.mapToDto(n)).collect(Collectors.toList()));
        return dto;
    }

}
