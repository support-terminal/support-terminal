package io.github.support.terminal.app.domains.core.user.services;


import io.github.support.terminal.app.domains.core.user.entities.CustomerUser;
import io.github.support.terminal.app.domains.core.user.entities.Person;
import io.github.support.terminal.app.domains.core.user.exceptions.UserNameAlreadyExistException;
import io.github.support.terminal.app.domains.core.user.models.WebUserDTO;
import io.github.support.terminal.app.domains.core.user.requests.WebUserRequest;
import io.github.support.terminal.app.domains.core.user.values.UserStates;
import io.github.support.terminal.app.domains.core.user.values.UsersGrantedAuthorities;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import static java.util.stream.Collectors.toList;

@Slf4j
@Service
public class WebUsersApiService {

    @Autowired
    UsersService usersService;

    @Autowired
    PasswordEncoder passwordEncoder;

    public WebUserDTO add(@Valid WebUserRequest request) throws UserNameAlreadyExistException {
        if(usersService.getByUserName(request.getUsername().trim())
                .isPresent()){
            throw new UserNameAlreadyExistException();
        }
        CustomerUser user = new CustomerUser();
        user.setState(UserStates.ACTIVE);
        user.setId(UUID.randomUUID().toString());
        user.setRegistrationDate(new Date());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setUsername(request.getUsername().trim());
        user.setAuthorities(Arrays.asList(UsersGrantedAuthorities.WEB_USER));
        user.setPerson(new Person().setName(request.getName()));
        usersService.save(user);
        return mapWebUserDTO(user);
    }

    public List<WebUserDTO> getList() {
        return usersService.getAll().stream().map(this::mapWebUserDTO).collect(toList());
    }

    public WebUserDTO getById(String id) {
        return mapWebUserDTO(usersService.getById(id));
    }

    public void delete(String id) {
        usersService.delete(id);
    }

    public WebUserDTO update(String id, @Valid WebUserRequest request) {
        CustomerUser user = usersService.getById(id);
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setPerson(new Person().setName(request.getName()));
        usersService.update(user);
        return mapWebUserDTO(user);
    }

    private WebUserDTO mapWebUserDTO(CustomerUser user) {
        WebUserDTO dto = new WebUserDTO()
                .setId(user.getId())
                .setUsername(user.getUsername());
        if(user.getPerson() != null){
            dto.setName(user.getPerson().getName());
        }
        return dto;
    }

}
