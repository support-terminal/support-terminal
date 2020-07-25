package io.github.bot.terminal.application.domains.common.notify.dto

open class NotifyDTO(
        open val notificationApiId: String,
        open val messageTemplate: String
)

data class NotifySlackBotDTO(
        val botId: String,
        override val notificationApiId: String,
        override val messageTemplate: String
) : NotifyDTO(notificationApiId, messageTemplate)