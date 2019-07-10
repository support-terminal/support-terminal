package com.nixvision.support.terminal.platform.app.domains.core.notify.models;


import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class NotifySlackBot extends Notify {
    private String botId;
}
