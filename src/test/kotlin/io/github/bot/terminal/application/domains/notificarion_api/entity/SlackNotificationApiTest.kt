/*
package io.github.bot.terminal.application.domains.notificarion_api.entity

import io.github.bot.terminal.application.domains.integrations.slack.SlackApiClient
import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiState
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.ArgumentMatchers
import org.mockito.Mock
import org.mockito.Mockito
import org.mockito.junit.jupiter.MockitoExtension

@ExtendWith(MockitoExtension::class)
internal class SlackNotificationApiTest {
    @Mock
    private val repository: NotificationApiRepository? = null

    @Mock
    private val client: SlackApiClient? = null
    private val id = "id"
    private val label = "label"
    private val state: NotificationApiState = NotificationApiState.ENABLED
    private val chanel = "chanel-name"
    private val token = "token"

    @Test
    fun deleteSlackApi() {
        val details = SlackNotificationApiDetails()
        details.setId(id)
        details.label = label
        details.setType(NotificationApiType.SLACK_BOT)
        details.setState(state)
        details.chanel = chanel
        details.token = token
        val api1: NotificationApi = SlackNotificationApi(details, repository!!, client!!)
        api1.delete()
        Mockito.verify(repository, Mockito.times(1))!!.deleteById(ArgumentMatchers.eq(id))
    }
}*/
