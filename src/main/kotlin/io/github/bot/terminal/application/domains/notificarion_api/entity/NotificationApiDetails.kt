package io.github.bot.terminal.application.domains.notificarion_api.entity

import com.fasterxml.jackson.annotation.JsonSubTypes
import com.fasterxml.jackson.annotation.JsonTypeInfo
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType
import org.dizitart.no2.objects.Id
import java.util.*

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "type", visible = true)
@JsonSubTypes(
        JsonSubTypes.Type(value = SlackNotificationApiDetails::class,
                name = NotificationApiType.Constants.SLACK_BOT),
        JsonSubTypes.Type(value = TelegramNotificationApiDetails::class,
                name = NotificationApiType.Constants.TELEGRAM_BOT)
)
open class NotificationApiDetails (
        @Id
        val id: String,
        var label: String,
        var enabled: Boolean,
        val type: NotificationApiType
) {
        open fun merge(update: NotificationApiDetails){
                label = update.label
                enabled = update.enabled
        }
}

class SlackNotificationApiDetails(
        id: String = UUID.randomUUID().toString(),
        label: String,
        enabled: Boolean,
        var token: String,
        var chanel: String,
        var oldest: Double = Date().toInstant().epochSecond.toDouble()
) : NotificationApiDetails(id, label, enabled, NotificationApiType.SLACK_BOT) {
        override fun merge(detailsUpdate: NotificationApiDetails) {
                if(detailsUpdate is SlackNotificationApiDetails){
                        super.merge(detailsUpdate)
                        token = detailsUpdate.token
                        chanel = detailsUpdate.chanel
                }
        }
}

class TelegramNotificationApiDetails(
        id: String = UUID.randomUUID().toString(),
        label: String,
        enabled: Boolean,
        var botFatherName: String,
        var token: String
) : NotificationApiDetails(id, label, enabled, NotificationApiType.TELEGRAM_BOT) {
        override fun merge(detailsUpdate: NotificationApiDetails) {
                if(detailsUpdate is TelegramNotificationApiDetails){
                        super.merge(detailsUpdate)
                        token = detailsUpdate.token
                        botFatherName = detailsUpdate.botFatherName
                }
        }
}