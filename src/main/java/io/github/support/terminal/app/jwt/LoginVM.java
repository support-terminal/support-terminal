package io.github.support.terminal.app.jwt;


import lombok.Data;

/**
 * View Model object for pass a user's credentials.
 */
@Data
public class LoginVM {
    private String username;
    private String password;
    private Boolean rememberMe;
}
