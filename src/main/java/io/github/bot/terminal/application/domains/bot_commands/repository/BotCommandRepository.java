package io.github.bot.terminal.application.domains.bot_commands.repository;


import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommandDetails;
import lombok.RequiredArgsConstructor;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

import static org.dizitart.no2.objects.filters.ObjectFilters.eq;

@Repository
@RequiredArgsConstructor
public class BotCommandRepository {

    private final ObjectRepository<BotCommandDetails> db;

    public void add(BotCommandDetails details) {
        db.insert(details);
    }

    public void update(BotCommandDetails details) {
        db.update(details);
    }

    public Optional<BotCommandDetails> findById(String id) {
        return Optional.ofNullable(db.find(eq("id", id)).firstOrDefault());
    }

    public List<BotCommandDetails> findAll() {
        return db.find().toList();
    }

    public void deleteById(String id) {
        db.remove(eq("id", id));
    }
}
