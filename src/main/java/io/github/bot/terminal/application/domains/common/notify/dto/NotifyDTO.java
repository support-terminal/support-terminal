package io.github.bot.terminal.application.domains.common.notify.dto;


import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class NotifyDTO {
    private String notificationApiId;
    private String messageTemplate;
}
