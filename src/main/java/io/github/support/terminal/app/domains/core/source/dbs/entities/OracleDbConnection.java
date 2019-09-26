package io.github.support.terminal.app.domains.core.source.dbs.entities;


import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class OracleDbConnection extends DbConnection {
    private String sid;

    @Override
    public String getUrl() {
        return "jdbc:oracle:thin:@"+getHost()+":"+getPort()+"/"+getSid();
    }

    @Override
    public String getClassName() {
        return "oracle.jdbc.driver.OracleDriver";
    }

    @Override
    public String getCheckSelect() {
        return "SELECT 1 FROM DUAL";
    }
}
