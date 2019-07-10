package com.nixvision.support.terminal.platform.app.domains.bot.monitoring.domains.bot.task.dto;


import com.nixvision.support.terminal.platform.app.domains.bot.monitoring.domains.bot.task.models.conditions.Condition;
import com.nixvision.support.terminal.platform.app.domains.core.action.models.actions.Action;
import com.nixvision.support.terminal.platform.app.domains.core.cron.models.Cron;
import com.nixvision.support.terminal.platform.app.domains.core.notify.models.Notify;
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
    private Cron cron;
    private List<Condition> conditions;
    private List<Notify> notifyList;
}

