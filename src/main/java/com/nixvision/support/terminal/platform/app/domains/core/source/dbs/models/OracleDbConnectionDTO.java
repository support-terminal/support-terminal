package com.nixvision.support.terminal.platform.app.domains.core.source.dbs.models;


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
