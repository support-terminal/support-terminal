package io.github.bot.terminal.application.domains.common.conditions.entity;

import io.github.bot.terminal.application.domains.common.conditions.values.ConditionType;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class Condition {
    private ConditionType conditionType;
    private Double expectedValue;

    public boolean check(Double value) {
        return conditionType.check(value, expectedValue);
    }
}

