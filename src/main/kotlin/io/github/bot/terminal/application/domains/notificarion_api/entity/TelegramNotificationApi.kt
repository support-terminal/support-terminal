package io.github.bot.terminal.application.domains.notificarion_api.entity

import io.github.bot.terminal.application.domains.integrations.DocumentFile
import io.github.bot.terminal.application.domains.integrations.telegram.TelegramApiClient
import io.github.bot.terminal.application.domains.integrations.telegram.requests.TelegramSendMessageRequest
import io.github.bot.terminal.application.domains.integrations.telegram.requests.UpdateRequest
import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository

class TelegramNotificationApi(override val details: TelegramNotificationApiDetails,
                              private val repository: NotificationApiRepository,
                              private val telegramApiClient: TelegramApiClient) : NotificationApi {

    override val id: String = details.id

    override val lastMessages: List<Message>
        get() {
            val updateResponse = telegramApiClient.getUpdates(details.token, UpdateRequest(details.offset))
            if (!updateResponse.ok) {
                return listOf();
            }
            details.offset = (updateResponse.result.map { it.updateId }.max() ?: 0) + 1
            repository.update(details)
            return updateResponse.result.map { Message(it.message.text) }
        }

    override fun sendMessage(message: Message) {
        telegramApiClient.sendMessage(details.token, TelegramSendMessageRequest("228636557", message.text))
    }

    override fun sendDocument(file: DocumentFile) {
        telegramApiClient.sendDocument(details.token, "228636557", file)
    }


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