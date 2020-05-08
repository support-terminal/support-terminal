package io.github.bot.terminal.application.domains.db_connection.values;


public enum DbConnectionType {

    POSTGRES("PostgreSQL"),
    ORACLE("Oracle DB"),
    MYSQL("MySQL");

    private String label;

    DbConnectionType(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }

    public interface Constants {
        String POSTGRES = "POSTGRES";
        String ORACLE = "ORACLE";
        String MYSQL = "MYSQL";
    }
}
