package io.github.support.terminal.application.config.security.jwt


data class LoginVM(val username: String, val password: String, val rememberMe: Boolean? )