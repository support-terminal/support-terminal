package io.github.support.terminal.application.config.security;


import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  /*  @Autowired
    private Http401UnauthorizedEntryPoint authenticationEntryPoint;

    @Autowired
    private TokenProvider tokenProvider;

    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Override
    public void configure(final AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder
                .userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoder());
    }

    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
*/
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .exceptionHandling()
          //      .authenticationEntryPoint(authenticationEntryPoint)
                .and()
                .csrf()
                .disable()
                .headers()
                .frameOptions()
                .disable();

        http.authorizeRequests().antMatchers("/**").permitAll();
/*

          http.authorizeRequests()
              .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
              .and().authorizeRequests().antMatchers("/api/websocket/**").permitAll()
              .and().authorizeRequests().antMatchers("/api/authenticate").permitAll()
              .and().authorizeRequests().antMatchers("/api/**").authenticated()
              .and().authorizeRequests().antMatchers("/**").permitAll();
*/

      //  http.apply(securityConfigurerAdapter());
    }

/*
    private JWTConfigurer securityConfigurerAdapter() {
        return new JWTConfigurer(tokenProvider);
    }
*/


}