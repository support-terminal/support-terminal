package io.github.support.terminal.application.config.security

import io.github.support.terminal.application.config.security.jwt.JWTConfigurer
import io.github.support.terminal.application.config.security.jwt.TokenProvider
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.config.http.SessionCreationPolicy

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
open class SecurityConfig(
    private val tokenProvider: TokenProvider,
    private val authenticationEntryPoint: Http401UnauthorizedEntryPoint,
    @Value("\${admin-login}") private val adminLogin: String,
    @Value("\${admin-password}") private val adminPassword: String
) : WebSecurityConfigurerAdapter() {

    @Throws(Exception::class)
    public override fun configure(auth: AuthenticationManagerBuilder) {
        auth.inMemoryAuthentication()
            .withUser(adminLogin)
            .password(adminPassword)
            .roles("ADMIN")
    }

    @Bean
    @Throws(Exception::class)
    override fun authenticationManagerBean(): AuthenticationManager {
        return super.authenticationManagerBean()
    }

    @Throws(Exception::class)
    override fun configure(http: HttpSecurity) {
        http
            .exceptionHandling()
            .authenticationEntryPoint(authenticationEntryPoint)
            .and()
            .csrf()
            .disable()
            .headers()
            .frameOptions()
            .disable()
        http.authorizeRequests()
            .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and().authorizeRequests().antMatchers("/api/websocket/**").permitAll()
            .and().authorizeRequests().antMatchers("/api/authenticate").permitAll()
            .and().authorizeRequests().antMatchers("/api/**").authenticated()
            .and().authorizeRequests().antMatchers("/**").permitAll()
        http.apply(securityConfigurerAdapter())
    }

    private fun securityConfigurerAdapter(): JWTConfigurer {
        return JWTConfigurer(tokenProvider)
    }
}
