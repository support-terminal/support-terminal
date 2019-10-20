package io.github.support.terminal.application.domains.core;

import io.github.support.terminal.application.domains.core.bots.entities.Bot;
import io.github.support.terminal.application.domains.core.bots.entities.JoinRequest;
import io.github.support.terminal.application.domains.core.dbs.entities.DbConnection;
import io.github.support.terminal.application.domains.core.user.entities.CustomerUser;
import org.dizitart.no2.Nitrite;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CoreConfiguration {

    @Bean
    public ObjectRepository<DbConnection> getDbConnectionRepository(Nitrite db){
        ObjectRepository<DbConnection> repository = db.getRepository(DbConnection.class);
        return repository;
    }


    @Bean
    public ObjectRepository<Bot> getBotRepository(Nitrite db){
        ObjectRepository<Bot> repository = db.getRepository(Bot.class);
        return repository;
    }

    @Bean
    public ObjectRepository<JoinRequest> getJoinRequestRepository(Nitrite db){
        ObjectRepository<JoinRequest> repository = db.getRepository(JoinRequest.class);
        return repository;
    }

    @Bean
    public ObjectRepository<CustomerUser> getCustomerUserRepository(Nitrite db){
        ObjectRepository<CustomerUser> repository = db.getRepository(CustomerUser.class);
        return repository;
    }

}

