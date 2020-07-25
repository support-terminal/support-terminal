package io.github.bot.terminal.application.domains.workers

import io.github.bot.terminal.application.domains.monitoring.factory.MonitoringTasksFactory
import org.springframework.scheduling.TaskScheduler
import org.springframework.scheduling.support.CronTrigger
import org.springframework.stereotype.Service
import java.util.concurrent.CopyOnWriteArrayList
import java.util.concurrent.ExecutorService
import java.util.concurrent.ScheduledFuture
import javax.annotation.PostConstruct

@Service
class MonitoringTasksWorker(
        private val monitoringTasksFactory: MonitoringTasksFactory,
        private val monitoringTasksScheduler: TaskScheduler,
        private val executorService: ExecutorService
) {

    private val futureList: MutableList<ScheduledFuture<*>> = CopyOnWriteArrayList()

    @PostConstruct
    fun init() {
        runRefreshSchedulers()
    }

    fun runRefreshSchedulers() {
        executorService.execute { refresh() }
    }

    private fun refresh() {
        cleanFutureList()
        val monitoringTasks = monitoringTasksFactory.all
        for (task in monitoringTasks) {
            val taskFuture = monitoringTasksScheduler.schedule(task, CronTrigger(task.details.cron))
            futureList.add(taskFuture)
        }
    }

    private fun cleanFutureList() {
        futureList.forEach {
            it.cancel(true)
        }
        futureList.clear()
    }
}