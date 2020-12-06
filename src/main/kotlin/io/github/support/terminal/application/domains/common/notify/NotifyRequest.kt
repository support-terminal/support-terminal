package io.github.support.terminal.application.domains.common.notify

data class NotifyRequest(
        var notificationApiId: String,
        var messageTemplate: String
)