package io.github.bot.terminal.application.domains.notificarion_api.rest

import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.NotificationApiDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.NotificationApiTypeDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.NotificationApiRequest
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import javax.validation.Valid


@RestController
@RequestMapping("/api/notifications-api")
class NotificationApiRestController(
        private val notificationApiRestService: NotificationApiRestService
) {

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    fun add(@RequestBody request: @Valid NotificationApiRequest): NotificationApiDTO {
        return notificationApiRestService.add(request)
    }

    @PutMapping("/{id}")
    fun edit(@PathVariable id: String,
             @RequestBody request: @Valid NotificationApiRequest): NotificationApiDTO {
        return notificationApiRestService.edit(id, request)
    }

    @GetMapping("/{id}")
    fun getById(@PathVariable id: String): NotificationApiDTO {
        return notificationApiRestService.get(id)
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    fun delete(@PathVariable id: String) {
        notificationApiRestService.delete(id)
    }

    @GetMapping
    fun list(): List<NotificationApiDTO> {
        return notificationApiRestService.list()
    }

    @GetMapping("/types")
    fun types(): List<NotificationApiTypeDTO> {
        return notificationApiRestService.types()
    }
}

