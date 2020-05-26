package io.github.bot.terminal.application.domains.common.conditions.entity;

import io.github.bot.terminal.application.domains.common.conditions.values.ConditionType;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class ConditionDetails {
    private ConditionType conditionType;
    private Double expectedValue;
}

