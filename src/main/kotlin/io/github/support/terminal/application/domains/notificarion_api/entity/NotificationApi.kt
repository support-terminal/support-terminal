package io.github.support.terminal.application.domains.notificarion_api.entity

import io.github.support.terminal.application.domains.integrations.DocumentFile
import io.github.support.terminal.application.domains.notificarion_api.repository.NotificationApiDetails

interface NotificationApi {
    val id: String
    val lastMessages: List<Message>
    fun sendText(text: String)
    fun sendDocument( file: DocumentFile)
    val details: NotificationApiDetails
}