package io.github.bot.terminal.application.domains.notificarion_api.rest;


import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.AbstractNotificationApiDTO;
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
    public AbstractNotificationApiDTO add(@RequestBody @Valid NotificationApiRequest request) {
        return notificationApiRestService.add(request);
    }

    @PutMapping("/{id}")
    public AbstractNotificationApiDTO edit(@PathVariable String id,
            @RequestBody @Valid NotificationApiRequest request) {
        return notificationApiRestService.edit(id, request);
    }

    @GetMapping("/{id}")
    public AbstractNotificationApiDTO getById(@PathVariable String id) {
        return notificationApiRestService.get(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String id) {
        notificationApiRestService.delete(id);
    }

    @GetMapping
    public List<AbstractNotificationApiDTO> list() {
        return notificationApiRestService.list();
    }

    @GetMapping("/types")
    public List<NotificationApiTypeDTO> types() {
        return notificationApiRestService.types();
    }
}

