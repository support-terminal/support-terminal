package io.github.bot.terminal.application.domains.db_connection.entity;


import io.github.bot.terminal.application.domains.db_connection.repository.DbConnectionRepository;


public class OracleDbConnection extends DbConnection<OracleDbConnectionDetails> {

    private OracleDbConnectionDetails details;
    private DbConnectionRepository repository;

    public OracleDbConnection(OracleDbConnectionDetails details,
                              DbConnectionRepository repository) {
        this.details = details;
        this.repository = repository;
    }

    public OracleDbConnectionDetails getDetails() {
        return details;
    }

    @Override
    public String getUrl() {
        return "jdbc:oracle:thin:@"+details.getHost()+":"+details.getPort()+"/"+details.getSid();
    }

    @Override
    public String getClassName() {
        return "oracle.jdbc.driver.OracleDriver";
    }

    @Override
    public String getCheckSelect() {
        return "SELECT 1 FROM DUAL";
    }

    @Override
    public void delete() {
        repository.deleteById(details.id);
    }
}
