package io.github.bot.terminal.application.domains.notificarion_api.rest;


import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.NotificationApiDTO;
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.NotificationApiTypeDTO;
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.NotificationApiRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@Slf4j
@RequestMapping("/api/notifications-api")
@RequiredArgsConstructor
public class NotificationApiRestController {

    private final NotificationApiRestService notificationApiRestService;

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public NotificationApiDTO add(@RequestBody @Valid NotificationApiRequest request) {
        return notificationApiRestService.add(request);
    }

    @PutMapping("/{id}")
    public NotificationApiDTO edit(@PathVariable String id,
                                   @RequestBody @Valid NotificationApiRequest request) {
        return notificationApiRestService.edit(id, request);
    }

    @GetMapping("/{id}")
    public NotificationApiDTO getById(@PathVariable String id) {
        return notificationApiRestService.get(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String id) {
        notificationApiRestService.delete(id);
    }

    @GetMapping
    public List<NotificationApiDTO> list() {
        return notificationApiRestService.list();
    }

    @GetMapping("/types")
    public List<NotificationApiTypeDTO> types() {
        return notificationApiRestService.types();
    }

 /*   @PutMapping(value = "/{botId}/join/{joinId}/denied")
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
    }*/
}

