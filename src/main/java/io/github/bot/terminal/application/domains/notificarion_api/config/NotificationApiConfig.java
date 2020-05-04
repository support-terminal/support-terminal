package io.github.bot.terminal.application.domains.notificarion_api.config;

import io.github.bot.terminal.application.domains.notificarion_api.entity.AbstractNotificationApiDetails;
import org.dizitart.no2.Nitrite;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class NotificationApiConfig {

    @Bean
    public ObjectRepository<AbstractNotificationApiDetails> notificationApiObjectRepository(Nitrite db) {
        ObjectRepository<AbstractNotificationApiDetails> repository = db.getRepository(AbstractNotificationApiDetails.class);
        return repository;
    }

}

