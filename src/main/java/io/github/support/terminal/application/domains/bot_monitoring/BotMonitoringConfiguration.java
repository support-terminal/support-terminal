package io.github.support.terminal.application.domains.bot_monitoring;

import io.github.support.terminal.application.domains.bot_monitoring.task.models.BotMonitoringTask;
import org.dizitart.no2.Nitrite;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@Configuration
public class BotMonitoringConfiguration {

    @Bean
    public ObjectRepository<BotMonitoringTask> getBotMonitoringTaskRepository(Nitrite db){
        ObjectRepository<BotMonitoringTask> repository = db.getRepository(BotMonitoringTask.class);
        return repository;
    }

}

