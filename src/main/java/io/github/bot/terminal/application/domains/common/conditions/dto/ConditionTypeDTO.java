package io.github.bot.terminal.application.domains.common.conditions.dto;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class ConditionTypeDTO {
    private String label;
    private String type;
}
