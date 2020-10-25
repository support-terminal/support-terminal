package io.github.bot.terminal.application.domains.notificarion_api.entity

import com.fasterxml.jackson.annotation.JsonSubTypes
import com.fasterxml.jackson.annotation.JsonTypeInfo
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType
import org.dizitart.no2.objects.Id
import java.util.*

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "type", visible = true)
@JsonSubTypes(
        JsonSubTypes.Type(value = SlackNotificationApiDetails::class, name = NotificationApiType.Constants.SLACK_BOT),
        JsonSubTypes.Type(value = TelegramNotificationApiDetails::class, name = NotificationApiType.Constants.TELEGRAM_BOT)
)
sealed class NotificationApiDetails(@Id open val id: String) {
    abstract val type: NotificationApiType
    abstract var label: String
    abstract var enabled: Boolean
    open fun merge(update: NotificationApiDetails) {
        label = update.label
        enabled = update.enabled
    }
}

data class SlackNotificationApiDetails(
        override val id: String = UUID.randomUUID().toString(),
        override var label: String,
        override var enabled: Boolean,
        var token: String,
        var chanel: String,
        var oldest: Long = Date().toInstant().epochSecond
) : NotificationApiDetails(id) {
    override val type: NotificationApiType = NotificationApiType.SLACK_BOT

    override fun merge(detailsUpdate: NotificationApiDetails) {
        if (detailsUpdate is SlackNotificationApiDetails) {
            super.merge(detailsUpdate)
            token = detailsUpdate.token
            chanel = detailsUpdate.chanel
            oldest = detailsUpdate.oldest
        }
    }
}

data class TelegramNotificationApiDetails(
        override val id: String = UUID.randomUUID().toString(),
        override var label: String,
        override var enabled: Boolean,
        var botFatherName: String,
        var token: String,
        var chatId: String,
        var offset: Int = 0
) : NotificationApiDetails(id) {
    override var type: NotificationApiType = NotificationApiType.TELEGRAM_BOT

    override fun merge(detailsUpdate: NotificationApiDetails) {
        if (detailsUpdate is TelegramNotificationApiDetails) {
            super.merge(detailsUpdate)
            token = detailsUpdate.token
            chatId = detailsUpdate.chatId
            botFatherName = detailsUpdate.botFatherName
            offset = detailsUpdate.offset
        }
    }
}