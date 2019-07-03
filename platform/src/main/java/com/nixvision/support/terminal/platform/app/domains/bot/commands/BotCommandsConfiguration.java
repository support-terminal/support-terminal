package com.nixvision.support.terminal.platform.app.domains.bot.commands;

import com.nixvision.support.terminal.platform.app.domains.bot.commands.domains.bot.command.entities.BotCommand;
import org.dizitart.no2.Nitrite;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootConfiguration
@ComponentScan(value = "com.nixvision.support.terminal.bot.commands")
public class BotCommandsConfiguration {

    @Bean
    public ObjectRepository<BotCommand> getBotCommandRepository(Nitrite db){
        ObjectRepository<BotCommand> repository = db.getRepository(BotCommand.class);
        return repository;
    }

}

