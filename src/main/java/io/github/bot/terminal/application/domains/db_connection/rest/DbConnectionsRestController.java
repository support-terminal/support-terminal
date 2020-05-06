package io.github.bot.terminal.application.domains.db_connection.rest;

import io.github.bot.terminal.application.domains.db_connection.rest.dto.CheckDbConnectionDTO;
import io.github.bot.terminal.application.domains.db_connection.rest.dto.DbConnectionDTO;
import io.github.bot.terminal.application.domains.db_connection.rest.dto.DbConnectionTypeDTO;
import io.github.bot.terminal.application.domains.db_connection.rest.requests.DbConnectionRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@Slf4j
@RequestMapping("/api/db-connections")
@RequiredArgsConstructor
public class DbConnectionsRestController {

    private final DbConnectionsRestService dbConnectionsApiService;

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
    public List<DbConnectionDTO> list() throws Exception {
        return dbConnectionsApiService.list();
    }


    @GetMapping("/types")
    @ResponseStatus(code = HttpStatus.OK)
    public List<DbConnectionTypeDTO> types() throws Exception {
        return dbConnectionsApiService.types();
    }


    @GetMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public DbConnectionDTO get(@PathVariable String id) throws Exception {
        return dbConnectionsApiService.get(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String id) throws Exception {
        dbConnectionsApiService.delete(id);
    }


    @PutMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public DbConnectionDTO edit(@PathVariable String id,
                                  @RequestBody @Valid DbConnectionRequest request) throws Exception {
        return dbConnectionsApiService.edit(id, request);
    }


}

