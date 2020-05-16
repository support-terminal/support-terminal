package io.github.bot.terminal.application.domains.common.notify.dto;


import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class NotifySlackBotDTO extends NotifyDTO {
    private String botId;
}
