package io.github.support.terminal.app.domains.monitoring;

import io.github.support.terminal.app.domains.monitoring.domains.bot.task.models.BotMonitoringTask;
import org.dizitart.no2.Nitrite;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@Configuration
@ComponentScan(value = "io.github.support.terminal.app.domains.monitoring")
public class BotMonitoringConfiguration {

    @Bean
    public ObjectRepository<BotMonitoringTask> getBotMonitoringTaskRepository(Nitrite db){
        ObjectRepository<BotMonitoringTask> repository = db.getRepository(BotMonitoringTask.class);
        return repository;
    }

}

