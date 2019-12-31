package io.github.support.terminal.application.domains.core.bots.requests;


import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotBlank;


@Data
@EqualsAndHashCode(callSuper = true)
public class TelegramBotRequest extends BotRequest {
    @NotBlank
    private String name;

    @NotBlank
    private String token;
}