package io.github.bot.terminal.application.domains.monitoring.rest.dto;

import io.github.bot.terminal.application.domains.common.action.dto.ActionDTO;
import io.github.bot.terminal.application.domains.common.conditions.dto.ConditionDTO;
import io.github.bot.terminal.application.domains.common.notify.dto.NotifyDTO;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true)
public class MonitoringTaskDTO {
    private String id;
    private String name;
    private String state;
    private ActionDTO action;
    private String cron;
    private List<ConditionDTO> conditions;
    private List<NotifyDTO> notifyList;
}
