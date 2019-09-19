package io.github.support.terminal.platform.app.domains.core.source.dbs.requests;


import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotBlank;


@Data
@EqualsAndHashCode(callSuper = true)
public class OracleDbConnectionRequest extends DbConnectionRequest {
    @NotBlank
    private String sid;
}
