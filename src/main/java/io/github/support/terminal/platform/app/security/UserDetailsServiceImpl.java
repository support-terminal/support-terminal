package io.github.support.terminal.platform.app.security;

import io.github.support.terminal.platform.app.domains.core.user.entities.CustomerUser;
import io.github.support.terminal.platform.app.domains.core.user.services.UsersService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UsersService usersService;

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        CustomerUser user = usersService.getByUserName(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));
        return new User(user.getUsername(), user.getPassword(), getGrantedAuthorities(user));
    }

    private Collection<GrantedAuthority> getGrantedAuthorities(CustomerUser user){
        return user.getAuthorities().stream()
                .map(a-> new SimpleGrantedAuthority(a)).collect(Collectors.toList());
    }

}