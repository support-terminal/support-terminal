package io.github.support.terminal.application.domains.notificarion_api.entity

import io.github.support.terminal.application.domains.integrations.slack.SlackApiClient
import io.github.support.terminal.application.domains.integrations.telegram.TelegramApiClient
import io.github.support.terminal.application.domains.notificarion_api.repository.NotificationApiDetails
import io.github.support.terminal.application.domains.notificarion_api.repository.NotificationApiRepository
import io.github.support.terminal.application.domains.notificarion_api.repository.SlackNotificationApiDetails
import io.github.support.terminal.application.domains.notificarion_api.repository.TelegramNotificationApiDetails
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service
import java.lang.invoke.MethodHandles

@Service
class NotificationApiFactory(
        private val repository: NotificationApiRepository,
        private val slackApiClient: SlackApiClient,
        private val telegramApiClient: TelegramApiClient
) {

    fun createNew(details: NotificationApiDetails): NotificationApi {
        val notificationApi = build(details)
        repository.add(details)
        log.debug("Created $details")
        return notificationApi
    }

    fun update(id: String, detailsUpdate: NotificationApiDetails): NotificationApi {
        val details = getById(id)
        val updateDetails = details.merge(detailsUpdate)
        val updatedNotificationApi = build(updateDetails)
        repository.update(updateDetails)
        log.debug("Updated $updateDetails")
        return updatedNotificationApi
    }

    private fun build(details: NotificationApiDetails): NotificationApi =
            when (details) {
                is SlackNotificationApiDetails -> SlackNotificationApi(details, repository, slackApiClient)
                is TelegramNotificationApiDetails -> TelegramNotificationApi(details, repository, telegramApiClient)
            }

    fun all(): List<NotificationApi> = repository.findAll()
            .map { details: NotificationApiDetails -> build(details) }

    fun byId(id: String): NotificationApi {
        return build(getById(id))
    }

    private fun getById(id: String): NotificationApiDetails = repository.findById(id)
            ?: throw IllegalArgumentException("${NotificationApi::javaClass.name} not found by id=${id}")

    fun delete(id: String) {
        repository.findById(id)?.let {
            repository.deleteById(id)
            log.debug("Deleted ${NotificationApi::javaClass.name} $id")
        }
    }

    companion object {
        private val log = LoggerFactory.getLogger(MethodHandles.lookup().lookupClass())
    }
}
