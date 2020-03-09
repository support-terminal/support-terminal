package io.github.support.terminal.application.domains.core.bots.entities;


import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.HashSet;
import java.util.Set;

@Data
@EqualsAndHashCode(callSuper = true)
public class SlackBot extends Bot {
    private String token;
    private String channel;
    private Double oldest;
    private Set<String> approvedUsers;

    @Override
    public void accept(JoinRequest joinRequest) {
        if(approvedUsers == null) {
            approvedUsers = new HashSet<>();
        }
        approvedUsers.add(joinRequest.getAccountId());
    }

    @Override
    public void denied(JoinRequest joinRequest) {
        if(approvedUsers != null) {
            approvedUsers.remove(joinRequest.getAccountId());
        }
    }
}
