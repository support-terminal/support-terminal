package io.github.support.terminal.platform.app.domains.bot.monitoring.domains.bot.task.services;


import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.support.terminal.platform.app.domains.bot.monitoring.domains.bot.task.models.BotMonitoringTask;
import io.github.support.terminal.platform.app.domains.bot.monitoring.domains.bot.task.models.conditions.Condition;
import io.github.support.terminal.platform.app.domains.bot.monitoring.domains.bot.task.repositories.BotMonitoringTaskRepository;
import io.github.support.terminal.platform.app.domains.bot.monitoring.domains.bot.task.values.BotTaskStates;
import io.github.support.terminal.platform.app.domains.core.CoreConfiguration;
import io.github.support.terminal.platform.app.domains.core.action.models.ActionExecution;
import io.github.support.terminal.platform.app.domains.core.action.models.results.ActionResult;
import io.github.support.terminal.platform.app.domains.core.action.models.results.SqlSelectOneNumericValueActionResult;
import io.github.support.terminal.platform.app.domains.core.action.values.ActionTypes;
import io.github.support.terminal.platform.app.domains.core.common.values.CoreJmsQueues;
import io.github.support.terminal.platform.app.domains.core.notify.models.Notify;
import io.github.support.terminal.platform.app.domains.core.notify.models.NotifyTask;
import io.github.support.terminal.platform.app.domains.core.notify.services.NotifyTaskHandler;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.scheduling.TaskScheduler;
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
    private final JmsTemplate jmsTemplate;
    private final ObjectMapper objectMapper;

    @PostConstruct
    public void init(){
        runRefreshSchedulers();
    }

    BotMonitoringTask add(BotMonitoringTask task) {
      task.getCron().validate();
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
                        .setResponseToQueue(LISTENING_QUEUE+task.getAction().getType());
                jmsTemplate.convertAndSend(CoreJmsQueues.CORE_MODULE_ACTIONS_HANDLE_QUEUE + task.getAction().getType(), commandExecution);
            }, new CronTrigger(task.getCron().getCron()));
            futureList.add(fut);
        }
     }

    BotMonitoringTask update(BotMonitoringTask task) {
        task.getCron().validate();
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


    @JmsListener(destination = LISTENING_QUEUE + ActionTypes.SQL_SELECT_ONE_NUMERIC_VALUE,
            containerFactory = CoreConfiguration.JMS_FACTORY_NAME)
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
                NotifyTask notifyTask = new NotifyTask().setNotify(notify).setMessage(notify.getMessageTemplate());
                jmsTemplate.convertAndSend(NotifyTaskHandler.NOTIFY_TASK_HANDLER_QUEUE + notify.getType(), notifyTask);
            }
        }

    }

}
