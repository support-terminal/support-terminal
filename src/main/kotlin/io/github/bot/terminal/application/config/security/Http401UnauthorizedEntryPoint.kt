package io.github.bot.terminal.application.config.security

import org.springframework.security.core.AuthenticationException
import org.springframework.security.web.AuthenticationEntryPoint
import org.springframework.stereotype.Component
import java.io.IOException
import javax.servlet.ServletException
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

/**
 * Returns a 401 error code (Unauthorized) to the client.
 */
@Component
class Http401UnauthorizedEntryPoint : AuthenticationEntryPoint {
    @Throws(IOException::class, ServletException::class)
    override fun commence(request: HttpServletRequest, response: HttpServletResponse, arg2: AuthenticationException) {
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Access Denied")
    }
}