package io.github.support.terminal.application.domains.core.user.entities;


import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class Person {
    private String name;
}

