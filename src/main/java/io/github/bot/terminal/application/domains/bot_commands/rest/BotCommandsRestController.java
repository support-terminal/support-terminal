package io.github.bot.terminal.application.domains.bot_commands.rest;

import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandDTO;
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandTypeDTO;
import io.github.bot.terminal.application.domains.bot_commands.rest.requests.BotCommandRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;


@RestController
@RequestMapping("/api/bot-commands")
@RequiredArgsConstructor
public class BotCommandsRestController {

    private final BotCommandsRestService service;

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public BotCommandDTO add(@RequestBody @Valid BotCommandRequest request) {
        return service.add(request);
    }

    @GetMapping
    @ResponseStatus(code = HttpStatus.OK)
    public Collection<BotCommandDTO> list() {
        return service.list();
    }

    @GetMapping("/types")
    @ResponseStatus(code = HttpStatus.OK)
    public Collection<BotCommandTypeDTO> types() {
        return service.types();
    }


    @GetMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public BotCommandDTO getById(@PathVariable String id) {
        return service.get(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String id) {
        service.delete(id);
    }


    @PutMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public BotCommandDTO edit(@PathVariable String id,
                              @RequestBody @Valid BotCommandRequest request) {
        return service.edit(id, request);
    }

}

