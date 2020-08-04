package io.github.bot.terminal.application.domains.notificarion_api.factory

import io.github.bot.terminal.application.domains.integrations.slack.SlackApiClient
import io.github.bot.terminal.application.domains.integrations.telegram.TelegramApiClient
import io.github.bot.terminal.application.domains.notificarion_api.entity.*
import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository
import org.springframework.stereotype.Service

@Service
class NotificationApiFactory(
        private val repository: NotificationApiRepository,
        private val slackApiClient: SlackApiClient,
        private val telegramApiClient: TelegramApiClient
) {

    fun createNew(details: NotificationApiDetails): NotificationApi {
        val notificationApi = build(details)
        repository.add(details)
        return notificationApi
    }
    
    fun update(id: String, detailsUpdate: NotificationApiDetails): NotificationApi {
        val details = getById(id)
        details.merge(detailsUpdate)
        val notificationApi = build(details)
        repository.update(details)
        return notificationApi
    }

    private fun build(details: NotificationApiDetails): NotificationApi {
        if (details is SlackNotificationApiDetails) {
            return SlackNotificationApi(details, repository, slackApiClient)
        } else if (details is TelegramNotificationApiDetails) {
            return TelegramNotificationApi(details, repository, telegramApiClient)
        }
        throw IllegalArgumentException("Unknown notification api type")
    }

    fun all(): List<NotificationApi> = repository.findAll()
            .map { details: NotificationApiDetails -> build(details) }
            .toList()
    
    fun byId(id: String): NotificationApi {
        return build(getById(id))
    }  
    
    fun getById(id: String): NotificationApiDetails
            = repository.findById(id) ?: throw IllegalArgumentException("NotificationApi not found by id=${id}")

    fun delete(id: String) {
        repository.findById(id)?.let {
            repository.deleteById(id)
        }
    }

}
