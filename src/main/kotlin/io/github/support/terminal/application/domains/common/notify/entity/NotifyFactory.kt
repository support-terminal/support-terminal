package io.github.support.terminal.application.domains.common.notify.entity

import io.github.support.terminal.application.domains.notificarion_api.entity.NotificationApiFactory
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