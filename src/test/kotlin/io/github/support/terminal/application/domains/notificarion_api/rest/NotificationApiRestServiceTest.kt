package io.github.support.terminal.application.domains.notificarion_api.rest

import com.nhaarman.mockitokotlin2.*
import io.github.support.terminal.application.domains.RestApiError
import io.github.support.terminal.application.domains.bot_commands.entity.BotCommandsFactory
import io.github.support.terminal.application.domains.notificarion_api.NotificationApiTestData
import io.github.support.terminal.application.domains.notificarion_api.NotificationsApiDataSet
import io.github.support.terminal.application.domains.notificarion_api.repository.NotificationApiDetails
import io.github.support.terminal.application.domains.notificarion_api.repository.SlackNotificationApiDetails
import io.github.support.terminal.application.domains.notificarion_api.repository.TelegramNotificationApiDetails
import io.github.support.terminal.application.domains.notificarion_api.entity.NotificationApiFactory
import io.github.support.terminal.application.domains.notificarion_api.entity.NotificationApiType
import io.github.support.terminal.application.domains.workers.MonitoringTasksWorker
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.ArgumentCaptor
import org.mockito.Captor
import org.mockito.Mockito
import org.mockito.junit.jupiter.MockitoExtension
import java.util.*

@ExtendWith(MockitoExtension::class)
internal class NotificationApiRestServiceTest {

    private val notificationApiFactory: NotificationApiFactory = mock()
    private val worker: MonitoringTasksWorker = mock()

    @Captor
    private lateinit var detailsCaptor: ArgumentCaptor<NotificationApiDetails>

    private val converter = Mockito.spy(NotificationApiRestConverter())
    private val botFactory = Mockito.spy(BotCommandsFactory( mock(), mock()))

    private lateinit var restService: NotificationApiRestService

    @BeforeEach
    fun inti() {
        reset(notificationApiFactory)
        reset(botFactory)
        restService = NotificationApiRestService(notificationApiFactory, converter, botFactory, worker)
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
        Assertions.assertEquals(1, types.size)
        Assertions.assertEquals(NotificationApiType.TELEGRAM_BOT.name, types[0].type)
        Assertions.assertEquals(NotificationApiType.TELEGRAM_BOT.label, types[0].label)
    }

    @Test
    fun `delete notificationApi`() {
        val someId = UUID.randomUUID().toString()
        whenever(botFactory.byNotificationApiId(eq(someId))).thenReturn(listOf())
        whenever(notificationApiFactory.findById(eq(someId))).thenReturn(mock())
        restService.delete(someId)
        verify(notificationApiFactory, Mockito.times(1)).findById(eq(someId))
        verify(notificationApiFactory, Mockito.times(1)).delete(eq(someId))
    }

    @Test
    fun `could not delete notificationApi with dependent bot command`() {
        val someId = UUID.randomUUID().toString()
        whenever(notificationApiFactory.findById(eq(someId))).thenReturn(mock())
        whenever(botFactory.byNotificationApiId(eq(someId))).thenReturn(listOf(mock()))
        val exception: Exception = assertThrows(RestApiError::javaClass.name) {
            restService.delete(someId)
        }
        verify(notificationApiFactory, times(1)).findById(eq(someId))
        verify(notificationApiFactory, times(0)).delete(eq(someId))
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

    private fun getNotificationApi(data: NotificationApiTestData) {
        whenever(notificationApiFactory.byId(eq(data.id()))).thenReturn(data.api())
        val result = restService.get(data.id())
        Assertions.assertEquals(data.dto(), result)
    }

}
