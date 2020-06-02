package io.github.bot.terminal.application.domains.common.notify.entity;


import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class NotifyDetails {
    private String notificationApiId;
    private String messageTemplate;
}
