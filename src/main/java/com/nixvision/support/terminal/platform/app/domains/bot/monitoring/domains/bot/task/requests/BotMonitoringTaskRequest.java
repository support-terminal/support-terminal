package com.nixvision.support.terminal.platform.app.domains.bot.monitoring.domains.bot.task.requests;


import com.nixvision.support.terminal.platform.app.domains.bot.monitoring.domains.bot.task.models.conditions.Condition;
import com.nixvision.support.terminal.platform.app.domains.core.action.models.actions.Action;
import com.nixvision.support.terminal.platform.app.domains.core.cron.models.Cron;
import com.nixvision.support.terminal.platform.app.domains.core.notify.models.Notify;
import lombok.Data;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@Data
public class BotMonitoringTaskRequest {

    @NotBlank
    private String name;

    private String state;

    @NotNull
    @Valid
    private Action action;
    @NotNull
    @Valid
    private Cron cron;

    private List<Condition> conditions;

    private List<Notify> notifyList;
}
