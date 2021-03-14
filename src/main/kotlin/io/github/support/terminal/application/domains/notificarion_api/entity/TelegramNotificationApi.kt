package io.github.support.terminal.application.domains.notificarion_api.entity

import io.github.support.terminal.application.domains.integrations.DocumentFile
import io.github.support.terminal.application.domains.integrations.telegram.TelegramApiClient
import io.github.support.terminal.application.domains.integrations.telegram.requests.TelegramSendMessageRequest
import io.github.support.terminal.application.domains.integrations.telegram.requests.UpdateRequest
import io.github.support.terminal.application.domains.notificarion_api.repository.NotificationApiRepository
import io.github.support.terminal.application.domains.notificarion_api.repository.TelegramNotificationApiDetails

class TelegramNotificationApi(override val details: TelegramNotificationApiDetails,
                              private val repository: NotificationApiRepository,
                              private val telegramApiClient: TelegramApiClient) : NotificationApi {

    override val id: String = details.id

    override fun lastMessages(): List<Message> {
        val updateResponse = telegramApiClient.getUpdates(details.token, UpdateRequest(details.offset))
        if (!updateResponse.ok) {
            return listOf()
        }
        repository.update(details.incrementOffset((updateResponse.result.map { it.updateId }.max() ?: 0) + 1))
        return updateResponse.result
                .mapNotNull {
                    if(it.message?.text != null){
                        Message(it.message.text)
                    }else{
                        null
                    }
                }
    }

    override fun sendText(text: String) {
        telegramApiClient.sendMessage(details.token, TelegramSendMessageRequest(details.chatId, text))
    }

    override fun sendDocument(file: DocumentFile) {
        telegramApiClient.sendDocument(details.token, details.chatId, file)
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