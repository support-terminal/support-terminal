package io.github.bot.terminal.application.domains.monitoring.entity;

import io.github.bot.terminal.application.domains.common.action.entity.Action;
import io.github.bot.terminal.application.domains.common.action.entity.ActionResult;
import io.github.bot.terminal.application.domains.common.conditions.entity.Condition;
import io.github.bot.terminal.application.domains.common.notify.entity.Notify;
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskDetails;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true)
public class MonitoringTask implements Runnable {

    private MonitoringTaskDetails details;
    private Action action;
    private boolean isEnabled;
    private List<Condition> conditions;
    private List<Notify> notifyList;

    @Override
    public void run() {
        if (!isEnabled) {
            return;
        }
        ActionResult<Double> result = (ActionResult<Double>) action.execute();
        for(Condition c :conditions){
            //todo проверки сами реализуют логику примениму они к такому типу данных или нет
            //если не применимы то скипают - но нужна хотя бы одна проверка не на число - типа статус HTTP запроса
            if(c.check(result.getResult())){
               continue;
            }
           checkNotPassed();
        }
    }

    private void checkNotPassed(){
        for(Notify notify : notifyList){
            notify.execute();
        }
    }
}
