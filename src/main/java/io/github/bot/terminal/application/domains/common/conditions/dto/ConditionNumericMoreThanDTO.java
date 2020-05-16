package io.github.bot.terminal.application.domains.common.conditions.dto;


import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotNull;

@Data
@EqualsAndHashCode(callSuper = true)
public class ConditionNumericMoreThanDTO extends ConditionDTO {
    @NotNull
    private Double expectedValue;
}
