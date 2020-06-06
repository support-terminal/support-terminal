package io.github.bot.terminal.application.domains.notificarion_api.rest.dto

import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType

abstract class NotificationApiDTO(val type: String)

data class SlackNotificationApiDTO(
        val id: String,
        val label: String,
        val enabled: Boolean,
        val token: String,
        val chanel: String
) : NotificationApiDTO(NotificationApiType.Constants.SLACK_BOT)

data class TelegramNotificationApiDTO(
        val id: String,
        val label: String,
        val enabled: Boolean,
        val token: String,
        val botFatherName: String
) : NotificationApiDTO(NotificationApiType.Constants.TELEGRAM_BOT)