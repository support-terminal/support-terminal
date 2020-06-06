package io.github.bot.terminal.application.domains.notificarion_api.rest

import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApiDetails
import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.NotificationApiDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.NotificationApiTypeDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.NotificationApiRequest
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType
import lombok.extern.slf4j.Slf4j
import org.springframework.stereotype.Service
import java.util.*
import java.util.stream.Collectors

@Slf4j
@Service
class NotificationApiRestService(
        private val repository: NotificationApiRepository,
        private val converter: NotificationApiRestConverter
) {

    fun add(request: NotificationApiRequest): NotificationApiDTO {
        val details = converter.mapToDetails(request)
        repository.add(details)
        return converter.mapToDto(details)
    }

    fun edit(id: String, request: NotificationApiRequest): NotificationApiDTO {
        val detailsUpdate = converter.mapToDetails(request)
        val details = getById(id);
        details.merge(detailsUpdate);
        repository.update(details);
        return converter.mapToDto(details);
    }

    operator fun get(id: String): NotificationApiDTO {
        return converter.mapToDto(getById(id))
    }

    private fun getById(id: String): NotificationApiDetails {
        return repository.findById(id)?.let {
            return it
        } ?: throw RuntimeException("Notification Api not found")
    }

    fun list(): List<NotificationApiDTO> {
        return repository.findAll()
                .map { converter.mapToDto(it) }
                .toList()
    }

    fun types(): List<NotificationApiTypeDTO> {
        return Arrays.stream(NotificationApiType.values())
                .map { NotificationApiTypeDTO(it.label, it.name) }
                .collect(Collectors.toList())
    }

    fun delete(id: String) {
        repository.findById(id)?.let {
            repository.deleteById(id)
        }
    }
}