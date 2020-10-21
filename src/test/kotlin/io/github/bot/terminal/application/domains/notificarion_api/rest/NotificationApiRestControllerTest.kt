package io.github.bot.terminal.application.domains.notificarion_api.rest

import com.fasterxml.jackson.databind.ObjectMapper
import com.nhaarman.mockitokotlin2.*
import io.github.bot.terminal.application.domains.notificarion_api.NotificationApiTestData
import io.github.bot.terminal.application.domains.notificarion_api.NotificationsApiDataSet
import io.github.bot.terminal.application.domains.notificarion_api.slackTypeDto
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.ArgumentCaptor
import org.mockito.Captor
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.junit.jupiter.MockitoExtension
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.*
import org.springframework.test.web.servlet.setup.MockMvcBuilders

@ExtendWith(MockitoExtension::class)
class NotificationApiRestControllerTest {

    @Mock
    private lateinit var notificationApiRestService: NotificationApiRestService

    @InjectMocks
    private lateinit var controller: NotificationApiRestController

    @Captor
    private lateinit var requestArgumentCaptor: ArgumentCaptor<NotificationApiRequest>

    private val mapper = ObjectMapper()
    private val API_PATH = "/api/notifications-api"
    private lateinit var mockMvc: MockMvc

    @BeforeEach
    fun setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(controller).build()
    }

    @Test
    fun `available notificationApi types`() {
        whenever(notificationApiRestService.types()).thenReturn(listOf(slackTypeDto))
        mockMvc.get("${API_PATH}/types") {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
        }.andExpect {
            status { isOk }
            content { contentType(MediaType.APPLICATION_JSON) }
            content { json(mapper.writeValueAsString(listOf(slackTypeDto))) }
        }
    }

    @Test
    fun `add slack notificationApi`() {
        addNotificationApi(NotificationsApiDataSet.Slack.SLACK_1)
    }

    @Test
    fun `add telegram notificationApi`() {
        addNotificationApi(NotificationsApiDataSet.Telegram.TELEGRAM_1)
    }

    private fun addNotificationApi(api: NotificationApiTestData) {
        whenever(notificationApiRestService.add(any())).thenReturn(api.dto())
        mockMvc.post(API_PATH) {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
            content = mapper.writeValueAsString(api.request())
        }.andExpect {
            status { isCreated }
            content { contentType(MediaType.APPLICATION_JSON) }
            content { json(mapper.writeValueAsString(api.dto())) }
        }
        verify(notificationApiRestService, times(1)).add(capture(requestArgumentCaptor))
        assertEquals(api.request(), requestArgumentCaptor.value)
    }

    @Test
    fun `edit slack notificationApi`() {
        editNotificationApi(NotificationsApiDataSet.Slack.SLACK_1, NotificationsApiDataSet.Slack.SLACK_2)
    }

    @Test
    fun `edit telegram notificationApi`() {
        editNotificationApi(NotificationsApiDataSet.Telegram.TELEGRAM_1, NotificationsApiDataSet.Telegram.TELEGRAM_2)
    }

    private fun editNotificationApi(api: NotificationApiTestData, update: NotificationApiTestData) {
        whenever(notificationApiRestService.edit(any(), any())).thenReturn(update.dto())
        mockMvc.put("${API_PATH}/${api.id()}") {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
            content = mapper.writeValueAsString(update.request())
        }.andExpect {
            status { isOk }
            content { contentType(MediaType.APPLICATION_JSON) }
            content { json(mapper.writeValueAsString(update.dto())) }
        }
        verify(notificationApiRestService, times(1)).edit(eq(api.id()), capture(requestArgumentCaptor))
        assertEquals(update.request(), requestArgumentCaptor.value)
    }

    @Test
    fun `get slack notificationApi`() {
        getNotificationApi(NotificationsApiDataSet.Slack.SLACK_1)
    }

    @Test
    fun `get telegram notificationApi`() {
        getNotificationApi(NotificationsApiDataSet.Telegram.TELEGRAM_1)
    }

    private fun getNotificationApi(api: NotificationApiTestData) {
        whenever(notificationApiRestService.get(eq(api.id())))
                .thenReturn(api.dto())
        mockMvc.get("${API_PATH}/${api.id()}") {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
        }.andExpect {
            status { isOk }
            content { contentType(MediaType.APPLICATION_JSON) }
            content { json(mapper.writeValueAsString(api.dto())) }
        }
        verify(notificationApiRestService, times(1)).get(eq(api.id()))
    }

    @Test
    fun `get list notificationApis`() {
        val listApis = listOf(
                NotificationsApiDataSet.Slack.SLACK_1.dto(),
                NotificationsApiDataSet.Slack.SLACK_2.dto(),
                NotificationsApiDataSet.Telegram.TELEGRAM_1.dto(),
                NotificationsApiDataSet.Telegram.TELEGRAM_2.dto()
        )
        whenever(notificationApiRestService.list()).thenReturn(listApis)

        mockMvc.get("${API_PATH}") {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
        }.andExpect {
            status { isOk }
            content { contentType(MediaType.APPLICATION_JSON) }
            content { json(mapper.writeValueAsString(listApis)) }
        }
        verify(notificationApiRestService, times(1)).list()
    }

    @Test
    fun `delete notificationApi`() {
        mockMvc.delete("${API_PATH}/${NotificationsApiDataSet.Slack.SLACK_1.id}") {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
        }.andExpect {
            status { isNoContent }
        }
        verify(notificationApiRestService, times(1))
                .delete(eq(NotificationsApiDataSet.Slack.SLACK_1.id))
    }

}