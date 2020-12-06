package io.github.support.terminal.application.domains.notificarion_api.repository

import com.fasterxml.jackson.annotation.JsonSubTypes
import com.fasterxml.jackson.annotation.JsonTypeInfo
import io.github.support.terminal.application.domains.notificarion_api.entity.NotificationApiType
import org.dizitart.no2.objects.Id
import java.util.*

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "type", visible = true)
@JsonSubTypes(
        JsonSubTypes.Type(value = SlackNotificationApiDetails::class, name = NotificationApiType.Constants.SLACK_BOT),
        JsonSubTypes.Type(value = TelegramNotificationApiDetails::class, name = NotificationApiType.Constants.TELEGRAM_BOT)
)
sealed class NotificationApiDetails(@Id open val id: String) {
    abstract val type: NotificationApiType
    abstract val label: String
    abstract val enabled: Boolean
    abstract fun merge(update: NotificationApiDetails): NotificationApiDetails
}

data class SlackNotificationApiDetails(
        override val id: String = UUID.randomUUID().toString(),
        override val label: String,
        override val enabled: Boolean,
        val token: String,
        val chanel: String,
        val oldest: Long = 0L
) : NotificationApiDetails(id) {
    override val type: NotificationApiType = NotificationApiType.SLACK_BOT

    override fun merge(update: NotificationApiDetails) =
            if (update is SlackNotificationApiDetails) {
                this.copy(label = update.label,
                        enabled = update.enabled,
                        token = update.token,
                        chanel = update.chanel,
                        oldest = update.oldest
                )
            } else {
                this
            }

    fun incrementOldest(oldest: Long) = this.copy(oldest = oldest)

}


data class TelegramNotificationApiDetails(
        override val id: String = UUID.randomUUID().toString(),
        override val label: String,
        override val enabled: Boolean,
        val botFatherName: String,
        val token: String,
        val chatId: String,
        val offset: Int = 0
) : NotificationApiDetails(id) {
    override val type: NotificationApiType = NotificationApiType.TELEGRAM_BOT

    override fun merge(update: NotificationApiDetails) =
            if (update is TelegramNotificationApiDetails) {
                this.copy(label = update.label,
                        enabled = update.enabled,
                        token = update.token,
                        chatId = update.chatId,
                        botFatherName = update.botFatherName,
                        offset = update.offset
                )
            } else {
                this
            }
    fun incrementOffset(offset: Int)  = this.copy(offset = offset)
}

