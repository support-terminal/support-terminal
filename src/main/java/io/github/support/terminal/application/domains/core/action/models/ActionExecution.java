package io.github.support.terminal.application.domains.core.action.models;


import io.github.support.terminal.application.domains.core.action.models.actions.Action;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.Map;


@Data
@Accessors(chain = true)
public class ActionExecution {
    private Action action;
    private String destination;
    private String responseToQueue;
    protected Map<String, Object> payload;
}
