package io.github.support.terminal.platform.app.domains.core.user.models;


import lombok.Data;
import lombok.experimental.Accessors;


@Data
@Accessors(chain = true)
public class WebUserDTO {

    private String id;

    private String name;

    private String username;

    private String password = "***********";
}
