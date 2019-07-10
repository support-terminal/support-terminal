package com.nixvision.support.terminal.platform.app.domains.core.bots.requests;


import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotBlank;

@Data
@EqualsAndHashCode(callSuper = true)
public class SlackBotRequest extends BotRequest {
    @NotBlank
    private String token;
    @NotBlank
    private String channel;
}