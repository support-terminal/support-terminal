package io.github.support.terminal.application.domains.bot_commands;

import io.github.support.terminal.application.domains.bot_commands.entities.BotCommand;
import org.dizitart.no2.Nitrite;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BotCommandsConfiguration {

    @Bean
    public ObjectRepository<BotCommand> getBotCommandRepository(Nitrite db){
        ObjectRepository<BotCommand> repository = db.getRepository(BotCommand.class);
        return repository;
    }

}

