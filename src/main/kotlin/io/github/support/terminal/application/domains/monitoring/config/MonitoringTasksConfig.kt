package io.github.support.terminal.application.domains.monitoring.config

import io.github.support.terminal.application.domains.monitoring.repository.MonitoringTaskDetails
import org.dizitart.no2.Nitrite
import org.dizitart.no2.objects.ObjectRepository
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.scheduling.TaskScheduler
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler

@Configuration
open class MonitoringTasksConfig {
    @Bean
    open fun monitoringTaskDetailsObjectRepository(db: Nitrite): ObjectRepository<MonitoringTaskDetails> {
        return db.getRepository(MonitoringTaskDetails::class.java)
    }

    @Bean("monitoringTasksScheduler")
    open fun getMonitoringTasksScheduler(): TaskScheduler? {
        val taskScheduler = ThreadPoolTaskScheduler()
        taskScheduler.poolSize = 10
        return taskScheduler
    }
}