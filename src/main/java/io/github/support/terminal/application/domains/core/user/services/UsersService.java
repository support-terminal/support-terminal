package io.github.support.terminal.application.domains.core.user.services;


import io.github.support.terminal.application.domains.core.user.entities.CustomerUser;
import io.github.support.terminal.application.domains.core.user.repository.UserRepository;
import io.github.support.terminal.application.domains.core.user.values.UserStates;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Date;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class UsersService {

    private final UserRepository userRepository;

    CustomerUser save(CustomerUser user) {
        return userRepository.add(user);
    }

    CustomerUser update(CustomerUser user) {
        return userRepository.update(user);
    }

    CustomerUser getById(String id) {
        return userRepository.findById(id).get();
    }

    public Optional<CustomerUser> getByUserName(String username) {
        return Optional.ofNullable(userRepository.findByUsername(username));
    }

    Collection<CustomerUser> getAll() {
        return userRepository.findAll().stream().filter( u -> UserStates.ACTIVE.equals(u.getState())).collect(Collectors.toList());
    }

    void delete(String id) {
        userRepository.findById(id).ifPresent(user -> {
            user.setState(UserStates.DELETED);
            user.setLastChangeDate(new Date());
            userRepository.update(user);
        });

    }

}
