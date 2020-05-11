package io.github.bot.terminal.application.domains.bot_commands.repository;


import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommandDetails;
import lombok.RequiredArgsConstructor;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.stereotype.Repository;

import java.time.Duration;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.function.Consumer;

import static org.dizitart.no2.objects.filters.ObjectFilters.eq;

@Repository
@RequiredArgsConstructor
public class BotCommandRepository {

    private final long awaitTimeout = Duration.ofSeconds(10).toMillis();
    private final ObjectRepository<BotCommandDetails> db;
    private final ConcurrentMap<String, ReentrantLock> locks = new ConcurrentHashMap<>();

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

    public void transaction(String id, Consumer<BotCommandRepository> action) {
        Lock lock = getLock(id);
        lock.lock();
        try {
            action.accept(this);
        } finally {
            lock.unlock();
        }
    }

    private Lock getLock(String id) {
        return locks.computeIfAbsent(id, (k) -> new ReentrantLock());
    }
}
