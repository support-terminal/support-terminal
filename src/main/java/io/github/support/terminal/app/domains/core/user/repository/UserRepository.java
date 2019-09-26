package io.github.support.terminal.app.domains.core.user.repository;


import io.github.support.terminal.app.domains.core.user.entities.CustomerUser;
import lombok.RequiredArgsConstructor;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import static org.dizitart.no2.objects.filters.ObjectFilters.eq;

@Repository
@RequiredArgsConstructor
public class UserRepository {

    private final ObjectRepository<CustomerUser> customerUserRepository;

    public CustomerUser add(CustomerUser customerUser) {
        customerUserRepository.insert(customerUser);
        return customerUserRepository.find(eq("id", customerUser.getId())).firstOrDefault();
    }

    public CustomerUser update(CustomerUser customerUser) {
        customerUserRepository.update(customerUser);
        return customerUserRepository.find(eq("id", customerUser.getId())).firstOrDefault();
    }


    public Optional<CustomerUser> findById(String id) {
        return Optional.ofNullable(customerUserRepository.find(eq("id", id)).firstOrDefault());
    }

    public List<CustomerUser> findAll() {
        return customerUserRepository.find().toList();
    }

    public void deleteById(String id) {
        customerUserRepository.remove(eq("id", id));
    }


    public Collection<CustomerUser> findAllByState(String state){
        return customerUserRepository.find(eq("state", state)).toList();
    }
    
    public CustomerUser findByUsername(String username){
        return customerUserRepository.find(eq("username", username)).firstOrDefault();
    }
}
