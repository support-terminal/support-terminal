package io.github.support.terminal.application.config.security;


import io.github.support.terminal.application.config.security.jwt.JWTConfigurer;
import io.github.support.terminal.application.config.security.jwt.TokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private Http401UnauthorizedEntryPoint authenticationEntryPoint;

    @Autowired
    private TokenProvider tokenProvider;

    @Value("${admin-login}")
    private String ADMIN_LOGIN;
    @Value("${admin-password}")
    private String ADMIN_PASSWORD;

    @Override
    public void configure(final AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser(ADMIN_LOGIN)
                .password(ADMIN_PASSWORD)
                .roles("ADMIN");
    }

    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .exceptionHandling()
                .authenticationEntryPoint(authenticationEntryPoint)
                .and()
                .csrf()
                .disable()
                .headers()
                .frameOptions()
                .disable();

          http.authorizeRequests()
              .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
              .and().authorizeRequests().antMatchers("/api/websocket/**").permitAll()
              .and().authorizeRequests().antMatchers("/api/authenticate").permitAll()
              .and().authorizeRequests().antMatchers("/api/**").authenticated()
              .and().authorizeRequests().antMatchers("/**").permitAll();

        http.apply(securityConfigurerAdapter());
    }


    private JWTConfigurer securityConfigurerAdapter() {
        return new JWTConfigurer(tokenProvider);
    }

}