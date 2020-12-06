package io.github.support.terminal.application.config.security.jwt

import com.fasterxml.jackson.annotation.JsonProperty

data class JWTToken(@JsonProperty("token") var idToken: String)