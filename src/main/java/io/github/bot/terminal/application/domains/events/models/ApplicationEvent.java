package io.github.bot.terminal.application.domains.events.models;


import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.util.Date;

@Data
@Accessors(chain = true)
@EqualsAndHashCode
public class ApplicationEvent {
    private String message;
    private Level level;
    private Date date;

    public static enum Level{
        INFO,
        ERROR
    }
}

