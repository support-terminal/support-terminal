package io.github.bot.terminal.application.domains.bot_commands.rest

import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandDTO
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandTypeDTO
import io.github.bot.terminal.application.domains.bot_commands.rest.requests.BotCommandRequest
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
        return service[id]
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