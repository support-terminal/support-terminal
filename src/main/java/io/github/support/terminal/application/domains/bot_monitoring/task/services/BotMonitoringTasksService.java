package io.github.support.terminal.application.domains.bot_monitoring.task.services;


import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.support.terminal.application.domains.bot_monitoring.task.models.BotMonitoringTask;
import io.github.support.terminal.application.domains.bot_monitoring.task.models.conditions.Condition;
import io.github.support.terminal.application.domains.bot_monitoring.task.repositories.BotMonitoringTaskRepository;
import io.github.support.terminal.application.domains.bot_monitoring.task.values.BotTaskStates;
import io.github.support.terminal.application.domains.core.action.models.ActionExecution;
import io.github.support.terminal.application.domains.core.action.models.results.ActionResult;
import io.github.support.terminal.application.domains.core.action.models.results.SqlSelectOneNumericValueActionResult;
import io.github.support.terminal.application.domains.core.action.values.ActionTypes;
import io.github.support.terminal.application.domains.core.common.values.CoreJmsQueues;
import io.github.support.terminal.application.domains.core.notify.models.Notify;
import io.github.support.terminal.application.domains.core.notify.models.NotifyTask;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.support.CronTrigger;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import java.util.*;
import java.util.concurrent.ScheduledFuture;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class BotMonitoringTasksService {

    private static List<ScheduledFuture> futureList = Collections.synchronizedList(new ArrayList<>());
    private static final String LISTENING_QUEUE = "BOT_TASKS_MODULE_LISTENING_QUEUE";
    private final BotMonitoringTaskRepository botTaskRepository;
    private final TaskScheduler myTaskScheduler;
    private final ApplicationEventPublisher eventPublisher;
    private final ObjectMapper objectMapper;

    @PostConstruct
    public void init(){
        runRefreshSchedulers();
    }

    BotMonitoringTask add(BotMonitoringTask task) {
      task.getCronFrequency().validate();
      botTaskRepository.add(task);
      runRefreshSchedulers();
      return task;
    }

    private void runRefreshSchedulers() {
        cleanFutureList();
        Collection<BotMonitoringTask> allEnabled = getAllEnabled();
        for(BotMonitoringTask task : allEnabled){
            Map<String, Object> payload = new HashMap<>();
            payload.put("task", task);
            ScheduledFuture fut = myTaskScheduler.schedule(()->{
                ActionExecution commandExecution = new ActionExecution()
                        .setAction(task.getAction())
                        .setPayload(payload)
                        .setDestination(CoreJmsQueues.CORE_MODULE_ACTIONS_HANDLE_QUEUE + task.getAction().getType())
                        .setResponseToQueue(LISTENING_QUEUE+task.getAction().getType());

                eventPublisher.publishEvent(commandExecution);
            }, new CronTrigger(task.getCronFrequency().getCron()));
            futureList.add(fut);
        }
     }

    BotMonitoringTask update(BotMonitoringTask task) {
        task.getCronFrequency().validate();
        botTaskRepository.update(task);
        runRefreshSchedulers();
        return task;
    }

    BotMonitoringTask getById(String id) {
        return botTaskRepository.findById(id);
    }

    Collection<BotMonitoringTask> getAll() {
        return botTaskRepository.findAll();
    }

    private Collection<BotMonitoringTask> getAllEnabled() {
        return getAll()
                .stream().filter(c -> c.getState().equals(BotTaskStates.ENABLED))
                .collect(Collectors.toList());
    }

    void delete(String id) {
        botTaskRepository.deleteById(id);
        runRefreshSchedulers();
    }


    private void cleanFutureList(){
        futureList.stream().forEach(f-> f.cancel(true));
        futureList.clear();
    }



    @Async
    @EventListener(condition = "#result.destination = '"+ LISTENING_QUEUE + ActionTypes.SQL_SELECT_ONE_NUMERIC_VALUE+"'")
    public void answerBySqlOneValue(ActionResult result) {
        SqlSelectOneNumericValueActionResult actionResult = (SqlSelectOneNumericValueActionResult)result;
        BotMonitoringTask botTask =  objectMapper.convertValue(actionResult.getPayload().get("task"), BotMonitoringTask.class);

        boolean checkPassed = true;
        for(Condition c :botTask.getConditions()){
            if(!c.check(actionResult.getValue())){
                checkPassed = false;
            }
        }

        if(!checkPassed){
            //если одна из проверок не прошла нужно уведомить
            for(Notify notify : botTask.getNotifyList()){
                NotifyTask notifyTask = new NotifyTask()
                        .setNotify(notify).setMessage(notify.getMessageTemplate());

                eventPublisher.publishEvent(notifyTask);
            }
        }

    }

}
