package io.github.bot.terminal.application.domains.monitoring.config;

import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskDetails;
import org.dizitart.no2.Nitrite;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;

@Configuration
public class MonitoringTasksConfig {

    @Bean
    public ObjectRepository<MonitoringTaskDetails> monitoringTaskDetailsObjectRepository(Nitrite db) {
        return db.getRepository(MonitoringTaskDetails.class);
    }
    @Bean("monitoringTasksScheduler")
    public TaskScheduler getMonitoringTasksScheduler(){
        ThreadPoolTaskScheduler taskScheduler = new ThreadPoolTaskScheduler();
        taskScheduler.setPoolSize(10);
        return taskScheduler;
    }
}

