package io.github.support.terminal.platform.app.domains.bot.monitoring.domains.bot.task.models.conditions;


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
