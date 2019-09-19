package io.github.support.terminal.platform.app.domains.core.rest;

import io.github.support.terminal.platform.app.domains.core.source.dbs.models.CheckDbConnectionDTO;
import io.github.support.terminal.platform.app.domains.core.source.dbs.models.DbConnectionDTO;
import io.github.support.terminal.platform.app.domains.core.source.dbs.models.DbTypeDTO;
import io.github.support.terminal.platform.app.domains.core.source.dbs.requests.DbConnectionRequest;
import io.github.support.terminal.platform.app.domains.core.source.dbs.services.DbConnectionsApiService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;


@RestController
@Slf4j
@RequestMapping("/api/db-connections")
@RequiredArgsConstructor
public class DbConnectionsController {

    private final DbConnectionsApiService dbConnectionsApiService;

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public DbConnectionDTO add(@RequestBody @Valid DbConnectionRequest dbConnectionRequest) throws Exception {
        return dbConnectionsApiService.add(dbConnectionRequest);
    }

    @PostMapping("/check")
    @ResponseStatus(code = HttpStatus.OK)
    public CheckDbConnectionDTO checkConnection(@RequestBody @Valid DbConnectionRequest dbConnectionRequest) throws Exception {
        return dbConnectionsApiService.check(dbConnectionRequest);
    }

    @GetMapping
    @ResponseStatus(code = HttpStatus.OK)
    public Collection<DbConnectionDTO> getAll() throws Exception {
        return dbConnectionsApiService.getList();
    }


    @GetMapping("/types")
    @ResponseStatus(code = HttpStatus.OK)
    public Collection<DbTypeDTO> getConnectionTypes() throws Exception {
        return dbConnectionsApiService.getConnectionTypes();
    }


    @GetMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public DbConnectionDTO getById(@PathVariable String id) throws Exception {
        return dbConnectionsApiService.getById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String id) throws Exception {
        dbConnectionsApiService.delete(id);
    }


    @PutMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public DbConnectionDTO update(@PathVariable String id,
                                  @RequestBody @Valid DbConnectionRequest request) throws Exception {
        return dbConnectionsApiService.update(id, request);
    }

}

