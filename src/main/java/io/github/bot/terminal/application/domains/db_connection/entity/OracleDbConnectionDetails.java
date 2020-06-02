package io.github.bot.terminal.application.domains.db_connection.entity;


import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class OracleDbConnectionDetails extends DbConnectionDetails {
    private String sid;
}
