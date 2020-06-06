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
        open val id: String,
        open var label: String,
        open var enabled: Boolean,
        open val type: NotificationApiType
) {
        open fun merge(update: NotificationApiDetails){
                this.label = update.label
                this.enabled = update.enabled
        }
}

data class SlackNotificationApiDetails(
        override val id: String = UUID.randomUUID().toString(),
        override var label: String,
        override var enabled: Boolean,
        var token: String,
        var chanel: String,
        var oldest: Double = Date().toInstant().epochSecond.toDouble()
) : NotificationApiDetails(id, label, enabled, NotificationApiType.SLACK_BOT) {
        override fun merge(detailsUpdate: NotificationApiDetails) {
                if(detailsUpdate is SlackNotificationApiDetails){
                        super.merge(detailsUpdate)
                        this.token = detailsUpdate.token
                        this.chanel = detailsUpdate.chanel
                }
        }
}

data class TelegramNotificationApiDetails(
        override var id: String = UUID.randomUUID().toString(),
        override var label: String,
        override var enabled: Boolean,
        var botFatherName: String,
        var token: String
) : NotificationApiDetails(id, label, enabled, NotificationApiType.TELEGRAM_BOT) {
        override fun merge(detailsUpdate: NotificationApiDetails) {
                if(detailsUpdate is TelegramNotificationApiDetails){
                        super.merge(detailsUpdate)
                        this.token = detailsUpdate.token
                        this.botFatherName = detailsUpdate.botFatherName
                }
        }
}