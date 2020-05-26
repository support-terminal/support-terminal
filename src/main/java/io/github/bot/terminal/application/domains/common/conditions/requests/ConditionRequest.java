package io.github.bot.terminal.application.domains.common.conditions.requests;


import lombok.Data;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotNull;

@Data
@Accessors(chain = true)
public class ConditionRequest {
    @NotNull
    private String type;
    @NotNull
    private Double expectedValue;
}

