package io.github.support.terminal.app.domains.core.source.dbs.models;


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
