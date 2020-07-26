/*
package io.github.bot.terminal.application.domains.notificarion_api.factory

import io.github.bot.terminal.application.domains.integrations.slack.SlackApiClient
import io.github.bot.terminal.application.domains.integrations.telegram.TelegramApiClient
import io.github.bot.terminal.application.domains.notificarion_api.entity.*
import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository
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
internal class NotificationApiFactoryTest {
    @Mock
    private val repository: NotificationApiRepository? = null

    @Mock
    private val slackApiClient: SlackApiClient? = null

    @Mock
    private val telegramApiClient: TelegramApiClient? = null
    private var factory: NotificationApiFactory? = null

    @Captor
    var slackDetailsCaptor: ArgumentCaptor<SlackNotificationApiDetails>? = null

    @Captor
    var telegramDetailsCaptor: ArgumentCaptor<TelegramNotificationApiDetails>? = null
    private val label = "label"
    private val state: NotificationApiState = NotificationApiState.ENABLED
    private val chanel = "chanel-name"
    private val botFatherName = "botFatherName-name"
    private val token = "token"
    private val id = "id"
    private val id2 = "id2"
    private val label2 = "label2"
    private val state2: NotificationApiState = NotificationApiState.DISABLED
    private val chanel2 = "chanel-name2"
    private val botFatherName2 = "botFatherName-name2"
    private val token2 = "token2"

    @BeforeEach
    fun init() {
        factory = NotificationApiFactory(repository!!, slackApiClient!!, telegramApiClient!!)
    }

    @Test
    fun createNewSlackNotificationApi() {
        val details = SlackNotificationApiDetails()
        details.label = label
        details.setType(NotificationApiType.SLACK_BOT)
        details.setState(state)
        details.chanel = chanel
        details.token = token
        val api = factory.createNew(details) as SlackNotificationApi
        Assertions.assertNotNull(api.getDetails().getId())
        assertEquals(label, api.getDetails().getLabel())
        assertEquals(state, api.getDetails().getState())
        assertEquals(token, api.getDetails().getToken())
        assertEquals(chanel, api.getDetails().getChanel())
        assertEquals(NotificationApiType.SLACK_BOT, api.getDetails().getType())
        Mockito.verify(repository, Mockito.times(1))!!.add(slackDetailsCaptor!!.capture())
        val passedDetails = slackDetailsCaptor!!.value
        Assertions.assertEquals(label, passedDetails.label)
        assertEquals(state, passedDetails.getState())
        Assertions.assertEquals(token, passedDetails.token)
        Assertions.assertEquals(chanel, passedDetails.chanel)
        Assertions.assertEquals(NotificationApiType.SLACK_BOT, passedDetails.type)
    }

    @Test
    fun mergeSlackNotificationApi() {
        val details = SlackNotificationApiDetails()
        details.setId(id)
        details.label = label
        details.setState(state)
        details.chanel = chanel
        details.token = token
        Mockito.`when`(repository!!.findById(ArgumentMatchers.eq(id))).thenReturn(Optional.of(details))
        val detailsUpdate = SlackNotificationApiDetails()
        detailsUpdate.label = label2
        detailsUpdate.setState(state2)
        detailsUpdate.chanel = chanel2
        detailsUpdate.token = token2
        val api = factory.merge(id, detailsUpdate) as SlackNotificationApi
        Assertions.assertNotNull(api.getDetails().getId())
        assertEquals(id, api.getDetails().getId())
        assertEquals(label2, api.getDetails().getLabel())
        assertEquals(state2, api.getDetails().getState())
        assertEquals(token2, api.getDetails().getToken())
        assertEquals(chanel2, api.getDetails().getChanel())
        assertEquals(NotificationApiType.SLACK_BOT, api.getDetails().getType())
        Mockito.verify(repository, Mockito.times(1))!!.update(slackDetailsCaptor!!.capture())
        val passedDetails = slackDetailsCaptor!!.value
        Assertions.assertEquals(id, passedDetails.id)
        Assertions.assertEquals(label2, passedDetails.label)
        assertEquals(state2, passedDetails.getState())
        Assertions.assertEquals(token2, passedDetails.token)
        Assertions.assertEquals(chanel2, passedDetails.chanel)
        Assertions.assertEquals(NotificationApiType.SLACK_BOT, passedDetails.type)
    }

    @Test
    fun createNewTelegramNotificationApi() {
        val details = TelegramNotificationApiDetails()
        details.label = label
        details.setType(NotificationApiType.TELEGRAM_BOT)
        details.setState(state)
        details.botFatherName = botFatherName
        details.token = token
        val api = factory.createNew(details) as TelegramNotificationApi
        Assertions.assertNotNull(api.getDetails().getId())
        assertEquals(label, api.getDetails().getLabel())
        assertEquals(state, api.getDetails().getState())
        assertEquals(token, api.getDetails().getToken())
        assertEquals(botFatherName, api.getDetails().getBotFatherName())
        assertEquals(NotificationApiType.TELEGRAM_BOT, api.getDetails().getType())
        Mockito.verify(repository, Mockito.times(1))!!.add(telegramDetailsCaptor!!.capture())
        val passedDetails = telegramDetailsCaptor!!.value
        Assertions.assertEquals(label, passedDetails.label)
        assertEquals(state, passedDetails.getState())
        Assertions.assertEquals(token, passedDetails.token)
        Assertions.assertEquals(botFatherName, passedDetails.botFatherName)
        Assertions.assertEquals(NotificationApiType.TELEGRAM_BOT, passedDetails.type)
    }

    @Test
    fun mergeTelegramNotificationApi() {
        val details = TelegramNotificationApiDetails()
        details.setId(id)
        details.label = label
        details.setState(state)
        details.botFatherName = botFatherName
        details.token = token
        Mockito.`when`(repository!!.findById(ArgumentMatchers.eq(id))).thenReturn(Optional.of(details))
        val detailsUpdate = TelegramNotificationApiDetails()
        detailsUpdate.label = label2
        detailsUpdate.setState(state2)
        detailsUpdate.botFatherName = botFatherName2
        detailsUpdate.token = token2
        val api = factory.merge(id, detailsUpdate) as TelegramNotificationApi
        Assertions.assertNotNull(api.getDetails().getId())
        assertEquals(id, api.getDetails().getId())
        assertEquals(label2, api.getDetails().getLabel())
        assertEquals(state2, api.getDetails().getState())
        assertEquals(token2, api.getDetails().getToken())
        assertEquals(botFatherName2, api.getDetails().getBotFatherName())
        assertEquals(NotificationApiType.TELEGRAM_BOT, api.getDetails().getType())
        Mockito.verify(repository, Mockito.times(1))!!.update(telegramDetailsCaptor!!.capture())
        val passedDetails = telegramDetailsCaptor!!.value
        Assertions.assertEquals(id, passedDetails.id)
        Assertions.assertEquals(label2, passedDetails.label)
        assertEquals(state2, passedDetails.getState())
        Assertions.assertEquals(token2, passedDetails.token)
        Assertions.assertEquals(botFatherName2, passedDetails.botFatherName)
        Assertions.assertEquals(NotificationApiType.TELEGRAM_BOT, passedDetails.type)
    }

    @get:Test
    val all: Unit
        get() {
            val details = SlackNotificationApiDetails()
            details.setId(id)
            details.label = label
            details.setType(NotificationApiType.SLACK_BOT)
            details.setState(state)
            details.chanel = chanel
            details.token = token
            val details2 = TelegramNotificationApiDetails()
            details2.setId(id2)
            details2.label = label2
            details2.setType(NotificationApiType.TELEGRAM_BOT)
            details2.setState(state2)
            details2.botFatherName = botFatherName2
            details2.token = token2
            val c: MutableList<NotificationApiDetails?> = ArrayList<Any?>()
            c.add(details)
            c.add(details2)
            Mockito.`when`<List<NotificationApiDetails?>>(repository!!.findAll())
                    .thenReturn(c)
            val list: List<NotificationApi<*>> = factory!!.getAll()
            val api1 = list[0] as SlackNotificationApi
            assertEquals(id, api1.getDetails().getId())
            assertEquals(label, api1.getDetails().getLabel())
            assertEquals(state, api1.getDetails().getState())
            assertEquals(token, api1.getDetails().getToken())
            assertEquals(chanel, api1.getDetails().getChanel())
            assertEquals(NotificationApiType.SLACK_BOT, api1.getDetails().getType())
            val api2 = list[1] as TelegramNotificationApi
            assertEquals(id2, api2.getDetails().getId())
            assertEquals(label2, api2.getDetails().getLabel())
            assertEquals(state2, api2.getDetails().getState())
            assertEquals(token2, api2.getDetails().getToken())
            assertEquals(botFatherName2, api2.getDetails().getBotFatherName())
            assertEquals(NotificationApiType.TELEGRAM_BOT, api2.getDetails().getType())
        }

    @Test
    fun byIdNotificationApi() {
        val details1 = SlackNotificationApiDetails()
        details1.setId(id)
        details1.label = label
        details1.setType(NotificationApiType.SLACK_BOT)
        details1.setState(state)
        details1.chanel = chanel
        details1.token = token
        Mockito.`when`(repository!!.findById(ArgumentMatchers.eq(id))).thenReturn(Optional.of(details1))
        val details2 = TelegramNotificationApiDetails()
        details2.setId(id2)
        details2.label = label2
        details2.setState(state2)
        details2.botFatherName = botFatherName2
        details2.token = token2
        Mockito.`when`(repository.findById(ArgumentMatchers.eq(id2))).thenReturn(Optional.of(details2))
        val api = factory!!.byId(id) as SlackNotificationApi
        Assertions.assertNotNull(api.getDetails().getId())
        assertEquals(id, api.getDetails().getId())
        assertEquals(label, api.getDetails().getLabel())
        assertEquals(state, api.getDetails().getState())
        assertEquals(token, api.getDetails().getToken())
        assertEquals(chanel, api.getDetails().getChanel())
        assertEquals(NotificationApiType.SLACK_BOT, api.getDetails().getType())
        val api2 = factory!!.byId(id2) as TelegramNotificationApi
        Assertions.assertNotNull(api2.getDetails().getId())
        assertEquals(id2, api2.getDetails().getId())
        assertEquals(label2, api2.getDetails().getLabel())
        assertEquals(state2, api2.getDetails().getState())
        assertEquals(token2, api2.getDetails().getToken())
        assertEquals(botFatherName2, api2.getDetails().getBotFatherName())
        assertEquals(NotificationApiType.TELEGRAM_BOT, api2.getDetails().getType())
    }

    @Test
    fun byIdNotFound() {
        Mockito.`when`(repository!!.findById(ArgumentMatchers.eq(id))).thenReturn(Optional.empty())
        Assertions.assertThrows(IllegalArgumentException::class.java) { factory!!.byId(id) }
    }

    @Test
    fun createUnknownType() {
        val details1 = SlackNotificationApiDetails()
        details1.setId(id)
        details1.label = label
        details1.setType(null)
        details1.setState(state)
        details1.chanel = chanel
        details1.token = token
        Mockito.`when`(repository!!.findById(ArgumentMatchers.eq(id))).thenReturn(Optional.of(details1))
        Assertions.assertThrows(IllegalArgumentException::class.java) { factory!!.byId(id) }
    }
}*/
