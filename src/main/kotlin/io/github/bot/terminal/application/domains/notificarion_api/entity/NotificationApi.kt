package io.github.bot.terminal.application.domains.notificarion_api.entity

import io.github.bot.terminal.application.domains.integrations.DocumentFile

interface NotificationApi {
    val id:String
    val lastMessages: List<Message>
    fun sendMessage(message: Message)
    fun sendDocument(file: DocumentFile)
}