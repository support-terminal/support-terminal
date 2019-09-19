package io.github.support.terminal.platform.app.domains.bot.monitoring;

import io.github.support.terminal.platform.app.domains.bot.monitoring.domains.bot.task.models.BotMonitoringTask;
import org.dizitart.no2.Nitrite;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootConfiguration
@ComponentScan(value = "io.github.support.terminal.bot.monitoring")
public class BotMonitoringConfiguration {

    @Bean
    public ObjectRepository<BotMonitoringTask> getBotMonitoringTaskRepository(Nitrite db){
        ObjectRepository<BotMonitoringTask> repository = db.getRepository(BotMonitoringTask.class);
        return repository;
    }

}

