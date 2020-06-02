package io.github.bot.terminal.application.domains.common.notify.requests;


import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class NotifyRequest {
    private String notificationApiId;
    private String messageTemplate;
}
