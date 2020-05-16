package io.github.bot.terminal.application.domains.common.notify.requests;


import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class NotifySlackBotRequest extends NotifyRequest {
    private String botId;
}
