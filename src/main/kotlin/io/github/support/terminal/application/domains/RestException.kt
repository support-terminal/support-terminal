package io.github.support.terminal.application.domains

data class RestException(override val message: String) : java.lang.RuntimeException(message)