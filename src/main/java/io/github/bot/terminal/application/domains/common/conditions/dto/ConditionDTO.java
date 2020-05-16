package io.github.bot.terminal.application.domains.common.conditions.dto;


import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public abstract class ConditionDTO {
    @NotBlank
    private String type;
}

