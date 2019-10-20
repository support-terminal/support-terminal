package io.github.support.terminal.application.domains.core.dbs.models;


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
