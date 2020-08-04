package io.github.bot.terminal.application.domains.notificarion_api.rest

import com.nhaarman.mockitokotlin2.*
import io.github.bot.terminal.application.domains.notificarion_api.NotificationApiTestData
import io.github.bot.terminal.application.domains.notificarion_api.NotificationsApiDataSet
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApiDetails
import io.github.bot.terminal.application.domains.notificarion_api.entity.SlackNotificationApiDetails
import io.github.bot.terminal.application.domains.notificarion_api.entity.TelegramNotificationApiDetails
import io.github.bot.terminal.application.domains.notificarion_api.factory.NotificationApiFactory
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.NotificationApiDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.SlackNotificationApiDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.TelegramNotificationApiDTO
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.ArgumentCaptor
import org.mockito.Captor
import org.mockito.Mock
import org.mockito.Mockito
import org.mockito.junit.jupiter.MockitoExtension

@ExtendWith(MockitoExtension::class)
internal class NotificationApiRestServiceTest {

    private val notificationApiFactory: NotificationApiFactory = mock()

    @Captor
    private lateinit var detailsCaptor: ArgumentCaptor<NotificationApiDetails>

    private val converter = Mockito.spy(NotificationApiRestConverter())

    private lateinit var restService: NotificationApiRestService

    @BeforeEach
    fun inti() {
        reset(notificationApiFactory)
        restService = NotificationApiRestService(notificationApiFactory, converter)
    }

    @Test
    fun addUnknownNotificationApi() {
        Assertions.assertThrows(IllegalArgumentException::class.java) {
            restService.add(NotificationsApiDataSet.Wrong.WRONG_1.request)
        }
    }

    @Test
    fun `add new slack notificationApi`() {
        addNewNotificationApi(NotificationsApiDataSet.Slack.SLACK_1,
                {
                    val dto = it as SlackNotificationApiDTO
                    val data = NotificationsApiDataSet.Slack.SLACK_1
                    Assertions.assertEquals(data.id, dto.id)
                    Assertions.assertEquals(data.label, dto.label)
                    Assertions.assertEquals(data.enabled, dto.enabled)
                    Assertions.assertEquals(data.token, dto.token)
                    Assertions.assertEquals(data.chanel, dto.chanel)
                },
                {
                    val details = it as SlackNotificationApiDetails
                    val data = NotificationsApiDataSet.Slack.SLACK_1
                    Assertions.assertEquals(data.label, details.label)
                    Assertions.assertEquals(data.enabled, details.enabled)
                    Assertions.assertEquals(data.token, details.token)
                    Assertions.assertEquals(data.chanel, details.chanel)
                }
        )
    }

    @Test
    fun `add new telegram notificationApi`() {
        addNewNotificationApi(NotificationsApiDataSet.Telegram.TELEGRAM_1,
                {
                    val dto = it as TelegramNotificationApiDTO
                    val data = NotificationsApiDataSet.Telegram.TELEGRAM_1
                    Assertions.assertEquals(dto.id, data.id)
                    Assertions.assertEquals(dto.label, data.label)
                    Assertions.assertEquals(dto.enabled, data.enabled)
                    Assertions.assertEquals(dto.token, data.token)
                    Assertions.assertEquals(dto.botFatherName, data.botFatherName)
                },
                {
                    val details = it as TelegramNotificationApiDetails
                    val data = NotificationsApiDataSet.Telegram.TELEGRAM_1
                    Assertions.assertEquals(data.label, details.label)
                    Assertions.assertEquals(data.enabled, details.enabled)
                    Assertions.assertEquals(data.token, details.token)
                    Assertions.assertEquals(data.botFatherName, details.botFatherName)
                }
        )
    }

    private fun addNewNotificationApi(data: NotificationApiTestData,
                                      compareDto: (NotificationApiDTO) -> Unit,
                                      compareDetails: (NotificationApiDetails) -> Unit) {
        whenever(notificationApiFactory.createNew(any()))
                .thenReturn(data.api())

        val dto = restService.add(data.request())
        compareDto(dto)

        verify(notificationApiFactory, times(1)).createNew(capture(detailsCaptor))
        compareDetails(detailsCaptor.value)
    }

    @Test
    fun `edit slack notificationApi`() {
        editNotificationApi(NotificationsApiDataSet.Slack.SLACK_1,
                NotificationsApiDataSet.Slack.SLACK_1_UPDATE,
                {
                    val dto = it as SlackNotificationApiDTO
                    val update = NotificationsApiDataSet.Slack.SLACK_1_UPDATE
                    Assertions.assertEquals(update.id, dto.id)
                    Assertions.assertEquals(update.label, dto.label)
                    Assertions.assertEquals(update.enabled, dto.enabled)
                    Assertions.assertEquals(update.token, dto.token)
                    Assertions.assertEquals(update.chanel, dto.chanel)
                },
                {
                    val details = it as SlackNotificationApiDetails
                    val updateDetails = NotificationsApiDataSet.Slack.SLACK_1_UPDATE.details()
                    Assertions.assertEquals(updateDetails.label, details.label)
                    Assertions.assertEquals(updateDetails.enabled, details.enabled)
                    Assertions.assertEquals(updateDetails.token, details.token)
                    Assertions.assertEquals(updateDetails.chanel, details.chanel)
                }
        )
    }

    @Test
    fun `edit telegram notificationApi`() {
        editNotificationApi(NotificationsApiDataSet.Telegram.TELEGRAM_1,
                NotificationsApiDataSet.Telegram.TELEGRAM_1_UPDATE,
                {
                    val dto = it as TelegramNotificationApiDTO
                    val update = NotificationsApiDataSet.Telegram.TELEGRAM_1_UPDATE
                    Assertions.assertEquals(dto.id, update.id)
                    Assertions.assertEquals(dto.label, update.label)
                    Assertions.assertEquals(dto.enabled, update.enabled)
                    Assertions.assertEquals(dto.token, update.token)
                    Assertions.assertEquals(dto.botFatherName, update.botFatherName)
                }, {
            val details = it as TelegramNotificationApiDetails
            val updateDetails = NotificationsApiDataSet.Telegram.TELEGRAM_1_UPDATE.details()
            Assertions.assertEquals(updateDetails.label, details.label)
            Assertions.assertEquals(updateDetails.enabled, details.enabled)
            Assertions.assertEquals(updateDetails.token, details.token)
            Assertions.assertEquals(updateDetails.botFatherName, details.botFatherName)
        })
    }

    private fun editNotificationApi(data: NotificationApiTestData, update: NotificationApiTestData,
                                    compareDto: (NotificationApiDTO) -> Unit,
                                    compareDetails: (NotificationApiDetails) -> Unit) {
        whenever(notificationApiFactory.update(any(), any()))
                .thenReturn(update.api())
        val dto = restService.edit(data.id(), update.request())
        compareDto(dto)
        verify(notificationApiFactory, times(1)).update(eq(data.id()), capture(detailsCaptor))
        compareDetails(detailsCaptor.value)
    }

    @Test
    fun `get notificationApi types`() {
        val types = restService.types()
        Assertions.assertEquals(2, types.size)
        Assertions.assertEquals(NotificationApiType.TELEGRAM_BOT.name, types[0].type)
        Assertions.assertEquals(NotificationApiType.TELEGRAM_BOT.label, types[0].label)
        Assertions.assertEquals(NotificationApiType.SLACK_BOT.name, types[1].type)
        Assertions.assertEquals(NotificationApiType.SLACK_BOT.label, types[1].label)
    }

    @Test
    fun `delete notificationApi`() {
        restService.delete(NotificationsApiDataSet.Slack.SLACK_1.id)
        verify(notificationApiFactory, Mockito.timeout(1)).delete(eq(NotificationsApiDataSet.Slack.SLACK_1.id))
    }

    @Test
    fun `get all notificationApi`() {
        val apiList = listOf(
                NotificationsApiDataSet.Slack.SLACK_1.api(),
                NotificationsApiDataSet.Telegram.TELEGRAM_1.api()
        )
        whenever(notificationApiFactory.all()).thenReturn(apiList)

        val dtoList = listOf(
                NotificationsApiDataSet.Slack.SLACK_1.dto(),
                NotificationsApiDataSet.Telegram.TELEGRAM_1.dto()
        )
        val resultList = restService.list()
        Assertions.assertEquals(dtoList, resultList)
    }

    @Test
    fun `get slack notificationApi`() {
        getNotificationApi(NotificationsApiDataSet.Slack.SLACK_1)
    }

    @Test
    fun `get telegram notificationApi`() {
        getNotificationApi(NotificationsApiDataSet.Telegram.TELEGRAM_1)
    }

    fun getNotificationApi(data: NotificationApiTestData) {
        whenever(notificationApiFactory.byId(eq(data.id()))).thenReturn(data.api())
        val result = restService.get(data.id())
        Assertions.assertEquals(data.dto(), result)
    }

}
