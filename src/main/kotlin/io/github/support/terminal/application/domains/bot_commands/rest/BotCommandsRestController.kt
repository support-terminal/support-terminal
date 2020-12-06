package io.github.support.terminal.application.domains.bot_commands.rest

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
@RequestMapping("/api/bot-commands")
class BotCommandsRestController(
        private val service: BotCommandsRestService
) {

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    fun add(@RequestBody request: @Valid BotCommandRequest): BotCommandDTO {
        return service.add(request)
    }

    @GetMapping
    @ResponseStatus(code = HttpStatus.OK)
    fun list(): Collection<BotCommandDTO> {
        return service.list()
    }

    @GetMapping("/types")
    @ResponseStatus(code = HttpStatus.OK)
    fun types(): Collection<BotCommandTypeDTO> {
        return service.types()
    }

    @GetMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    fun getById(@PathVariable id: String): BotCommandDTO {
        return service.get(id)
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    fun delete(@PathVariable id: String) {
        service.delete(id)
    }

    @PutMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    fun edit(@PathVariable id: String,
             @RequestBody request: @Valid BotCommandRequest): BotCommandDTO {
        return service.edit(id, request)
    }
}