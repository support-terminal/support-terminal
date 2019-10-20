package io.github.support.terminal.application.domains.core.dbs.models;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class DbTypeDTO {
    private String name;
    private String type;
}
