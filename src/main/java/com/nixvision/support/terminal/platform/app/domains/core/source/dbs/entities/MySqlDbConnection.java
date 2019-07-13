package com.nixvision.support.terminal.platform.app.domains.core.source.dbs.entities;


import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class MySqlDbConnection extends DbConnection {
    private String dbName;

    @Override
    public String getUrl() {
        return "jdbc:mysql://"+getHost()+":"+getPort()+"/"+getDbName();
    }

    @Override
    public String getClassName() {
        return "com.mysql.jdbc.Driver";
    }

    @Override
    public String getCheckSelect() {
        return "SELECT 1";
    }

}