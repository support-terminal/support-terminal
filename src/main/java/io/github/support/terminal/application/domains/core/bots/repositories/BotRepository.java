package io.github.support.terminal.application.domains.core.bots.repositories;


import io.github.support.terminal.application.domains.core.bots.entities.Bot;
import lombok.RequiredArgsConstructor;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

import static org.dizitart.no2.objects.filters.ObjectFilters.eq;

@Repository
@RequiredArgsConstructor
public class BotRepository {


    private final ObjectRepository<Bot> botRepository;


    public Bot add(Bot bot) {
        botRepository.insert(bot);
        return botRepository.find(eq("id", bot.getId())).firstOrDefault();
    }

    public Bot update(Bot bot) {
        botRepository.update(bot);
        return botRepository.find(eq("id", bot.getId())).firstOrDefault();
    }

    public Bot findById(String id) {
        return botRepository.find(eq("id", id)).firstOrDefault();
    }

    public List<Bot> findAll() {
        return botRepository.find().toList();
    }

    public void deleteById(String id) {
        botRepository.remove(eq("id", id));
    }


    public Collection<Bot> findAllByState(String state){
        return botRepository.find(eq("state", state)).toList();
    }

}
