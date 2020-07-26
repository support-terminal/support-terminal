package io.github.bot.terminal.application.domains.common.notify.requests

data class NotifyRequest(
        var notificationApiId: String,
        var messageTemplate: String
)