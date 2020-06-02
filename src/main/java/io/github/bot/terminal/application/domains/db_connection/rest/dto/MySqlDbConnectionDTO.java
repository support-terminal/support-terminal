package io.github.bot.terminal.application.domains.db_connection.rest.dto;


import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class MySqlDbConnectionDTO extends DbConnectionDTO {
    private String dbName;
}
