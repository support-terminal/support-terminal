package io.github.support.terminal.application.config.security.jwt;

import com.fasterxml.jackson.annotation.JsonProperty;

public class JWTToken {
    private String idToken;
    public JWTToken(String idToken) {
        this.idToken = idToken;
    }
    @JsonProperty("token")
    public String getIdToken() {
        return idToken;
    }
    public void setIdToken(String idToken) {
        this.idToken = idToken;
    }
}
