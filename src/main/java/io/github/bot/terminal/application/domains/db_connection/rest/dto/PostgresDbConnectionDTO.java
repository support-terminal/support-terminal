package io.github.bot.terminal.application.domains.db_connection.rest.dto;


import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * DB connection entity
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class PostgresDbConnectionDTO extends DbConnectionDTO {
    private String dbName;
}
