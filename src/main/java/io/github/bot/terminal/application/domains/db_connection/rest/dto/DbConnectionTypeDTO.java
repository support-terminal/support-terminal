package io.github.bot.terminal.application.domains.db_connection.rest.dto;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class DbConnectionTypeDTO {
    private String label;
    private String type;
}
