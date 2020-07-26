package io.github.bot.terminal.application.domains.notificarion_api.config

import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApiDetails
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