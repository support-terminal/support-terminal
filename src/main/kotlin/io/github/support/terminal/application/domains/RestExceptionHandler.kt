package io.github.support.terminal.application.domains

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler

@ControllerAdvice
class RestExceptionHandler : ResponseEntityExceptionHandler() {

    @ExceptionHandler(RestException::class)
    fun handle(ex: RestException): ResponseEntity<RestApiError> {
        return ResponseEntity.unprocessableEntity()
                .body(RestApiError(ex.message))
    }
}

data class RestApiError(val message: String)