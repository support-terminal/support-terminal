package io.github.bot.terminal.application.domains.common.conditions.entity;


import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotNull;

@Data
@EqualsAndHashCode(callSuper = true)
public class ConditionNumericEqual extends Condition {
    @NotNull
    private Double expectedValue;

    @Override
    public boolean check(Object value) {
        return value.equals(expectedValue);
    }
}
