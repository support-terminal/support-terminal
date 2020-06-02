package io.github.bot.terminal.application.domains.db_connection.entity;


import io.github.bot.terminal.application.domains.db_connection.repository.DbConnectionRepository;


public class PostgresDbConnection extends DbConnection<PostgresDbConnectionDetails> {

    private PostgresDbConnectionDetails details;
    private DbConnectionRepository repository;

    public PostgresDbConnection(PostgresDbConnectionDetails details,
                                DbConnectionRepository repository) {
        this.details = details;
        this.repository = repository;

    }

    public PostgresDbConnectionDetails getDetails() {
        return details;
    }

    @Override
    public String getUrl() {
        return "jdbc:postgresql://" + details.getHost() + ":" + details.getPort() + "/" + details.getDbName();
    }

    @Override
    public String getClassName() {
        return "org.postgresql.Driver";
    }

    @Override
    public String getCheckSelect() {
        return "SELECT 1";
    }

    @Override
    public void delete() {
        repository.deleteById(details.id);
    }
}
