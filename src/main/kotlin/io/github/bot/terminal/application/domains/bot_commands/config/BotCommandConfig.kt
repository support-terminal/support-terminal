package io.github.bot.terminal.application.domains.bot_commands.config

import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandDetails
import org.dizitart.no2.Nitrite
import org.dizitart.no2.objects.ObjectRepository
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
open class BotCommandConfig {
    @Bean
    open fun botCommandDetailsRepository(db: Nitrite): ObjectRepository<BotCommandDetails> {
        return db.getRepository(BotCommandDetails::class.java)
    }
}