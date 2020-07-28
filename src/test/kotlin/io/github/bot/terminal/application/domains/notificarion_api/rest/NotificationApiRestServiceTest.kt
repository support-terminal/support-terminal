package io.github.bot.terminal.application.domains.notificarion_api.rest

import com.nhaarman.mockitokotlin2.*
import io.github.bot.terminal.application.domains.integrations.slack.SlackApiClient
import io.github.bot.terminal.application.domains.integrations.telegram.TelegramApiClient
import io.github.bot.terminal.application.domains.notificarion_api.NotificationApiTestData
import io.github.bot.terminal.application.domains.notificarion_api.NotificationsApiDataSet
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApiDetails
import io.github.bot.terminal.application.domains.notificarion_api.factory.NotificationApiFactory
import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.NotificationApiDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.SlackNotificationApiDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.TelegramNotificationApiDTO
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.ArgumentCaptor
import org.mockito.Captor
import org.mockito.Mock
import org.mockito.Mockito
import org.mockito.junit.jupiter.MockitoExtension
import java.util.function.Consumer

@ExtendWith(MockitoExtension::class)
internal class NotificationApiRestServiceTest {

    @Mock
    private lateinit var notificationApiFactory: NotificationApiFactory

    @Mock
    private lateinit var repository: NotificationApiRepository

    @Mock
    private lateinit var telegramApiClient: TelegramApiClient

    @Mock
    private lateinit var slackApiClient: SlackApiClient

    @Captor
    private lateinit var detailsCaptor: ArgumentCaptor<NotificationApiDetails>

    private val converter = Mockito.spy(NotificationApiRestConverter())

    private lateinit var restService: NotificationApiRestService

    @BeforeEach
    fun inti() {
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
        addNewNotificationApi(NotificationsApiDataSet.Slack.SLACK_1)
    }

    @Test
    fun `add new telegram notificationApi`() {
        addNewNotificationApi(NotificationsApiDataSet.Telegram.TELEGRAM_1)
    }

    private fun addNewNotificationApi(data: NotificationApiTestData) {
        whenever(notificationApiFactory.createNew(any()))
                .thenReturn(data.api)

        val dto = restService.add(data.request)
        Assertions.assertEquals(data.dto, dto)

        verify(notificationApiFactory, times(1)).createNew(capture(detailsCaptor))
        Assertions.assertEquals(data.details, detailsCaptor.value)
    }

    @Test
    fun `edit slack notificationApi`() {
        editNotificationApi(NotificationsApiDataSet.Slack.SLACK_1,
                NotificationsApiDataSet.Slack.SLACK_2){
            val dto =  it as SlackNotificationApiDTO
            val data = NotificationsApiDataSet.Slack.SLACK_1
            val update = NotificationsApiDataSet.Slack.SLACK_2
            Assertions.assertEquals(dto.id, data.id)
            Assertions.assertEquals(dto.label, update.label)
            Assertions.assertEquals(dto.enabled, data.enabled)
            Assertions.assertEquals(dto.token, data.token)
            Assertions.assertEquals(dto.chanel, data.chanel)
        }
    }

    @Test
    fun `edit telegram notificationApi`() {
        editNotificationApi(NotificationsApiDataSet.Telegram.TELEGRAM_1,
                NotificationsApiDataSet.Telegram.TELEGRAM_2){
            val dto =  it as TelegramNotificationApiDTO
            val data = NotificationsApiDataSet.Telegram.TELEGRAM_1
            val update = NotificationsApiDataSet.Telegram.TELEGRAM_1
            Assertions.assertEquals(dto.id, data.id)
            Assertions.assertEquals(dto.label, update.label)
            Assertions.assertEquals(dto.enabled, update.enabled)
            Assertions.assertEquals(dto.token, update.token)
            Assertions.assertEquals(dto.botFatherName, update.botFatherName)
        }
    }

    private fun editNotificationApi(data: NotificationApiTestData, update: NotificationApiTestData, consumer: (NotificationApiDTO) -> Unit) {
        whenever(notificationApiFactory.update(any(), any()))
                .thenReturn(update.api)
        val dto = restService.edit(data.id, update.request)
        consumer(dto)
        data.details.merge(update.details)
        verify(notificationApiFactory, times(1)).update(eq(data.id), capture(detailsCaptor))
        Assertions.assertEquals(data.details, detailsCaptor.value)
    }



    /*



    @get:Test
    val slackNotificationApi: Unit
        get() {
            val details = SlackNotificationApiDetails()
            details.setId(id)
            details.label = label
            details.setType(NotificationApiType.SLACK_BOT)
            details.setState(state)
            details.chanel = chanel
            details.token = token
            val api: NotificationApi = SlackNotificationApi(details, repository!!, slackApiClient!!)
            Mockito.`when`(notificationApiFactory!!.byId(ArgumentMatchers.eq(id)))
                    .thenReturn(api)
            val apiDTO = restService!![id] as SlackNotificationApiDTO
            Assertions.assertEquals(id, apiDTO.id)
            Assertions.assertEquals(label, apiDTO.label)
            assertEquals(state.name(), apiDTO.getState())
            Assertions.assertEquals(token, apiDTO.token)
            Assertions.assertEquals(chanel, apiDTO.chanel)
            Assertions.assertEquals(NotificationApiType.SLACK_BOT.name, apiDTO.type)
        }


    @Test
    fun editTelegramNotificationApi() {
        val details = TelegramNotificationApiDetails()
        details.setId(id)
        details.label = label2
        details.setType(NotificationApiType.TELEGRAM_BOT)
        details.setState(state2)
        details.botFatherName = botFatherName2
        details.token = token2
        val api: NotificationApi = TelegramNotificationApi(details, repository!!, telegramApiClient!!)
        Mockito.`when`(notificationApiFactory.merge(ArgumentMatchers.anyString(), ArgumentMatchers.any()))
                .thenReturn(api)
        val request = TelegramNotificationApiRequest()
        request.setLabel(label2)
        request.setToken(token2)
        request.setBotFatherName(botFatherName2)
        request.setState(state2.name())
        val apiDTO = restService!!.edit(id, request) as TelegramNotificationApiDTO
        Assertions.assertEquals(id, apiDTO.id)
        Assertions.assertEquals(label2, apiDTO.label)
        assertEquals(state2.name(), apiDTO.getState())
        Assertions.assertEquals(token2, apiDTO.token)
        Assertions.assertEquals(botFatherName2, apiDTO.botFatherName)
        Assertions.assertEquals(NotificationApiType.TELEGRAM_BOT.name, apiDTO.type)
        Mockito.verify(notificationApiFactory, Mockito.times(1)).merge(ArgumentMatchers.eq(id), telegramDetailsCaptor!!.capture())
        val convertedDetails = telegramDetailsCaptor!!.value
        Assertions.assertEquals(label2, convertedDetails.label)
        assertEquals(state2, convertedDetails.getState())
        Assertions.assertEquals(token2, convertedDetails.token)
        Assertions.assertEquals(botFatherName2, convertedDetails.botFatherName)
        Assertions.assertEquals(NotificationApiType.TELEGRAM_BOT, convertedDetails.type)
    }

    @get:Test
    val telegramNotificationApi: Unit
        get() {
            val details = TelegramNotificationApiDetails()
            details.setId(id)
            details.label = label
            details.setType(NotificationApiType.TELEGRAM_BOT)
            details.setState(state)
            details.botFatherName = botFatherName
            details.token = token
            val api: NotificationApi = TelegramNotificationApi(details, repository!!, telegramApiClient!!)
            Mockito.`when`(notificationApiFactory!!.byId(ArgumentMatchers.eq(id)))
                    .thenReturn(api)
            val apiDTO = restService!![id] as TelegramNotificationApiDTO
            Assertions.assertEquals(id, apiDTO.id)
            Assertions.assertEquals(label, apiDTO.label)
            assertEquals(state.name(), apiDTO.getState())
            Assertions.assertEquals(token, apiDTO.token)
            Assertions.assertEquals(botFatherName, apiDTO.botFatherName)
            Assertions.assertEquals(NotificationApiType.TELEGRAM_BOT.name, apiDTO.type)
        }

    @Test
    fun deleteNotificationApi() {
        val api = Mockito.mock(NotificationApi::class.java)
        Mockito.`when`(notificationApiFactory!!.byId(ArgumentMatchers.eq(id)))
                .thenReturn(api)
        restService!!.delete(id)
        Mockito.verify(api, Mockito.timeout(1)).delete()
    }

    @get:Test
    val allNotificationApi: Unit
        get() {
            val details = SlackNotificationApiDetails()
            details.setId(id)
            details.label = label
            details.setType(NotificationApiType.SLACK_BOT)
            details.setState(state)
            details.chanel = chanel
            details.token = token
            val api1: NotificationApi = SlackNotificationApi(details, repository!!, slackApiClient!!)
            val details2 = TelegramNotificationApiDetails()
            details2.setId(id2)
            details2.label = label2
            details2.setType(NotificationApiType.TELEGRAM_BOT)
            details2.setState(state2)
            details2.botFatherName = botFatherName2
            details2.token = token2
            val api2: NotificationApi = TelegramNotificationApi(details2, repository, telegramApiClient!!)
            val c: MutableList<NotificationApi<*>?> = ArrayList<Any?>()
            c.add(api1)
            c.add(api2)
            Mockito.`when`<List<NotificationApi?>>(notificationApiFactory!!.getAll())
                    .thenReturn(c)
            val list = restService!!.list()
            val apiDTO = list[0] as SlackNotificationApiDTO
            Assertions.assertEquals(id, apiDTO.id)
            Assertions.assertEquals(label, apiDTO.label)
            assertEquals(state.name(), apiDTO.getState())
            Assertions.assertEquals(token, apiDTO.token)
            Assertions.assertEquals(chanel, apiDTO.chanel)
            Assertions.assertEquals(NotificationApiType.SLACK_BOT.name, apiDTO.type)
            val apiDTO2 = list[1] as TelegramNotificationApiDTO
            Assertions.assertEquals(id2, apiDTO2.id)
            Assertions.assertEquals(label2, apiDTO2.label)
            assertEquals(state2.name(), apiDTO2.getState())
            Assertions.assertEquals(token2, apiDTO2.token)
            Assertions.assertEquals(botFatherName2, apiDTO2.botFatherName)
            Assertions.assertEquals(NotificationApiType.TELEGRAM_BOT.name, apiDTO2.type)
        }

    @get:Test
    val types: Unit
        get() {
            val types = restService!!.types()
            Assertions.assertEquals(2, types.size)
            Assertions.assertEquals(NotificationApiType.TELEGRAM_BOT.name, types[0].type)
            Assertions.assertEquals(NotificationApiType.TELEGRAM_BOT.label, types[0].label)
            Assertions.assertEquals(NotificationApiType.SLACK_BOT.name, types[1].type)
            Assertions.assertEquals(NotificationApiType.SLACK_BOT.label, types[1].label)
        }*/
}

