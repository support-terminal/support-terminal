package io.github.bot.terminal.application.domains.notificarion_api.rest

import io.github.bot.terminal.application.domains.notificarion_api.factory.NotificationApiFactory
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.NotificationApiDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.NotificationApiTypeDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.NotificationApiRequest
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType
import org.springframework.stereotype.Service
import java.util.*
import java.util.stream.Collectors

@Service
class NotificationApiRestService(
        private val factory: NotificationApiFactory,
        private val converter: NotificationApiRestConverter
) {

    fun add(request: NotificationApiRequest): NotificationApiDTO {
        val details = converter.mapToDetails(request)
        val notificationApi = factory.createNew(details)
        return converter.mapToDto(notificationApi.details)
    }

    fun edit(id: String, request: NotificationApiRequest): NotificationApiDTO {
        val detailsUpdate = converter.mapToDetails(request)
        val notificationApi = factory.update(id, detailsUpdate)
        return converter.mapToDto(notificationApi.details)
    }

    fun get(id: String): NotificationApiDTO {
        val notificationApi = factory.byId(id)
        return converter.mapToDto(notificationApi.details)
    }

    fun list(): List<NotificationApiDTO> {
        return factory.all()
                .map { converter.mapToDto(it.details) }
    }

    fun types(): List<NotificationApiTypeDTO> {
        return NotificationApiType.values()
                .map { NotificationApiTypeDTO(it.label, it.name) }
    }

    fun delete(id: String) {
        factory.delete(id)
    }
}