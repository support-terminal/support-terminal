package io.github.support.terminal.platform.app.domains.core.user.entities;


import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class Person {
    private String name;
}

