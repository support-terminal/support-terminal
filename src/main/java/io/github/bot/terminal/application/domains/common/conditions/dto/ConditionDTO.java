package io.github.bot.terminal.application.domains.common.conditions.dto;


import lombok.Data;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@Accessors(chain = true)
public class ConditionDTO {
    @NotBlank
    private String type;
    @NotNull
    private Double expectedValue;
}

