package com.nixvision.support.terminal.platform.app.domains.core.notify.models;


import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

@Data
@EqualsAndHashCode(callSuper = true)
public class NotifyTelegramBot extends Notify {
    private String botId;
    private List<String> notifyUsersIds;
}
