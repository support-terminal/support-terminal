package io.github.bot.terminal.application.domains.db_connection.rest.requests;


import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotBlank;

@Data
@EqualsAndHashCode(callSuper = true)
public class OracleDbConnectionRequest extends DbConnectionRequest {

    public OracleDbConnectionRequest() {
        super(DbConnectionType.Constants.ORACLE);
    }

    @NotBlank
    private String sid;
}
