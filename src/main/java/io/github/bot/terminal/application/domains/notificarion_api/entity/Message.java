package io.github.bot.terminal.application.domains.notificarion_api.entity;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class Message {

    private String text;

}
