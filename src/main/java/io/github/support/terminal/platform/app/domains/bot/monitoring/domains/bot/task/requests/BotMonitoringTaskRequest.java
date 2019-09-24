package io.github.support.terminal.platform.app.domains.bot.monitoring.domains.bot.task.requests;


import io.github.support.terminal.platform.app.domains.bot.monitoring.domains.bot.task.models.conditions.Condition;
import io.github.support.terminal.platform.app.domains.core.action.models.actions.Action;
import io.github.support.terminal.platform.app.domains.core.cron.models.CronFrequency;
import io.github.support.terminal.platform.app.domains.core.notify.models.Notify;
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
    private CronFrequency cronFrequency;

    private List<Condition> conditions;

    private List<Notify> notifyList;
}
