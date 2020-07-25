package io.github.bot.terminal.application.domains.common.notify.factory

import io.github.bot.terminal.application.domains.common.notify.entity.Notify
import io.github.bot.terminal.application.domains.common.notify.entity.NotifyDetails
import io.github.bot.terminal.application.domains.notificarion_api.factory.NotificationApiFactory
import org.springframework.stereotype.Service

@Service
class NotifyFactory(
        private val notificationApiFactory: NotificationApiFactory
) {
    fun build(details: NotifyDetails): Notify {
        val notificationApi = notificationApiFactory.byId(details.notificationApiId)
        return Notify(notificationApi, details.messageTemplate)
    }
}