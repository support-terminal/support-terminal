package io.github.support.terminal.application.domains.core.dbs.entities;


import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class PostgresDbConnection extends DbConnection {
    private String dbName;

    @Override
    public String getUrl() {
        return "jdbc:postgresql://"+getHost()+":"+getPort()+"/"+getDbName();
    }

    @Override
    public String getClassName() {
        return "org.postgresql.Driver";
    }

    @Override
    public String getCheckSelect() {
        return "SELECT 1";
    }

}
