package com.nixvision.support.terminal.platform.app.domains.core.action.models;


import com.nixvision.support.terminal.platform.app.domains.core.action.models.actions.Action;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.Map;


@Data
@Accessors(chain = true)
public class ActionExecution {
    private Action action;
    private String responseToQueue;
    protected Map<String, Object> payload;
}
