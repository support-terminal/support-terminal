package io.github.bot.terminal.application.domains.db_connection.entity;


import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class OracleDbConnectionDetails extends AbstractDbConnectionDetails {
    private String sid;
}
