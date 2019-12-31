package io.github.support.terminal.application.domains.core.dbs.requests;


import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotBlank;

@Data
@EqualsAndHashCode(callSuper = true)
public class PostgresDbConnectionRequest extends DbConnectionRequest {
    @NotBlank
    private String dbName;
}