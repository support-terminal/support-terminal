package io.github.bot.terminal.application.domains.notificarion_api.rest.requests

import com.fasterxml.jackson.annotation.JsonSubTypes
import com.fasterxml.jackson.annotation.JsonTypeInfo
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType
import lombok.Data
import lombok.experimental.Accessors
import javax.validation.constraints.NotBlank

@Data
@Accessors(chain = true)
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "type", visible = true)
@JsonSubTypes(
        JsonSubTypes.Type(value = SlackNotificationApiRequest::class,
                name = NotificationApiType.Constants.SLACK_BOT),
        JsonSubTypes.Type(value = TelegramNotificationApiRequest::class,
                name = NotificationApiType.Constants.TELEGRAM_BOT)
)
interface NotificationApiRequest{
    val type: String
    val enabled: Boolean
}

data class SlackNotificationApiRequest(
        val label: @NotBlank String,
        override val type: String = NotificationApiType.Constants.SLACK_BOT,
        override val enabled: Boolean = true,
        val token: @NotBlank String,
        val chanel: @NotBlank String
) : NotificationApiRequest

data class TelegramNotificationApiRequest(
        val label: @NotBlank String,
        override val type: String = NotificationApiType.Constants.TELEGRAM_BOT,
        override val enabled: Boolean = true,
        val botFatherName: @NotBlank String,
        val token: @NotBlank String
) : NotificationApiRequest