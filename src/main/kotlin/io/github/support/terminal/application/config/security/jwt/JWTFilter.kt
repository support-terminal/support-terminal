package io.github.support.terminal.application.config.security.jwt

import io.jsonwebtoken.ExpiredJwtException
import org.slf4j.LoggerFactory
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.util.StringUtils
import org.springframework.web.filter.GenericFilterBean
import java.io.IOException
import javax.servlet.FilterChain
import javax.servlet.ServletException
import javax.servlet.ServletRequest
import javax.servlet.ServletResponse
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

/**
 * Filters incoming requests and installs a Spring Security principal if a header corresponding to a valid user is
 * found.
 */
class JWTFilter(private val tokenProvider: TokenProvider) : GenericFilterBean() {
    private val log = LoggerFactory.getLogger(JWTFilter::class.java)

    @Throws(IOException::class, ServletException::class)
    override fun doFilter(servletRequest: ServletRequest, servletResponse: ServletResponse, filterChain: FilterChain) {
        try {
            val httpServletRequest = servletRequest as HttpServletRequest
            val jwt = resolveToken(httpServletRequest)
            if (StringUtils.hasText(jwt)) {
                if (tokenProvider.validateToken(jwt)) {
                    val authentication = tokenProvider.getAuthentication(jwt)
                    SecurityContextHolder.getContext().authentication = authentication
                }
            }
            filterChain.doFilter(servletRequest, servletResponse)
        } catch (eje: ExpiredJwtException) {
            log.info("Security exception for user {} - {}", eje.claims.subject, eje.message)
            (servletResponse as HttpServletResponse).status = HttpServletResponse.SC_UNAUTHORIZED
        }
    }

    private fun resolveToken(request: HttpServletRequest): String? {
        val bearerToken = request.getHeader(JWTConfigurer.AUTHORIZATION_HEADER)
        return if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            bearerToken.substring(7, bearerToken.length)
        } else null
    }

}