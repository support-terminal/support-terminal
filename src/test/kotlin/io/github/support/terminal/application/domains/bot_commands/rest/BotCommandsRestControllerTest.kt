package io.github.support.terminal.application.domains.bot_commands.rest

import com.fasterxml.jackson.databind.ObjectMapper
import com.nhaarman.mockitokotlin2.*
import io.github.support.terminal.application.domains.bot_commands.BotCommandsDataSet
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
class BotCommandsRestControllerTest {

    @Mock
    private lateinit var restService: BotCommandsRestService

    @InjectMocks
    private lateinit var controller: BotCommandsRestController

    @Captor
    private lateinit var requestArgumentCaptor: ArgumentCaptor<BotCommandRequest>

    private val mapper = ObjectMapper()
    private val API_PATH = "/api/bot-commands"
    private lateinit var mockMvc: MockMvc

    @BeforeEach
    fun setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(controller).build()
    }

    @Test
    fun `available bot command types`() {
        whenever(restService.types()).thenReturn(BotCommandsDataSet.typeDtos)
        mockMvc.get("${API_PATH}/types") {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
        }.andExpect {
            status { isOk }
            content { contentType(MediaType.APPLICATION_JSON) }
            content { json(mapper.writeValueAsString(BotCommandsDataSet.typeDtos)) }
        }
    }

    @Test
    fun `add bot command`() {
        whenever(restService.add(any())).thenReturn(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.dto())
        mockMvc.post(API_PATH) {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
            content = mapper.writeValueAsString(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.request())
        }.andExpect {
            status { isCreated }
            content { contentType(MediaType.APPLICATION_JSON) }
            content { json(mapper.writeValueAsString(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.dto())) }
        }
        verify(restService, times(1)).add(capture(requestArgumentCaptor))
        assertEquals(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.request(), requestArgumentCaptor.value)
    }

    @Test
    fun `edit bot command`() {
        whenever(restService.edit(any(), any())).thenReturn(BotCommandsDataSet.BotCommands.BOT_COMMAND_1_UPDATED.dto())
        mockMvc.put("${API_PATH}/${BotCommandsDataSet.BotCommands.BOT_COMMAND_1.id()}") {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
            content = mapper.writeValueAsString(BotCommandsDataSet.BotCommands.BOT_COMMAND_2.request())
        }.andExpect {
            status { isOk }
            content { contentType(MediaType.APPLICATION_JSON) }
            content { json(mapper.writeValueAsString(BotCommandsDataSet.BotCommands.BOT_COMMAND_1_UPDATED.dto())) }
        }
        verify(restService, times(1)).edit(eq(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.id()), capture(requestArgumentCaptor))
        assertEquals(BotCommandsDataSet.BotCommands.BOT_COMMAND_2.request(), requestArgumentCaptor.value)
    }

    @Test
    fun `get bot command`() {
        whenever(restService.get(eq(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.id())))
                .thenReturn(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.dto())
        mockMvc.get("${API_PATH}/${BotCommandsDataSet.BotCommands.BOT_COMMAND_1.id()}") {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
        }.andExpect {
            status { isOk }
            content { contentType(MediaType.APPLICATION_JSON) }
            content { json(mapper.writeValueAsString(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.dto())) }
        }
        verify(restService, times(1)).get(eq(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.id()))
    }

    @Test
    fun `get list notificationApis`() {
        val listApis = listOf(
                BotCommandsDataSet.BotCommands.BOT_COMMAND_1.dto(),
                BotCommandsDataSet.BotCommands.BOT_COMMAND_2.dto()
        )
        whenever(restService.list()).thenReturn(listApis)

        mockMvc.get("${API_PATH}") {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
        }.andExpect {
            status { isOk }
            content { contentType(MediaType.APPLICATION_JSON) }
            content { json(mapper.writeValueAsString(listApis)) }
        }
        verify(restService, times(1)).list()
    }

    @Test
    fun `delete bot command`() {
        mockMvc.delete("${API_PATH}/${BotCommandsDataSet.BotCommands.BOT_COMMAND_1.id}") {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
        }.andExpect {
            status { isNoContent }
        }
        verify(restService, times(1))
                .delete(eq(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.id))
    }

}