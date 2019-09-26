package io.github.support.terminal.app.domains.bot.commands.domains.bot.command.repositories;


import io.github.support.terminal.app.domains.bot.commands.domains.bot.command.entities.BotCommand;
import lombok.RequiredArgsConstructor;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

import static org.dizitart.no2.objects.filters.ObjectFilters.elemMatch;
import static org.dizitart.no2.objects.filters.ObjectFilters.eq;

@Repository
@RequiredArgsConstructor
public class BotCommandRepository {

    private final ObjectRepository<BotCommand> botCommandRepository;

    public BotCommand add(BotCommand botCommand) {
        botCommandRepository.insert(botCommand);
        return botCommandRepository.find(eq("id", botCommand.getId())).firstOrDefault();
    }

    public BotCommand update(BotCommand botCommand) {
        botCommandRepository.update(botCommand);
        return botCommandRepository.find(eq("id", botCommand.getId())).firstOrDefault();
    }


    public BotCommand findById(String id) {
        return botCommandRepository.find(eq("id", id)).firstOrDefault();
    }

    public List<BotCommand> findAll() {
        return botCommandRepository.find().toList();
    }

    public void deleteById(String id) {
        botCommandRepository.remove(eq("id", id));
    }
    
    public Collection<BotCommand> getAllByBotId(String botId){
        return botCommandRepository.find(elemMatch("botIds", eq("$", botId))).toList();
    }

}
