package io.github.support.terminal.application.domains.db_connection.rest

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
@RequestMapping("/api/db-connections")
class DbConnectionsRestController (
        private val dbConnectionsApiService: DbConnectionsRestService
) {

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    fun add(@RequestBody dbConnectionRequest: @Valid DbConnectionRequest): DbConnectionDTO {
        return dbConnectionsApiService.add(dbConnectionRequest)
    }

    @PostMapping("/check")
    @ResponseStatus(code = HttpStatus.OK)
    fun checkConnection(@RequestBody dbConnectionRequest: @Valid DbConnectionRequest): CheckDbConnectionDTO {
        return dbConnectionsApiService.check(dbConnectionRequest)
    }

    @GetMapping
    @ResponseStatus(code = HttpStatus.OK)
    fun list(): List<DbConnectionDTO> {
        return dbConnectionsApiService.list()
    }

    @GetMapping("/types")
    @ResponseStatus(code = HttpStatus.OK)
    fun types(): List<DbConnectionTypeDTO> {
        return dbConnectionsApiService.types()
    }

    @GetMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    operator fun get(@PathVariable id: String): DbConnectionDTO {
        return dbConnectionsApiService.get(id)
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    fun delete(@PathVariable id: String) {
        dbConnectionsApiService.delete(id)
    }

    @PutMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    fun edit(@PathVariable id: String,
             @RequestBody request: @Valid DbConnectionRequest): DbConnectionDTO {
        return dbConnectionsApiService.edit(id, request)
    }
}