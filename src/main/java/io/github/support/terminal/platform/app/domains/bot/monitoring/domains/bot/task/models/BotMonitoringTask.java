package io.github.support.terminal.platform.app.domains.bot.monitoring.domains.bot.task.models;


import io.github.support.terminal.platform.app.domains.bot.monitoring.domains.bot.task.models.conditions.Condition;
import io.github.support.terminal.platform.app.domains.core.action.models.actions.Action;
import io.github.support.terminal.platform.app.domains.core.cron.models.Cron;
import io.github.support.terminal.platform.app.domains.core.notify.models.Notify;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.dizitart.no2.objects.Id;

import java.util.List;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(of={"id"})
public class BotMonitoringTask {
    @Id
    private String id;
    private String name;
    private String state;
    private Action action;
    private Cron cron;
    private List<Condition> conditions;
    private List<Notify> notifyList;
}

