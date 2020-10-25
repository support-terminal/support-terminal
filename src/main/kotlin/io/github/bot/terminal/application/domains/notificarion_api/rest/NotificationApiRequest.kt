package io.github.bot.terminal.application.domains.notificarion_api.rest

import com.fasterxml.jackson.annotation.JsonSubTypes
import com.fasterxml.jackson.annotation.JsonTypeInfo
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType.Constants.Companion.SLACK_BOT
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType.Constants.Companion.TELEGRAM_BOT
import javax.validation.constraints.NotBlank

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.EXISTING_PROPERTY, property = "type")
@JsonSubTypes(
        JsonSubTypes.Type(value = SlackNotificationApiRequest::class, name = SLACK_BOT),
        JsonSubTypes.Type(value = TelegramNotificationApiRequest::class, name = TELEGRAM_BOT)
)
sealed class NotificationApiRequest {
    abstract val type: String
    abstract val enabled: Boolean
}

data class SlackNotificationApiRequest(
        val label: @NotBlank String,
        val token: @NotBlank String,
        val chanel: @NotBlank String,
        override val type: @NotBlank String = SLACK_BOT,
        override val enabled: Boolean = true
) : NotificationApiRequest()

data class TelegramNotificationApiRequest(
        val label: @NotBlank String,
        val botFatherName: @NotBlank String,
        val token: @NotBlank String,
        val chatId: @NotBlank String,
        override val type: @NotBlank String = TELEGRAM_BOT,
        override val enabled: Boolean = true
) : NotificationApiRequest()