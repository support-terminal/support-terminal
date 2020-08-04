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
import java.util.*


val slackTypeDto = NotificationApiTypeDTO(NotificationApiType.SLACK_BOT.label, NotificationApiType.SLACK_BOT.name)


interface NotificationApiTestData {
    fun dto(): NotificationApiDTO
    fun request(): NotificationApiRequest
    fun details(): NotificationApiDetails
    fun api(): NotificationApi
    fun id(): String
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

    enum class Slack(val id: String, val label: String, val token: String, val chanel: String, var enabled: Boolean = true) : NotificationApiTestData {
        SLACK_1("S0001", "S_label1", "token1", "chanel1"),
        SLACK_2("S0002", "S_label2", "token2", "chanel2", false),
        SLACK_1_UPDATE("S0001", "S_label2", "token2", "chanel2", false);

        override fun id() = id

        override fun dto() = SlackNotificationApiDTO(
                id = id,
                label = label,
                enabled = enabled,
                token = token,
                chanel = chanel
        )

        override fun details() = SlackNotificationApiDetails(
                id = id,
                label = label,
                enabled = enabled,
                token = token,
                chanel = chanel
        )

        override fun api() = SlackNotificationApi(details(), repository, slackApiClient)

        override fun request() = SlackNotificationApiRequest(
                label = label,
                enabled = enabled,
                token = token,
                chanel = chanel
        )

    }

    enum class Telegram(val id: String, val label: String, val token: String, val botFatherName: String, var enabled: Boolean = true) : NotificationApiTestData {
        TELEGRAM_1("T0001", "T_label1", "token1", "botFatherName1"),
        TELEGRAM_2("T0002", "T_label2", "token2", "botFatherName2"),
        TELEGRAM_1_UPDATE("T0001", "T_label2", "token2", "botFatherName2");

        override fun id() = id

        override fun dto() = TelegramNotificationApiDTO(
                id = id,
                label = label,
                enabled = enabled,
                token = token,
                botFatherName = botFatherName
        )

        override fun details() = TelegramNotificationApiDetails(
                id = id,
                label = label,
                enabled = enabled,
                token = token,
                botFatherName = botFatherName
        )

        override fun api() = TelegramNotificationApi(details(), repository, telegramApiClient)

        override fun request() = TelegramNotificationApiRequest(
                label = label,
                enabled = enabled,
                token = token,
                botFatherName = botFatherName
        )

    }

}
