package io.github.support.terminal.app.domains.core.bots.models;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class BotTypeDTO {
    private String name;
    private String type;
}