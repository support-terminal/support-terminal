package io.github.bot.terminal.application.domains.db_connection.config;

import io.github.bot.terminal.application.domains.db_connection.entity.DbConnectionDetails;
import org.dizitart.no2.Nitrite;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DbConnectionsConfig {

    @Bean
    public ObjectRepository<DbConnectionDetails> dbConnectionDetailsObjectRepository(Nitrite db) {
        ObjectRepository<DbConnectionDetails> repository = db.getRepository(DbConnectionDetails.class);
        return repository;
    }

}

