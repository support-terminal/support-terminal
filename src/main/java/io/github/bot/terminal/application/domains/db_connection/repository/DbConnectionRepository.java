package io.github.bot.terminal.application.domains.db_connection.repository;


import io.github.bot.terminal.application.domains.db_connection.entity.AbstractDbConnectionDetails;
import lombok.RequiredArgsConstructor;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

import static org.dizitart.no2.objects.filters.ObjectFilters.eq;

@Repository
@RequiredArgsConstructor
public class DbConnectionRepository {

    private final ObjectRepository<AbstractDbConnectionDetails> db;

    public void add(AbstractDbConnectionDetails dbConnection) {
        db.insert(dbConnection);
    }

    public void update(AbstractDbConnectionDetails dbConnection) {
        db.update(dbConnection);
    }

    public Optional<AbstractDbConnectionDetails> findById(String id) {
        return Optional.ofNullable(db.find(eq("id", id)).firstOrDefault());
    }

    public List<AbstractDbConnectionDetails> findAll() {
        return db.find().toList();
    }

    public void deleteById(String id) {
        db.remove(eq("id", id));
    }
}
