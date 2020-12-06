package io.github.support.terminal.application.domains.notificarion_api.rest

import io.github.support.terminal.application.domains.notificarion_api.entity.NotificationApiFactory
import io.github.support.terminal.application.domains.notificarion_api.entity.NotificationApiType
import org.springframework.stereotype.Service

@Service
class NotificationApiRestService(
        private val factory: NotificationApiFactory,
        private val converter: NotificationApiRestConverter
) {

    fun add(request: NotificationApiRequest): NotificationApiDTO {
        val notificationApi = factory.createNew(details = converter.mapToDetails(request))
        return converter.mapToDto(notificationApi.details)
    }

    fun edit(id: String, request: NotificationApiRequest): NotificationApiDTO {
        val notificationApi = factory.update(id, detailsUpdate = converter.mapToDetails(request))
        return converter.mapToDto(notificationApi.details)
    }

    fun get(id: String): NotificationApiDTO {
        val notificationApi = factory.byId(id)
        return converter.mapToDto(notificationApi.details)
    }

    fun list(): List<NotificationApiDTO> {
        return factory.all().map { converter.mapToDto(it.details) }
    }

    fun types(): List<NotificationApiTypeDTO> {
        return NotificationApiType.values()
                .map { NotificationApiTypeDTO(it.label, it.name) }
    }

    fun delete(id: String) {
        factory.delete(id)
    }
}