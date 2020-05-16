package io.github.bot.terminal.application.domains.common.conditions.requests;


import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotNull;

@Data
@EqualsAndHashCode(callSuper = true)
public class ConditionNumericEqualRequest extends ConditionRequest {
    @NotNull
    private Double expectedValue;
}
