package io.github.support.terminal.application.domains.notificarion_api.rest

import io.github.support.terminal.application.domains.RestException
import io.github.support.terminal.application.domains.bot_commands.entity.BotCommandsFactory
import io.github.support.terminal.application.domains.notificarion_api.entity.NotificationApiFactory
import io.github.support.terminal.application.domains.notificarion_api.entity.NotificationApiType
import io.github.support.terminal.application.domains.workers.MonitoringTasksWorker
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service
import java.lang.invoke.MethodHandles

@Service
class NotificationApiRestService(
        private val factory: NotificationApiFactory,
        private val converter: NotificationApiRestConverter,
        private val botCommandsFactory: BotCommandsFactory,
        private val monitoringTasksWorker: MonitoringTasksWorker
) {

    fun add(request: NotificationApiRequest): NotificationApiDTO {
        val notificationApi = factory.createNew(details = converter.mapToDetails(request))
        monitoringTasksWorker.runRefreshSchedulers()
        return converter.mapToDto(notificationApi.details)
    }

    fun edit(id: String, request: NotificationApiRequest): NotificationApiDTO {
        val notificationApi = factory.update(id, detailsUpdate = converter.mapToDetails(request))
        monitoringTasksWorker.runRefreshSchedulers()
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
                .filter { t -> t != NotificationApiType.SLACK_BOT }
                .map { NotificationApiTypeDTO(it.label, it.name) }
    }

    fun delete(id: String) {
        factory.findById(id)?.let {
            val dependentCommands = botCommandsFactory.byNotificationApiId(id)
            if (dependentCommands.isNullOrEmpty()) {
                factory.delete(id)
            } else {
                val mes = "Could not delete notification api $id found dependent bot commands: ${dependentCommands.joinToString { it.name }}"
                log.warn(mes)
                throw RestException(mes)
            }
            monitoringTasksWorker.runRefreshSchedulers()
        }
    }

    companion object {
        private val log = LoggerFactory.getLogger(MethodHandles.lookup().lookupClass())
    }
}