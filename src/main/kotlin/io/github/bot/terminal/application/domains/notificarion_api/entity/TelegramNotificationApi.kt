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

}