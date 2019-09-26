package io.github.support.terminal.app.domains.core.rest;

import io.github.support.terminal.app.domains.core.user.models.WebUserDTO;
import io.github.support.terminal.app.domains.core.user.requests.WebUserRequest;
import io.github.support.terminal.app.domains.core.user.services.WebUsersApiService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@Slf4j
@RequestMapping("/api/web-users")
@RequiredArgsConstructor
public class WebUsersController {

    private final WebUsersApiService webUsersApiService;

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public WebUserDTO add(@RequestBody @Valid WebUserRequest request) throws Exception {
        return webUsersApiService.add(request);
    }

    @PutMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public WebUserDTO update(@PathVariable String id,
                             @RequestBody @Valid WebUserRequest request) throws Exception {
        return webUsersApiService.update(id, request);
    }

    @GetMapping
    @ResponseStatus(code = HttpStatus.OK)
    public List<WebUserDTO> getAll() throws Exception {
        return webUsersApiService.getList();
    }

    @GetMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public WebUserDTO getById(@PathVariable String id) throws Exception {
        return webUsersApiService.getById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String id) throws Exception {
        webUsersApiService.delete(id);
    }


}

