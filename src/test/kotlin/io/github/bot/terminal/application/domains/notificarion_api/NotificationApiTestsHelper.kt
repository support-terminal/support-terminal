package io.github.bot.terminal.application.domains.notificarion_api

import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.NotificationApiDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.NotificationApiTypeDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.SlackNotificationApiDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.TelegramNotificationApiDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.NotificationApiRequest
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.SlackNotificationApiRequest
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.TelegramNotificationApiRequest
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType


val slackTypeDto = NotificationApiTypeDTO(NotificationApiType.SLACK_BOT.label, NotificationApiType.SLACK_BOT.name)


interface NotificationApiTestData {
    val dto: NotificationApiDTO
    val request: NotificationApiRequest
    val id: String
}

object NotificationsApiDataSet {

    enum class Slack(override val id: String, val label: String, val token: String, val chanel: String, var enabled: Boolean = true): NotificationApiTestData {
        SLACK_1("00001", "xoxp-704335736838-695846982081-753728717394",
                "token1", "chanel1"),

        SLACK_2("00002", "xoxp-10000000-695846982081-753728717394", "token2",
        "chanel2");

        override val dto = SlackNotificationApiDTO(
                id = id,
                label = label,
                enabled = enabled,
                token = token,
                chanel = chanel
        )

        override val request = SlackNotificationApiRequest(
                label = label,
                enabled = enabled,
                token = token,
                chanel = chanel
        )

    }

    enum class Telegram(override val id: String, val label: String, val token: String, val botFatherName: String, var enabled: Boolean = true):NotificationApiTestData {
        TELEGRAM_1("00001", "xoxp-704335736838-695846982081-753728717394",
                "token1", "botFatherName1"),

        TELEGRAM_2("00002", "xoxp-10000000-695846982081-753728717394", "token2",
                "botFatherName2");

        override val dto = TelegramNotificationApiDTO(
                id = id,
                label = label,
                enabled = enabled,
                token = token,
                botFatherName = botFatherName
        )

        override val request = TelegramNotificationApiRequest(
                label = label,
                enabled = enabled,
                token = token,
                botFatherName = botFatherName
        )

    }


}
