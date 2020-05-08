package io.github.bot.terminal.application.domains.common.action.dto;


import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public abstract class ActionDTO {

    @NotBlank
    protected String type;
}
