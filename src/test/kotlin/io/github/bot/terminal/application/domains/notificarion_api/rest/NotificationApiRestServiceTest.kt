/*
package io.github.bot.terminal.application.domains.notificarion_api.rest

import io.github.bot.terminal.application.domains.integrations.slack.SlackApiClient
import io.github.bot.terminal.application.domains.integrations.telegram.TelegramApiClient
import io.github.bot.terminal.application.domains.notificarion_api.entity.*
import io.github.bot.terminal.application.domains.notificarion_api.factory.NotificationApiFactory
import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.SlackNotificationApiDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.TelegramNotificationApiDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.SlackNotificationApiRequest
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.TelegramNotificationApiRequest
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiState
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.*
import org.mockito.junit.jupiter.MockitoExtension
import java.util.*

@ExtendWith(MockitoExtension::class)
internal class NotificationApiRestServiceTest {
    @Mock
    private val notificationApiFactory: NotificationApiFactory? = null

    @Mock
    private val repository: NotificationApiRepository? = null

    @Mock
    private val telegramApiClient: TelegramApiClient? = null

    @Mock
    private val slackApiClient: SlackApiClient? = null
    private val converter = Mockito.spy(NotificationApiRestConverter())
    private var restService: NotificationApiRestService? = null

    @Captor
    var slackDetailsCaptor: ArgumentCaptor<SlackNotificationApiDetails>? = null

    @Captor
    var telegramDetailsCaptor: ArgumentCaptor<TelegramNotificationApiDetails>? = null
    private val id = "id"
    private val label = "label"
    private val state: NotificationApiState = NotificationApiState.ENABLED
    private val chanel = "chanel-name"
    private val botFatherName = "botFatherName-name"
    private val token = "token"
    private val id2 = "id2"
    private val label2 = "label"
    private val state2: NotificationApiState = NotificationApiState.DISABLED
    private val chanel2 = "chanel-name2"
    private val botFatherName2 = "botFatherName-name2"
    private val token2 = "token2"

    @BeforeEach
    fun inti() {
        restService = NotificationApiRestService(notificationApiFactory, converter)
    }

    @Test
    fun addUnknownNotificationApi() {
        val request = SlackNotificationApiRequest()
        request.setLabel(label)
        request.setType("SomeType")
        request.setToken(token)
        request.setChanel(chanel)
        request.setState(state.name())
        Assertions.assertThrows(IllegalArgumentException::class.java
        ) { restService!!.add(request) }
    }

    @Test
    fun mapFromUnknownNotificationApiType() {
        val details = SlackNotificationApiDetails()
        details.setId(id)
        details.label = label
        details.setType(null)
        details.setState(state)
        details.chanel = chanel
        details.token = token
        val api: NotificationApi = SlackNotificationApi(details, repository!!, slackApiClient!!)
        Mockito.`when`(notificationApiFactory.createNew(ArgumentMatchers.any()))
                .thenReturn(api)
        val request = SlackNotificationApiRequest()
        request.setLabel(label)
        request.setToken(token)
        request.setChanel(chanel)
        request.setState(state.name())
        Assertions.assertThrows(IllegalArgumentException::class.java
        ) { restService!!.add(request) }
    }

    @Test
    fun addNewSlackNotificationApi() {
        val details = SlackNotificationApiDetails()
        details.setId(id)
        details.label = label
        details.setType(NotificationApiType.SLACK_BOT)
        details.setState(state)
        details.chanel = chanel
        details.token = token
        val api: NotificationApi = SlackNotificationApi(details, repository!!, slackApiClient!!)
        Mockito.`when`(notificationApiFactory.createNew(ArgumentMatchers.any()))
                .thenReturn(api)
        val request = SlackNotificationApiRequest()
        request.setLabel(label)
        request.setToken(token)
        request.setChanel(chanel)
        request.setState(state.name())
        val apiDTO = restService!!.add(request) as SlackNotificationApiDTO
        Assertions.assertEquals(id, apiDTO.id)
        Assertions.assertEquals(label, apiDTO.label)
        assertEquals(state.name(), apiDTO.getState())
        Assertions.assertEquals(token, apiDTO.token)
        Assertions.assertEquals(chanel, apiDTO.chanel)
        Assertions.assertEquals(NotificationApiType.SLACK_BOT.name, apiDTO.type)
        Mockito.verify(notificationApiFactory, Mockito.times(1)).createNew(slackDetailsCaptor!!.capture())
        val convertedDetails = slackDetailsCaptor!!.value
        Assertions.assertEquals(label, convertedDetails.label)
        assertEquals(state, convertedDetails.getState())
        Assertions.assertEquals(token, convertedDetails.token)
        Assertions.assertEquals(chanel, convertedDetails.chanel)
        Assertions.assertEquals(NotificationApiType.SLACK_BOT, convertedDetails.type)
    }

    @Test
    fun editSlackNotificationApi() {
        val details = SlackNotificationApiDetails()
        details.setId(id)
        details.label = label2
        details.setType(NotificationApiType.SLACK_BOT)
        details.setState(state2)
        details.chanel = chanel2
        details.token = token2
        val api: NotificationApi = SlackNotificationApi(details, repository!!, slackApiClient!!)
        Mockito.`when`(notificationApiFactory.merge(ArgumentMatchers.anyString(), ArgumentMatchers.any()))
                .thenReturn(api)
        val request = SlackNotificationApiRequest()
        request.setLabel(label2)
        request.setToken(token2)
        request.setChanel(chanel2)
        request.setState(state2.name())
        val apiDTO = restService!!.edit(id, request) as SlackNotificationApiDTO
        Assertions.assertEquals(id, apiDTO.id)
        Assertions.assertEquals(label2, apiDTO.label)
        assertEquals(state2.name(), apiDTO.getState())
        Assertions.assertEquals(token2, apiDTO.token)
        Assertions.assertEquals(chanel2, apiDTO.chanel)
        Assertions.assertEquals(NotificationApiType.SLACK_BOT.name, apiDTO.type)
        Mockito.verify(notificationApiFactory, Mockito.times(1)).merge(ArgumentMatchers.eq(id), slackDetailsCaptor!!.capture())
        val convertedDetails = slackDetailsCaptor!!.value
        Assertions.assertEquals(label2, convertedDetails.label)
        assertEquals(state2, convertedDetails.getState())
        Assertions.assertEquals(token2, convertedDetails.token)
        Assertions.assertEquals(chanel2, convertedDetails.chanel)
        Assertions.assertEquals(NotificationApiType.SLACK_BOT, convertedDetails.type)
    }

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
    fun addNewTelegramNotificationApi() {
        val details = TelegramNotificationApiDetails()
        details.setId(id)
        details.label = label
        details.setType(NotificationApiType.TELEGRAM_BOT)
        details.setState(state)
        details.botFatherName = botFatherName
        details.token = token
        val api: NotificationApi = TelegramNotificationApi(details, repository!!, telegramApiClient!!)
        Mockito.`when`(notificationApiFactory.createNew(ArgumentMatchers.any()))
                .thenReturn(api)
        val request = TelegramNotificationApiRequest()
        request.setLabel(label)
        request.setToken(token)
        request.setBotFatherName(botFatherName)
        request.setState(state.name())
        val apiDTO = restService!!.add(request) as TelegramNotificationApiDTO
        Assertions.assertEquals(id, apiDTO.id)
        Assertions.assertEquals(label, apiDTO.label)
        assertEquals(state.name(), apiDTO.getState())
        Assertions.assertEquals(token, apiDTO.token)
        Assertions.assertEquals(botFatherName, apiDTO.botFatherName)
        Assertions.assertEquals(NotificationApiType.TELEGRAM_BOT.name, apiDTO.type)
        Mockito.verify(notificationApiFactory, Mockito.times(1)).createNew(telegramDetailsCaptor!!.capture())
        val convertedDetails = telegramDetailsCaptor!!.value
        Assertions.assertEquals(label, convertedDetails.label)
        assertEquals(state, convertedDetails.getState())
        Assertions.assertEquals(token, convertedDetails.token)
        Assertions.assertEquals(botFatherName, convertedDetails.botFatherName)
        Assertions.assertEquals(NotificationApiType.TELEGRAM_BOT, convertedDetails.type)
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
        }
}*/
