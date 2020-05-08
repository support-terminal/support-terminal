package io.github.bot.terminal.application.domains.bot_commands.config;

import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommandDetails;
import org.dizitart.no2.Nitrite;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BotCommandConfig {

    @Bean
    public ObjectRepository<BotCommandDetails> botCommandDetailsRepository(Nitrite db) {
        ObjectRepository<BotCommandDetails> repository = db.getRepository(BotCommandDetails.class);
        return repository;
    }

}

