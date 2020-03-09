package io.github.support.terminal.application.domains.core.rest;


import io.github.support.terminal.application.domains.core.bots.models.BotDTO;
import io.github.support.terminal.application.domains.core.bots.models.BotTypeDTO;
import io.github.support.terminal.application.domains.core.bots.requests.BotRequest;
import io.github.support.terminal.application.domains.core.bots.services.BotsApiService;
import io.github.support.terminal.application.domains.core.bots.services.JoinRequestsApiService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;


@RestController
@Slf4j
@RequestMapping("/api/bots")
@RequiredArgsConstructor
public class BotsController {

    private final BotsApiService botApiService;
    private final JoinRequestsApiService joinRequestsApiService;

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public BotDTO add(@RequestBody @Valid BotRequest request) throws Exception {
        return botApiService.add(request);
    }

    @GetMapping
    @ResponseStatus(code = HttpStatus.OK)
    public Collection<BotDTO> getAll() throws Exception {
        return botApiService.getList();
    }


    @GetMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public BotDTO getById(@PathVariable String id) throws Exception {
        return botApiService.getById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String id) throws Exception {
        botApiService.delete(id);
    }


    @PutMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public BotDTO update(@PathVariable String id,
                         @RequestBody @Valid BotRequest request) throws Exception {
        return botApiService.update(id, request);
    }

    @PutMapping(value = "/{botId}/join/{joinId}/denied")
    @ResponseStatus(code = HttpStatus.OK)
    public void deniedJoinRequest(@PathVariable String botId,
                                  @PathVariable String joinId) throws Exception {
        joinRequestsApiService.denied(botId, joinId);
    }

    @PutMapping(value = "/{botId}/join/{joinId}/accept")
    @ResponseStatus(code = HttpStatus.OK)
    public void acceptJoinRequest(@PathVariable String botId,
                                  @PathVariable String joinId) throws Exception {
        joinRequestsApiService.accept(botId, joinId);
    }

    @GetMapping("/types")
    @ResponseStatus(code = HttpStatus.OK)
    public Collection<BotTypeDTO> getBotTypes() throws Exception {
        return botApiService.getBotTypes();
    }


}

