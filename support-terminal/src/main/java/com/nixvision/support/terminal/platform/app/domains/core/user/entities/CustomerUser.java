package com.nixvision.support.terminal.platform.app.domains.core.user.entities;


import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.dizitart.no2.objects.Id;

import java.util.Collection;
import java.util.Date;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(of={"id"})
public class CustomerUser {

    @Id
    private String id;

    private String username;

    private String password;

    private Person person;

    private String state;

    private Date registrationDate;

    private Date lastChangeDate;

    private Collection<String> authorities;

    private Collection<String> permissions;
}

