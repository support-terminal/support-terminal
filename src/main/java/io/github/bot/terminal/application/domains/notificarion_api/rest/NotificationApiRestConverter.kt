package io.github.bot.terminal.application.domains.notificarion_api.rest

import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApiDetails
import io.github.bot.terminal.application.domains.notificarion_api.entity.SlackNotificationApiDetails
import io.github.bot.terminal.application.domains.notificarion_api.entity.TelegramNotificationApiDetails
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.NotificationApiDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.SlackNotificationApiDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.TelegramNotificationApiDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.NotificationApiRequest
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.SlackNotificationApiRequest
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.TelegramNotificationApiRequest
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType
import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Service

@Service
@RequiredArgsConstructor
class NotificationApiRestConverter {

    fun mapToDetails(request: NotificationApiRequest): NotificationApiDetails {
        if (NotificationApiType.SLACK_BOT.name == request.type) {
            return mapToDetails(request as SlackNotificationApiRequest)
        } else if (NotificationApiType.TELEGRAM_BOT.name == request.type) {
            return mapToDetails(request as TelegramNotificationApiRequest)
        }
        throw IllegalArgumentException("Unknown notification api type")
    }

    fun mapToDetails(request: SlackNotificationApiRequest) = SlackNotificationApiDetails(
            label = request.label,
            enabled = request.enabled,
            token = request.token,
            chanel = request.chanel
    )

    fun mapToDetails(request: TelegramNotificationApiRequest) = TelegramNotificationApiDetails(
            label = request.label,
            enabled = request.enabled,
            token = request.token,
            botFatherName = request.botFatherName
    )

    fun mapToDto(details: NotificationApiDetails): NotificationApiDTO {
        if (NotificationApiType.SLACK_BOT == details.type) {
            return mapToDto(details as SlackNotificationApiDetails)
        } else if (NotificationApiType.TELEGRAM_BOT == details.type) {
            return mapToDto(details as TelegramNotificationApiDetails)
        }
        throw IllegalArgumentException("Unknown notification api type")
    }

    fun mapToDto(details: SlackNotificationApiDetails) = SlackNotificationApiDTO(
            id = details.id,
            label = details.label,
            enabled = details.enabled,
            token = details.token,
            chanel = details.chanel
    )

    fun mapToDto(details: TelegramNotificationApiDetails) = TelegramNotificationApiDTO(
            id = details.id,
            label = details.label,
            enabled = details.enabled,
            token = details.token,
            botFatherName = details.botFatherName
    )

}