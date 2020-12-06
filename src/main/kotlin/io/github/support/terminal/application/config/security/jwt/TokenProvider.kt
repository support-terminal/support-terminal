package io.github.support.terminal.application.config.security.jwt

import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import org.springframework.beans.factory.annotation.Value
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.User
import org.springframework.stereotype.Component
import java.util.*
import java.util.stream.Collectors
import javax.annotation.PostConstruct


@Component
class TokenProvider {
    private var secretKey: String? = null
    private var tokenValidityInSeconds: Long = 0
    private var tokenValidityInSecondsForRememberMe: Long = 0

    @Value("\${security.authentication.jwt.secret}")
    var JWT_SECRET: String? = null

    @Value("\${security.authentication.jwt.tokenValidityInSeconds}")
    var JWT_VALIDITY_IN_SECONDS: Long = 0

    @Value("\${security.authentication.jwt.tokenValidityInSecondsForRememberMe}")
    var JWT_VALIDITY_IN_SECONDS_REMEMBER_ME: Long = 0

    @PostConstruct
    fun init() {
        secretKey = JWT_SECRET
        tokenValidityInSeconds = 1000 * JWT_VALIDITY_IN_SECONDS
        tokenValidityInSecondsForRememberMe = 1000 * JWT_VALIDITY_IN_SECONDS_REMEMBER_ME
    }

    fun createToken(authentication: Authentication, rememberMe: Boolean): String {
        val authorities = authentication.authorities.stream()
                .map { authority: GrantedAuthority? -> authority!!.authority }
                .collect(Collectors.joining(","))
        val now = Date().time
        val validity: Date
        validity = if (rememberMe) {
            Date(now + tokenValidityInSecondsForRememberMe)
        } else {
            Date(now + tokenValidityInSeconds)
        }
        return Jwts.builder()
                .setSubject(authentication.name)
                .claim(AUTHORITIES_KEY, authorities)
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .setExpiration(validity)
                .compact()
    }

    fun getAuthentication(token: String?): Authentication {
        val claims = Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .body
        val authorities: Collection<GrantedAuthority?> = Arrays.asList(*claims[AUTHORITIES_KEY].toString().split(",".toRegex()).toTypedArray()).stream()
                .map { authority: String? -> SimpleGrantedAuthority(authority) }
                .collect(Collectors.toList())
        val principal = User(claims.subject, "",
                authorities)
        val usernamePasswordAuthenticationToken = UsernamePasswordAuthenticationToken(principal, "", authorities)
        usernamePasswordAuthenticationToken.details = claims
        return usernamePasswordAuthenticationToken
    }

    fun validateToken(authToken: String?): Boolean {
        Jwts.parser().setSigningKey(secretKey).parseClaimsJws(authToken)
        return true
    }

    companion object {
        private const val AUTHORITIES_KEY = "auth"
    }
}