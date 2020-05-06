package io.github.bot.terminal.application.domains.db_connection.rest.requests;


import io.github.bot.terminal.application.domains.db_connection.rest.values.DbConnectionType;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotBlank;

@Data
@EqualsAndHashCode(callSuper = true)
public class PostgresDbConnectionRequest extends DbConnectionRequest {

    public PostgresDbConnectionRequest() {
        super(DbConnectionType.Constants.POSTGRES);
    }

    @NotBlank
    private String dbName;
}