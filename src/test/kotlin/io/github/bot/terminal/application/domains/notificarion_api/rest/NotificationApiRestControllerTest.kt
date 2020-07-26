package io.github.bot.terminal.application.domains.notificarion_api.rest

import com.fasterxml.jackson.databind.ObjectMapper
import com.nhaarman.mockitokotlin2.whenever
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.NotificationApiTypeDTO
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.SlackNotificationApiRequest
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.TelegramNotificationApiRequest
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType
import org.hamcrest.core.Is
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.ArgumentCaptor
import org.mockito.Captor
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.junit.jupiter.MockitoExtension
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.get
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import org.springframework.test.web.servlet.setup.MockMvcBuilders

@ExtendWith(MockitoExtension::class)
internal class NotificationApiRestControllerTest {

    @Mock
    private lateinit var restService: NotificationApiRestService

    @InjectMocks
    private lateinit var controller: NotificationApiRestController

    @Captor
    private lateinit var slackRequestArgumentCaptor: ArgumentCaptor<SlackNotificationApiRequest>

    @Captor
    private lateinit var telegramRequestArgumentCaptor: ArgumentCaptor<TelegramNotificationApiRequest>

    private val mapper = ObjectMapper()

    private lateinit var mockMvc: MockMvc

    @BeforeEach
    fun setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(controller).build()
    }


    @Test
    @Throws(Exception::class)
    fun availableNotificationApiTypes() {
        val dto = NotificationApiTypeDTO(NotificationApiType.SLACK_BOT.label, NotificationApiType.SLACK_BOT.name)
        whenever(restService.types()).thenReturn(listOf(dto))
        mockMvc.get("/api/notifications-api/types") {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
        }.andExpect {
            status { isOk }
            content { contentType(MediaType.APPLICATION_JSON) }
            jsonPath("$[0].type") { value(NotificationApiType.SLACK_BOT.name) }
            jsonPath("$[0].label") { value(NotificationApiType.SLACK_BOT.label) }
        }
    }

/*
    @Test
    @Throws(Exception::class)
    fun addSlackNotificationApi() {
        val dto = SlackNotificationApiDTO()
        dto.setId(id)
        dto.setLabel(label)
        dto.setToken(token)
        dto.setChanel(chanel)
        dto.setState(state)
        Mockito.`when`(restService!!.add(ArgumentMatchers.any())).thenReturn(dto)
        val request = SlackNotificationApiRequest()
        request.setLabel(label)
        request.setToken(token)
        request.setChanel(chanel)
        request.setState(state)
        mockMvc!!.perform(MockMvcRequestBuilders.post("/api/notifications-api")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isCreated)
                .andExpect(MockMvcResultMatchers.jsonPath("$.id", Is.`is`(id)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.type", Is.`is`(NotificationApiType.Constants.SLACK_BOT)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.state", Is.`is`(state)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.label", Is.`is`(label)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.chanel", Is.`is`(chanel)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.token", Is.`is`(token)))
        Mockito.verify(restService, Mockito.times(1))
                .add(slackRequestArgumentCaptor!!.capture())
        val value = slackRequestArgumentCaptor!!.value
        Assertions.assertEquals(NotificationApiType.Constants.SLACK_BOT, value.type)
        Assertions.assertEquals(label, value.label)
        Assertions.assertEquals(token, value.token)
        Assertions.assertEquals(chanel, value.chanel)
        assertEquals(state, value.getState())
    }

    @Test
    @Throws(Exception::class)
    fun editSlackNotificationApi() {
        val dto = SlackNotificationApiDTO()
        dto.setId(id)
        dto.setLabel(label2)
        dto.setToken(token2)
        dto.setChanel(chanel2)
        dto.setState(state2)
        Mockito.`when`(restService!!.edit(ArgumentMatchers.anyString(), ArgumentMatchers.any())).thenReturn(dto)
        val request = SlackNotificationApiRequest()
        request.setLabel(label2)
        request.setToken(token2)
        request.setChanel(chanel2)
        request.setState(state2)
        mockMvc!!.perform(MockMvcRequestBuilders.put("/api/notifications-api/$id")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andExpect(MockMvcResultMatchers.jsonPath("$.id", Is.`is`(id)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.type", Is.`is`(NotificationApiType.Constants.SLACK_BOT)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.state", Is.`is`(state2)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.label", Is.`is`(label2)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.chanel", Is.`is`(chanel2)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.token", Is.`is`(token2)))
        Mockito.verify(restService, Mockito.times(1))
                .edit(ArgumentMatchers.eq(id), slackRequestArgumentCaptor!!.capture())
        val value = slackRequestArgumentCaptor!!.value
        Assertions.assertEquals(NotificationApiType.Constants.SLACK_BOT, value.type)
        Assertions.assertEquals(label2, value.label)
        Assertions.assertEquals(token2, value.token)
        Assertions.assertEquals(chanel2, value.chanel)
        assertEquals(state2, value.getState())
    }

    @get:Throws(Exception::class)
    @get:Test
    val slackNotificationApi: Unit
        get() {
            val dto = SlackNotificationApiDTO()
            dto.setId(id)
            dto.setLabel(label)
            dto.setToken(token)
            dto.setChanel(chanel)
            dto.setState(state)
            Mockito.`when`(restService!![ArgumentMatchers.any()]).thenReturn(dto)
            mockMvc!!.perform(MockMvcRequestBuilders.get("/api/notifications-api/$id")
                    .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(MockMvcResultMatchers.status().isOk)
                    .andExpect(MockMvcResultMatchers.jsonPath("$.id", Is.`is`(id)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.type", Is.`is`(NotificationApiType.Constants.SLACK_BOT)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.state", Is.`is`(state)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.label", Is.`is`(label)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.chanel", Is.`is`(chanel)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.token", Is.`is`(token)))
        }

    @Test
    @Throws(Exception::class)
    fun addTelegramNotificationApi() {
        val dto = TelegramNotificationApiDTO()
        dto.setId(id)
        dto.setLabel(label)
        dto.setToken(token)
        dto.setBotFatherName(botFatherName)
        dto.setState(state)
        Mockito.`when`(restService!!.add(ArgumentMatchers.any())).thenReturn(dto)
        val request = TelegramNotificationApiRequest()
        request.setLabel(label)
        request.setToken(token)
        request.setBotFatherName(botFatherName)
        request.setState(state)
        mockMvc!!.perform(MockMvcRequestBuilders.post("/api/notifications-api")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isCreated)
                .andExpect(MockMvcResultMatchers.jsonPath("$.id", Is.`is`(id)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.type", Is.`is`(NotificationApiType.Constants.TELEGRAM_BOT)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.state", Is.`is`(state)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.label", Is.`is`(label)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.botFatherName", Is.`is`(botFatherName)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.token", Is.`is`(token)))
        Mockito.verify(restService, Mockito.times(1))
                .add(telegramRequestArgumentCaptor!!.capture())
        val value = telegramRequestArgumentCaptor!!.value
        Assertions.assertEquals(label, value.label)
        Assertions.assertEquals(NotificationApiType.Constants.TELEGRAM_BOT, value.type)
        Assertions.assertEquals(token, value.token)
        Assertions.assertEquals(botFatherName, value.botFatherName)
        assertEquals(state, value.getState())
    }

    @Test
    @Throws(Exception::class)
    fun editTelegramNotificationApi() {
        val dto = TelegramNotificationApiDTO()
        dto.setId(id)
        dto.setLabel(label2)
        dto.setToken(token2)
        dto.setBotFatherName(botFatherName2)
        dto.setState(state2)
        Mockito.`when`(restService!!.edit(ArgumentMatchers.anyString(), ArgumentMatchers.any())).thenReturn(dto)
        val request = TelegramNotificationApiRequest()
        request.setLabel(label2)
        request.setToken(token2)
        request.setBotFatherName(botFatherName2)
        request.setState(state2)
        mockMvc!!.perform(MockMvcRequestBuilders.put("/api/notifications-api/$id")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andExpect(MockMvcResultMatchers.jsonPath("$.id", Is.`is`(id)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.type", Is.`is`(NotificationApiType.Constants.TELEGRAM_BOT)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.state", Is.`is`(state2)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.label", Is.`is`(label2)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.botFatherName", Is.`is`(botFatherName2)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.token", Is.`is`(token2)))
        Mockito.verify(restService, Mockito.times(1))
                .edit(ArgumentMatchers.eq(id), telegramRequestArgumentCaptor!!.capture())
        val value = telegramRequestArgumentCaptor!!.value
        Assertions.assertEquals(label2, value.label)
        Assertions.assertEquals(NotificationApiType.Constants.TELEGRAM_BOT, value.type)
        Assertions.assertEquals(token2, value.token)
        Assertions.assertEquals(botFatherName2, value.botFatherName)
        assertEquals(state2, value.getState())
    }

    @get:Throws(Exception::class)
    @get:Test
    val telegramNotificationApi: Unit
        get() {
            val dto = TelegramNotificationApiDTO()
            dto.setId(id)
            dto.setLabel(label)
            dto.setToken(token)
            dto.setBotFatherName(botFatherName)
            dto.setState(state)
            Mockito.`when`(restService!![ArgumentMatchers.any()]).thenReturn(dto)
            mockMvc!!.perform(MockMvcRequestBuilders.get("/api/notifications-api/$id")
                    .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(MockMvcResultMatchers.status().isOk)
                    .andExpect(MockMvcResultMatchers.jsonPath("$.id", Is.`is`(id)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.type", Is.`is`(NotificationApiType.Constants.TELEGRAM_BOT)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.state", Is.`is`(state)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.label", Is.`is`(label)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.botFatherName", Is.`is`(botFatherName)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.token", Is.`is`(token)))
        }

    @get:Throws(Exception::class)
    @get:Test
    val listNotificationApi: Unit
        get() {
            val dto1 = SlackNotificationApiDTO()
            dto1.setId(id)
            dto1.setLabel(label)
            dto1.setType(NotificationApiType.Constants.SLACK_BOT)
            dto1.setToken(token)
            dto1.setChanel(chanel)
            dto1.setState(state)
            val dto2 = TelegramNotificationApiDTO()
            dto2.setId(id2)
            dto2.setType(NotificationApiType.Constants.TELEGRAM_BOT)
            dto2.setLabel(label2)
            dto2.setToken(token2)
            dto2.setBotFatherName(botFatherName2)
            dto2.setState(state2)
            val c: MutableList<NotificationApiDTO> = ArrayList()
            c.add(dto1)
            c.add(dto2)
            Mockito.`when`(restService!!.list()).thenReturn(c)
            mockMvc!!.perform(MockMvcRequestBuilders.get("/api/notifications-api")
                    .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(MockMvcResultMatchers.status().isOk)
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].id", Is.`is`(id)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].type", Is.`is`(NotificationApiType.Constants.SLACK_BOT)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].state", Is.`is`(state)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].label", Is.`is`(label)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].chanel", Is.`is`(chanel)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].token", Is.`is`(token)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].id", Is.`is`(id2)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].type", Is.`is`(NotificationApiType.Constants.TELEGRAM_BOT)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].state", Is.`is`(state2)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].label", Is.`is`(label2)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].botFatherName", Is.`is`(botFatherName2)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].token", Is.`is`(token2)))
        }

    @Test
    @Throws(Exception::class)
    fun deleteNotificationApi() {
        mockMvc!!.perform(MockMvcRequestBuilders.delete("/api/notifications-api/$id")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isNoContent)
        Mockito.verify(restService, Mockito.times(1))
                .delete(ArgumentMatchers.eq(id))
    }*/
}