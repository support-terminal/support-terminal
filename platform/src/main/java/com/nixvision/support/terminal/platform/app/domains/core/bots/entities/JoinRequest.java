package com.nixvision.support.terminal.platform.app.domains.core.bots.entities;


import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.dizitart.no2.objects.Id;

import java.util.Date;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(of={"id"})
public class JoinRequest {
    @Id
    private String id;
    private String accountId; //идентификатор пользователя на стороне АПИ
    private String firstName;
    private String lastName;
    private String state;
    private String botId;
    private Date createdDate;
}

