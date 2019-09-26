package io.github.support.terminal.app.domains.bot.commands.domains.bot.command.services;


import io.github.support.terminal.app.domains.bot.commands.domains.bot.command.entities.BotCommand;
import io.github.support.terminal.app.domains.bot.commands.domains.bot.command.repositories.BotCommandRepository;
import io.github.support.terminal.app.domains.bot.commands.domains.bot.command.values.CommandStates;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.stream.Collectors;


@Service
@Transactional
@RequiredArgsConstructor
public class BotCommandsService {

    private final BotCommandRepository botCommandRepository;

    BotCommand add(BotCommand command) {
        return botCommandRepository.add(command);
    }

    BotCommand update(BotCommand command) {
        return botCommandRepository.update(command);
    }

    BotCommand getById(String id) {
        return botCommandRepository.findById(id);
    }

    Collection<BotCommand> getAll() {
        return botCommandRepository.findAll();
    }

    Collection<BotCommand> getByBotId(String botId) {
        return botCommandRepository.getAllByBotId(botId);
    }

    public Collection<BotCommand> getEnabledByBotId(String botId) {
        return getByBotId(botId)
                .stream().filter(c -> c.getState().equals(CommandStates.ENABLED))
                .collect(Collectors.toList());
    }


    void delete(String id) {
        botCommandRepository.deleteById(id);
    }
}
