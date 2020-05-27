package io.github.bot.terminal.application.domains.monitoring.repository;

import io.github.bot.terminal.application.domains.common.action.entity.ActionDetails;
import io.github.bot.terminal.application.domains.common.conditions.entity.ConditionDetails;
import io.github.bot.terminal.application.domains.common.notify.entity.NotifyDetails;
import io.github.bot.terminal.application.domains.monitoring.values.MonitoringTaskState;
import lombok.Data;
import lombok.experimental.Accessors;
import org.dizitart.no2.objects.Id;

import java.util.List;

@Data
@Accessors(chain = true)
public class MonitoringTaskDetails {
    @Id
    private String id;
    private String name;
    private MonitoringTaskState state;
    private ActionDetails actionDetails;
    private String cron;
    private List<ConditionDetails> conditions;
    private List<NotifyDetails> notifyList;

}
