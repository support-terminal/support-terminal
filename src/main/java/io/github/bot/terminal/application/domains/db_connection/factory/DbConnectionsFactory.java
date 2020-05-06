package io.github.bot.terminal.application.domains.db_connection.factory;


import io.github.bot.terminal.application.domains.db_connection.entity.*;
import io.github.bot.terminal.application.domains.db_connection.repository.DbConnectionRepository;
import io.github.bot.terminal.application.domains.db_connection.rest.values.DbConnectionType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DbConnectionsFactory {

    private final DbConnectionRepository repository;

    public DbConnection<?> createNew(AbstractDbConnectionDetails details) {
        details.setId(UUID.randomUUID().toString());
        repository.add(details);
        return build(details);
    }

    public DbConnection<?> byId(String id) {
        AbstractDbConnectionDetails details = getById(id);
        return build(details);
    }

    public DbConnection<?> merge(String id, AbstractDbConnectionDetails detailsUpdate) {
        AbstractDbConnectionDetails details = getById(id);
        detailsUpdate.setId(details.getId());
        repository.update(detailsUpdate);
        return build(detailsUpdate);
    }

    private AbstractDbConnectionDetails getById(String id) {
        return repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Notfication API not found: id=" + id));
    }

    public DbConnection<?> build(AbstractDbConnectionDetails details) {
        if (DbConnectionType.MYSQL.equals(details.getType())) {
            return createDetails((MySqlDbConnectionDetails) details);
        } else if (DbConnectionType.POSTGRES.equals(details.getType())) {
            return createDetails((PostgresDbConnectionDetails) details);
        } else if (DbConnectionType.ORACLE.equals(details.getType())) {
            return createDetails((OracleDbConnectionDetails) details);
        }
        throw new IllegalArgumentException("Unknown db connection api type");
    }

    private DbConnection<?> createDetails(MySqlDbConnectionDetails details) {
        return new MySqlDbConnection(details, repository);
    }

    private DbConnection<PostgresDbConnectionDetails> createDetails(PostgresDbConnectionDetails details) {
        return new PostgresDbConnection(details, repository);
    }

    private DbConnection<OracleDbConnectionDetails> createDetails(OracleDbConnectionDetails details) {
        return new OracleDbConnection(details, repository);
    }

    public List<DbConnection<?>> getAll() {
        return repository.findAll().stream()
                .map(this::build).collect(Collectors.toList());
    }
}
