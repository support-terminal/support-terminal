package io.github.support.terminal.application.domains.notificarion_api.entity

enum class NotificationApiType(val label: String) {
    TELEGRAM_BOT("Telegram Bot API"),
    SLACK_BOT("Slack Bot API");

    interface Constants {
        companion object {
            const val TELEGRAM_BOT = "TELEGRAM_BOT"
            const val SLACK_BOT = "SLACK_BOT"
        }
    }

}