package io.github.bot.terminal.application.domains.monitoring.rest.requests;

import io.github.bot.terminal.application.domains.common.action.requests.ActionRequest;
import io.github.bot.terminal.application.domains.common.conditions.requests.ConditionRequest;
import io.github.bot.terminal.application.domains.common.cron.requests.CronFrequencyRequest;
import io.github.bot.terminal.application.domains.common.notify.requests.NotifyRequest;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

public class MonitoringTaskRequest {
    @NotBlank
    private String name;

    private String state;

    @NotNull
    @Valid
    private ActionRequest action;

    @NotNull
    @Valid
    private CronFrequencyRequest cronFrequency;

    private List<ConditionRequest> conditions;

    private List<NotifyRequest> notifyList;
}
