package io.github.support.terminal.application.domains.bot_monitoring.task.dto;


import io.github.support.terminal.application.domains.bot_monitoring.task.models.conditions.Condition;
import io.github.support.terminal.application.domains.core.action.models.actions.Action;
import io.github.support.terminal.application.domains.core.cron.models.CronFrequency;
import io.github.support.terminal.application.domains.core.notify.models.Notify;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;


@Data
@Accessors(chain = true)
public class BotMonitoringTaskDTO {
    private String id;
    private String name;
    private String state;
    private Action action;
    private CronFrequency cronFrequency;
    private List<Condition> conditions;
    private List<Notify> notifyList;
}

