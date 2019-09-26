package io.github.support.terminal.app.domains.core.notify.models;


import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class NotifyTask{
    private Notify notify;
    private String message;
}
