package io.github.support.terminal.application.config.security.jwt;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

@Slf4j
@Component
public class TokenProvider {

    private static final String AUTHORITIES_KEY = "auth";

    private String secretKey;

    private long tokenValidityInSeconds;

    private long tokenValidityInSecondsForRememberMe;

    @Value("${security.authentication.jwt.secret}")
    String JWT_SECRET;

    @Value("${security.authentication.jwt.tokenValidityInSeconds}")
    long JWT_VALIDITY_IN_SECONDS;

    @Value("${security.authentication.jwt.tokenValidityInSecondsForRememberMe}")
    long JWT_VALIDITY_IN_SECONDS_REMEMBER_ME;

    @PostConstruct
    public void init() {
        this.secretKey = JWT_SECRET;
        this.tokenValidityInSeconds = 1000 * JWT_VALIDITY_IN_SECONDS;
        this.tokenValidityInSecondsForRememberMe = 1000 * JWT_VALIDITY_IN_SECONDS_REMEMBER_ME;
    }

    public String createToken(Authentication authentication, Boolean rememberMe) {
        String authorities = authentication.getAuthorities().stream()
            .map(authority -> authority.getAuthority())
            .collect(Collectors.joining(","));
        long now = (new Date()).getTime();
        Date validity;
        if (rememberMe) {
            validity = new Date(now + this.tokenValidityInSecondsForRememberMe);
        } else {
            validity = new Date(now + this.tokenValidityInSeconds);
        }
        return Jwts.builder()
            .setSubject(authentication.getName())
            .claim(AUTHORITIES_KEY, authorities)
            .signWith(SignatureAlgorithm.HS512, secretKey)
            .setExpiration(validity)
            .compact();
    }

    public Authentication getAuthentication(String token){
        Claims claims = Jwts.parser()
            .setSigningKey(secretKey)
            .parseClaimsJws(token)
            .getBody();
        Collection<? extends GrantedAuthority> authorities =
            Arrays.asList(claims.get(AUTHORITIES_KEY).toString().split(",")).stream()
                .map(authority -> new SimpleGrantedAuthority(authority))
                .collect(Collectors.toList());
        User principal = new User(claims.getSubject(), "",
            authorities);
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(principal, "", authorities);
        usernamePasswordAuthenticationToken.setDetails(claims);
        return usernamePasswordAuthenticationToken;
    }

    public boolean validateToken(String authToken) {
        Jwts.parser().setSigningKey(secretKey).parseClaimsJws(authToken);
        return true;
    }
}
