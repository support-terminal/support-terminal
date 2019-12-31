package io.github.support.terminal.application.domains.core.events.models;


import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.util.Date;

@Data
@Accessors(chain = true)
@EqualsAndHashCode
public class ApplicationEvent {
    private String text;
    private Date date;
}
