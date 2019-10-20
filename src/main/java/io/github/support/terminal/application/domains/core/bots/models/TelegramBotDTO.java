package io.github.support.terminal.application.domains.core.bots.models;


import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Set;

@Data
@EqualsAndHashCode(callSuper = true)
public class TelegramBotDTO extends BotDTO {
    private String name;
    private String token;
    private Integer lastUpdateId;
    private String state;
    private Set<Integer> approvedUsersIds;
}
