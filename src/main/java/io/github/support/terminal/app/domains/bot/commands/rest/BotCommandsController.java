package io.github.support.terminal.app.domains.bot.commands.rest;

import io.github.support.terminal.app.domains.bot.commands.domains.bot.command.dto.BotCommandDTO;
import io.github.support.terminal.app.domains.bot.commands.domains.bot.command.requests.BotCommandRequest;
import io.github.support.terminal.app.domains.bot.commands.domains.bot.command.services.BotCommandsApiService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;


@RestController
@Slf4j
@RequestMapping("/api/bot-commands/commands")
@RequiredArgsConstructor
public class BotCommandsController {

    private final BotCommandsApiService commandsApiService;

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public BotCommandDTO add(@RequestBody @Valid BotCommandRequest addCommandRequest) throws Exception {
        return commandsApiService.add(addCommandRequest);
    }

    @GetMapping
    @ResponseStatus(code = HttpStatus.OK)
    public Collection<BotCommandDTO> getAll() throws Exception {
        return commandsApiService.getList();
    }


    @GetMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public BotCommandDTO getById(@PathVariable String id) throws Exception {
        return commandsApiService.getById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String id) throws Exception {
        commandsApiService.delete(id);
    }


    @PutMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public BotCommandDTO update(@PathVariable String id,
                                @RequestBody @Valid BotCommandRequest request) throws Exception {
        return commandsApiService.update(id, request);
    }


}

