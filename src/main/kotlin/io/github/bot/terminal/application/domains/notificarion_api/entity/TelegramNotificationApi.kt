package io.github.bot.terminal.application.domains.notificarion_api.entity

import io.github.bot.terminal.application.domains.integrations.DocumentFile
import io.github.bot.terminal.application.domains.integrations.telegram.TelegramApiClient
import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository

class TelegramNotificationApi(override val details: TelegramNotificationApiDetails,
                              private val repository: NotificationApiRepository,
                              private val telegramApiClient: TelegramApiClient) : NotificationApi {
    override val id: String = details.id

    override val lastMessages: List<Message>
        get() = emptyList()

    override fun sendMessage(message: Message) {}
    override fun sendDocument(file: DocumentFile) {}








    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as TelegramNotificationApi

        if (details != other.details) return false
        if (repository != other.repository) return false
        if (telegramApiClient != other.telegramApiClient) return false
        if (id != other.id) return false

        return true
    }

    override fun hashCode(): Int {
        var result = details.hashCode()
        result = 31 * result + repository.hashCode()
        result = 31 * result + telegramApiClient.hashCode()
        result = 31 * result + id.hashCode()
        return result
    }

}