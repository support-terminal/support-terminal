package io.github.support.terminal.application.config.security.jwt

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.AuthenticationException
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController
import java.util.*
import javax.servlet.http.HttpServletResponse
import javax.validation.Valid

@RestController
class UserJWTController {
    @Autowired
    private val tokenProvider: TokenProvider? = null

    @Autowired
    private val authenticationManager: AuthenticationManager? = null

    @RequestMapping(value = ["/api/authenticate"], method = [RequestMethod.POST])
    fun authorize(@RequestBody loginVM: @Valid LoginVM, response: HttpServletResponse): ResponseEntity<*> {
        val authenticationToken = UsernamePasswordAuthenticationToken(loginVM.username, loginVM.password)
        return try {
            val authentication = authenticationManager!!.authenticate(authenticationToken)
            SecurityContextHolder.getContext().authentication = authentication
            val rememberMe = loginVM.rememberMe ?: false
            val jwt = tokenProvider!!.createToken(authentication, rememberMe)
            response.addHeader(JWTConfigurer.AUTHORIZATION_HEADER, "Bearer $jwt")
            ResponseEntity.ok(JWTToken(jwt))
        } catch (exception: AuthenticationException) {
            ResponseEntity(Collections.singletonMap("AuthenticationException", exception.localizedMessage), HttpStatus.UNAUTHORIZED)
        }
    }
}