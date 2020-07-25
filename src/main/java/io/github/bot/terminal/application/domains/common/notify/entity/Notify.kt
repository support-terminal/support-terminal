package io.github.bot.terminal.application.domains.common.notify.entity

import io.github.bot.terminal.application.domains.notificarion_api.entity.Message
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi

class Notify(
        private val notificationApi: NotificationApi,
        private val messageTemplate: String
) {
    fun execute() {
        notificationApi.sendMessage(Message(messageTemplate))
    }
}