package io.github.support.terminal.application.domains.core.dbs.models;


import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * DB connection entity
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class OracleDbConnectionDTO extends DbConnectionDTO {
    private String sid;
}
