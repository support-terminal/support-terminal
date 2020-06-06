package io.github.bot.terminal.application.domains.db_connection.entity;


import io.github.bot.terminal.application.domains.db_connection.repository.DbConnectionRepository;


public class MySqlDbConnection extends DbConnection<MySqlDbConnectionDetails> {

    private MySqlDbConnectionDetails details;
    private DbConnectionRepository repository;

    public MySqlDbConnection(MySqlDbConnectionDetails details,
                             DbConnectionRepository repository) {
        this.details = details;
        this.repository = repository;

    }
    public String getId() {
        return details.getId();
    }

    public MySqlDbConnectionDetails getDetails() {
        return details;
    }

    @Override
    public String getUrl() {
        return "jdbc:mysql://" + details.getHost() + ":" + details.getPort() + "/" + details.getDbName();
    }

    @Override
    public String getClassName() {
        return "com.mysql.jdbc.Driver";
    }

    @Override
    public String getCheckSelect() {
        return "SELECT 1";
    }

    public void delete() {
        repository.deleteById(details.id);
    }
}
