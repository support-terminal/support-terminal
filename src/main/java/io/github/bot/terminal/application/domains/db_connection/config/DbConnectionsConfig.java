package io.github.bot.terminal.application.domains.db_connection.config;

import io.github.bot.terminal.application.domains.db_connection.entity.AbstractDbConnectionDetails;
import io.github.bot.terminal.application.domains.notificarion_api.entity.AbstractNotificationApiDetails;
import org.dizitart.no2.Nitrite;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DbConnectionsConfig {

    @Bean
    public ObjectRepository<AbstractDbConnectionDetails> dbConnectionDetailsObjectRepository(Nitrite db) {
        ObjectRepository<AbstractDbConnectionDetails> repository = db.getRepository(AbstractDbConnectionDetails.class);
        return repository;
    }

}

