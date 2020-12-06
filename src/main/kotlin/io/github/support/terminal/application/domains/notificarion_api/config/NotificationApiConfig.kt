package io.github.support.terminal.application.domains.notificarion_api.config

import io.github.support.terminal.application.domains.notificarion_api.repository.NotificationApiDetails
import org.dizitart.no2.Nitrite
import org.dizitart.no2.objects.ObjectRepository
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
open class NotificationApiConfig {
    @Bean
    open fun notificationApiObjectRepository(db: Nitrite): ObjectRepository<NotificationApiDetails> {
        return db.getRepository(NotificationApiDetails::class.java)
    }
}