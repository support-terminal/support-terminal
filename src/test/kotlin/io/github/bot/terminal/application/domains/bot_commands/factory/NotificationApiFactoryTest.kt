package io.github.bot.terminal.application.domains.bot_commands.factory

import com.nhaarman.mockitokotlin2.*
import io.github.bot.terminal.application.domains.notificarion_api.NotificationApiTestData
import io.github.bot.terminal.application.domains.notificarion_api.NotificationsApiDataSet
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApiDetails
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.ArgumentCaptor
import org.mockito.Captor
import org.mockito.junit.jupiter.MockitoExtension

/*
@ExtendWith(MockitoExtension::class)
internal class NotificationApiFactoryTest {

    private lateinit var factory: NotificationApiFactory

    @Captor
    private lateinit var detailsCaptor: ArgumentCaptor<NotificationApiDetails>

    @BeforeEach
    fun init() {
        reset(NotificationsApiDataSet.repository)
        reset(NotificationsApiDataSet.slackApiClient)
        reset(NotificationsApiDataSet.telegramApiClient)
        factory = NotificationApiFactory(NotificationsApiDataSet.repository,
                NotificationsApiDataSet.slackApiClient,
                NotificationsApiDataSet.telegramApiClient)
    }

    @Test
    fun `create new slack api`() {
        createNewNotificationApi(NotificationsApiDataSet.Slack.SLACK_1)
    }

    @Test
    fun `create new telegram api`() {
        createNewNotificationApi(NotificationsApiDataSet.Telegram.TELEGRAM_1)
    }

    private fun createNewNotificationApi(data: NotificationApiTestData) {
        val api = factory.createNew(data.details())
        Assertions.assertEquals(api, data.api())

        verify(NotificationsApiDataSet.repository, times(1)).add(capture(detailsCaptor))
        Assertions.assertEquals(data.details(), detailsCaptor.value)
    }

    @Test
    fun `update slack api`() {
        updateNotificationApi(details = NotificationsApiDataSet.Slack.SLACK_1.details(),
                update = NotificationsApiDataSet.Slack.SLACK_2.details(),
                newVersion = NotificationsApiDataSet.Slack.SLACK_1_UPDATE.details(),
                updateApi = NotificationsApiDataSet.Slack.SLACK_1_UPDATE.api()
        );
    }

    @Test
    fun `update telegram api`() {
        updateNotificationApi(details = NotificationsApiDataSet.Telegram.TELEGRAM_1.details(),
                update = NotificationsApiDataSet.Telegram.TELEGRAM_2.details(),
                newVersion = NotificationsApiDataSet.Telegram.TELEGRAM_1_UPDATE.details(),
                updateApi = NotificationsApiDataSet.Telegram.TELEGRAM_1_UPDATE.api()
        );
    }

    private fun updateNotificationApi(details: NotificationApiDetails,
                                      update: NotificationApiDetails,
                                      newVersion: NotificationApiDetails,
                                      updateApi: NotificationApi) {
        whenever(NotificationsApiDataSet.repository.findById(eq(details.id)))
                .thenReturn(details)

        val updated = factory.update(details.id, update)
        Assertions.assertEquals(updateApi, updated)

        verify(NotificationsApiDataSet.repository, times(1))
                .update(capture(detailsCaptor))
        Assertions.assertEquals(newVersion, detailsCaptor.value)
    }

    @Test
    fun `get all apis`() {
        val list = listOf(
                NotificationsApiDataSet.Telegram.TELEGRAM_1.details(),
                NotificationsApiDataSet.Slack.SLACK_1.details()
        )
        whenever(NotificationsApiDataSet.repository.findAll()).thenReturn(list)

        val expectedApisList = listOf(
                NotificationsApiDataSet.Telegram.TELEGRAM_1.api(),
                NotificationsApiDataSet.Slack.SLACK_1.api()
        )
        Assertions.assertEquals(expectedApisList, factory.all())
    }

    @Test
    fun `get slack api by id`() {
        getApiById(NotificationsApiDataSet.Slack.SLACK_1)
    }

    @Test
    fun `get telegram api by id`() {
        getApiById(NotificationsApiDataSet.Slack.SLACK_1)
    }

    private fun getApiById(data: NotificationApiTestData) {
        whenever(NotificationsApiDataSet.repository.findById(eq(data.id()))).thenReturn(data.details())
        Assertions.assertEquals(data.api(), factory.byId(data.id()))
    }

    @Test
    fun byIdNotFound() {
        whenever(NotificationsApiDataSet.repository.findById(any())).thenReturn(null)
        Assertions.assertThrows(IllegalArgumentException::class.java) { factory.byId("some-id") }
    }
}
*/