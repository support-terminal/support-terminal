package io.github.bot.terminal.application.domains.notificarion_api.factory

import io.github.bot.terminal.application.domains.integrations.slack.SlackApiClient
import io.github.bot.terminal.application.domains.integrations.telegram.TelegramApiClient
import io.github.bot.terminal.application.domains.notificarion_api.entity.*
import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType
import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Service

@Service
@RequiredArgsConstructor
class NotificationApiFactory(
        private val repository: NotificationApiRepository,
        private val slackApiClient: SlackApiClient,
        private val telegramApiClient: TelegramApiClient
) {

    fun byId(id: String): NotificationApi {
        val details = getById(id)
        return build(details)
    }

    fun getAll() = repository.findAll().map { build(it) }.toList()

    private fun getById(id: String?) = repository.findById(id)
            ?: throw IllegalArgumentException("Notification API not found: id=$id")

    private fun build(details: NotificationApiDetails): NotificationApi {
        if (NotificationApiType.SLACK_BOT == details.type) {
            return build(details as SlackNotificationApiDetails)
        } else if (NotificationApiType.TELEGRAM_BOT == details.type) {
            return build(details as TelegramNotificationApiDetails)
        }
        throw IllegalArgumentException("Unknown notification api type")
    }

    private fun build(details: TelegramNotificationApiDetails) = TelegramNotificationApi(details, repository, telegramApiClient)

    private fun build(details: SlackNotificationApiDetails) = SlackNotificationApi(details, repository, slackApiClient)

}