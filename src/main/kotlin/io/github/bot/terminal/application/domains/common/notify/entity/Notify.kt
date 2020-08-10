package io.github.bot.terminal.application.domains.common.notify.entity

import io.github.bot.terminal.application.domains.notificarion_api.entity.Message
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi

class Notify(
        val notificationApi: NotificationApi,
        val messageTemplate: String
) {
    fun execute() {
        notificationApi.sendMessage(Message(messageTemplate))
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Notify

        if (notificationApi != other.notificationApi) return false
        if (messageTemplate != other.messageTemplate) return false

        return true
    }

    override fun hashCode(): Int {
        var result = notificationApi.hashCode()
        result = 31 * result + messageTemplate.hashCode()
        return result
    }

}