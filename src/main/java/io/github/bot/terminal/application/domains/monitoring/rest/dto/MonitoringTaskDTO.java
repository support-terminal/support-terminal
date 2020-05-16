package io.github.bot.terminal.application.domains.monitoring.rest.dto;

import io.github.bot.terminal.application.domains.common.action.dto.ActionDTO;
import io.github.bot.terminal.application.domains.common.conditions.dto.ConditionDTO;
import io.github.bot.terminal.application.domains.common.cron.dto.CronFrequencyDTO;

import java.util.List;

public class MonitoringTaskDTO {
    private String id;
    private String name;
    private String state;
    private ActionDTO action;
    private CronFrequencyDTO cronFrequency;
    private List<ConditionDTO> conditions;
    private List<String> notifyList;
}
