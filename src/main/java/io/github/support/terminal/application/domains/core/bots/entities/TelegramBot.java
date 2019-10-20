package io.github.support.terminal.application.domains.core.bots.entities;


import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.HashSet;
import java.util.Set;

@Data
@EqualsAndHashCode(callSuper = true)
public class TelegramBot extends Bot {
    private String name;
    private String token;
    private Integer lastUpdateId;
    private Set<String> approvedUserIds;

    @Override
    public void accept(JoinRequest joinRequest) {
        if(approvedUserIds == null) {
            approvedUserIds = new HashSet<>();
        }
        approvedUserIds.add(joinRequest.getAccountId());
    }

    @Override
    public void denied(JoinRequest joinRequest) {
        if(approvedUserIds != null) {
            approvedUserIds.remove(joinRequest.getAccountId());
        }
    }
}
