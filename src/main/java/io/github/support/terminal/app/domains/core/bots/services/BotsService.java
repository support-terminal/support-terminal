package io.github.support.terminal.app.domains.core.bots.services;


import io.github.support.terminal.app.domains.core.bots.entities.Bot;
import io.github.support.terminal.app.domains.core.bots.repositories.BotRepository;
import io.github.support.terminal.app.domains.core.bots.values.BotStates;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.List;


@Service
@Transactional
@RequiredArgsConstructor
public class BotsService {

    private final BotRepository botRepository;

    Bot add(Bot dbConnection) {
        return botRepository.add(dbConnection);
    }

    public Bot getById(String id) {
        return botRepository.findById(id);
    }

    List<Bot> getAll() {
        return botRepository.findAll();
    }

    public Bot update(Bot bot) {
        return botRepository.update(bot);
    }

    void delete(String id) {
        botRepository.deleteById(id);
    }

    public Collection<Bot> getAllEnabledBots() {
        return botRepository.findAllByState(BotStates.ENABLED);
    }

}
