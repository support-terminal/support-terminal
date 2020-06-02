package io.github.bot.terminal.application.domains.monitoring.factory;


import io.github.bot.terminal.application.domains.common.action.entity.Action;
import io.github.bot.terminal.application.domains.common.action.factory.ActionsFactory;
import io.github.bot.terminal.application.domains.common.conditions.entity.Condition;
import io.github.bot.terminal.application.domains.common.conditions.factory.ConditionsFactory;
import io.github.bot.terminal.application.domains.common.notify.entity.Notify;
import io.github.bot.terminal.application.domains.common.notify.factory.NotifyFactory;
import io.github.bot.terminal.application.domains.monitoring.entity.MonitoringTask;
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskDetails;
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskRepository;
import io.github.bot.terminal.application.domains.monitoring.values.MonitoringTaskState;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MonitoringTasksFactory {

    private final MonitoringTaskRepository repository;
    private final ActionsFactory actionsFactory;
    private final NotifyFactory notifyFactory;
    private final ConditionsFactory conditionsFactory;

    public MonitoringTask build(MonitoringTaskDetails details) {
        Action action = actionsFactory.build(details.getActionDetails());
        List<Condition> conditions = details.getConditions().stream()
                .map(c -> conditionsFactory.build(c))
                .collect(Collectors.toList());
        List<Notify> notifies = details.getNotifyList().stream()
                .map(n -> notifyFactory.build(n))
                .collect(Collectors.toList());
        boolean isEnabled = MonitoringTaskState.ENABLED.equals(details.getState());
        return new MonitoringTask()
                .setEnabled(isEnabled)
                .setDetails(details)
                .setAction(action)
                .setConditions(conditions)
                .setNotifyList(notifies);
    }

    public List<MonitoringTask> getAll() {
        return repository
                .findAll().stream()
                .map(this::build)
                .collect(Collectors.toList());
    }
}
