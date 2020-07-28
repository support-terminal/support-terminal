package io.github.bot.terminal.application.domains.notificarion_api

import com.nhaarman.mockitokotlin2.mock
import io.github.bot.terminal.application.domains.integrations.slack.SlackApiClient
import io.github.bot.terminal.application.domains.integrations.telegram.TelegramApiClient
import io.github.bot.terminal.application.domains.notificarion_api.entity.*
import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.NotificationApiDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.NotificationApiTypeDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.SlackNotificationApiDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.TelegramNotificationApiDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.NotificationApiRequest
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.SlackNotificationApiRequest
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.TelegramNotificationApiRequest
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType
import org.mockito.Mock
import java.util.*


val slackTypeDto = NotificationApiTypeDTO(NotificationApiType.SLACK_BOT.label, NotificationApiType.SLACK_BOT.name)


interface NotificationApiTestData {
    val dto: NotificationApiDTO
    val request: NotificationApiRequest
    val details: NotificationApiDetails
    val api: NotificationApi
    val id: String
}

object NotificationsApiDataSet {

    val repository: NotificationApiRepository = mock()
    val telegramApiClient: TelegramApiClient = mock()
    val slackApiClient: SlackApiClient = mock()

    enum class Wrong(val id: String, val label: String, val token: String, val chanel: String, var enabled: Boolean = true) {
        WRONG_1("W00001", UUID.randomUUID().toString(), "token1", "chanel1");

        val request = SlackNotificationApiRequest(
                label = label,
                enabled = enabled,
                type = "SomeType",
                token = token,
                chanel = chanel
        )

    }

    enum class Slack(override val id: String, val label: String, val token: String, val chanel: String, var enabled: Boolean = true) : NotificationApiTestData {
        SLACK_1("00001", UUID.randomUUID().toString(), "token1", "chanel1"),
        SLACK_2("00002", UUID.randomUUID().toString(), "token2", "chanel2");

        override val dto = SlackNotificationApiDTO(
                id = id,
                label = label,
                enabled = enabled,
                token = token,
                chanel = chanel
        )

        override val details = SlackNotificationApiDetails(
                id = id,
                label = label,
                enabled = enabled,
                token = token,
                chanel = chanel
        )

        override val api = SlackNotificationApi(details, repository, slackApiClient)

        override val request = SlackNotificationApiRequest(
                label = label,
                enabled = enabled,
                token = token,
                chanel = chanel
        )

    }

    enum class Telegram(override val id: String, val label: String, val token: String, val botFatherName: String, var enabled: Boolean = true) : NotificationApiTestData {
        TELEGRAM_1("00001", UUID.randomUUID().toString(), "token1", "botFatherName1"),
        TELEGRAM_2("00002", UUID.randomUUID().toString(), "token2", "botFatherName2");

        override val dto = TelegramNotificationApiDTO(
                id = id,
                label = label,
                enabled = enabled,
                token = token,
                botFatherName = botFatherName
        )

        override val details = TelegramNotificationApiDetails(
                id = id,
                label = label,
                enabled = enabled,
                token = token,
                botFatherName = botFatherName
        )

        override val api = TelegramNotificationApi(details, repository, telegramApiClient)

        override val request = TelegramNotificationApiRequest(
                label = label,
                enabled = enabled,
                token = token,
                botFatherName = botFatherName
        )

    }


}
