package io.github.support.terminal.platform.app.domains.core;

import io.github.support.terminal.platform.app.domains.core.bots.entities.Bot;
import io.github.support.terminal.platform.app.domains.core.bots.entities.JoinRequest;
import io.github.support.terminal.platform.app.domains.core.source.dbs.entities.DbConnection;
import io.github.support.terminal.platform.app.domains.core.user.entities.CustomerUser;
import org.dizitart.no2.Nitrite;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.converter.ByteArrayHttpMessageConverter;
import org.springframework.web.client.RestTemplate;

@SpringBootConfiguration
@ComponentScan(value = "io.github.support.terminal.core")
public class CoreConfiguration {

    public final static String JMS_FACTORY_NAME = "jmsFactory";

    @Bean
    public RestTemplate getRestTemplate(){
        RestTemplate  restTemplate = new RestTemplate();
        restTemplate.getMessageConverters().add(new ByteArrayHttpMessageConverter());
        return restTemplate;
    }


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

