package io.github.bot.terminal.application.domains.workers;


import io.github.bot.terminal.application.domains.monitoring.entity.MonitoringTask;
import io.github.bot.terminal.application.domains.monitoring.factory.MonitoringTasksFactory;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.support.CronTrigger;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.ScheduledFuture;

@Slf4j
@Service
@RequiredArgsConstructor
public class MonitoringTasksWorker {

    private List<ScheduledFuture> futureList = new CopyOnWriteArrayList<>();
    private final MonitoringTasksFactory monitoringTasksFactory;
    private final TaskScheduler monitoringTasksScheduler;
    private final ExecutorService executorService;

    @PostConstruct
    public void init() {
        runRefreshSchedulers();
    }

    public void runRefreshSchedulers() {
        executorService.execute(this::refresh);
    }

    private void refresh() {
        cleanFutureList();
        List<MonitoringTask> monitoringTasks = monitoringTasksFactory.getAll();
        for (MonitoringTask task : monitoringTasks) {
            ScheduledFuture taskFuture
                    = monitoringTasksScheduler.schedule(task, new CronTrigger(task.getDetails().getCron()));
            futureList.add(taskFuture);
        }
    }

    private void cleanFutureList() {
        futureList.stream().forEach(f -> f.cancel(true));
        futureList.clear();
    }

}
