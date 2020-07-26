/*
package io.github.bot.terminal.application.domains.bot_commands.rest

import com.fasterxml.jackson.databind.ObjectMapper
import io.github.bot.terminal.application.domains.bot_commands.BotCommandsTestHelper
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandDTO
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandTypeDTO
import io.github.bot.terminal.application.domains.bot_commands.rest.requests.BotCommandRequest
import io.github.bot.terminal.application.domains.common.action.requests.SqlSelectAsTextActionRequest
import io.github.bot.terminal.application.domains.common.action.values.ActionType
import org.hamcrest.core.Is
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.*
import org.mockito.junit.jupiter.MockitoExtension
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import java.util.*

@ExtendWith(MockitoExtension::class)
internal class BotCommandsRestControllerTest : BotCommandsTestHelper() {
    @Mock
    private val service: BotCommandsRestService? = null

    @InjectMocks
    private val controller: BotCommandsRestController? = null

    @Captor
    var botCommandRequestCaptor: ArgumentCaptor<BotCommandRequest>? = null
    private val mapper = ObjectMapper()
    private var mockMvc: MockMvc? = null

    @BeforeEach
    fun setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(controller).build()
    }

    @Test
    @Throws(Exception::class)
    fun addSqlSelectAsStringBotCommand() {
        val dto = sqlAsSelectBotCommandDto1
        Mockito.`when`(service!!.add(ArgumentMatchers.any())).thenReturn(dto)
        val request = sqlAsSelectBotCommandRequest1
        mockMvc!!.perform(MockMvcRequestBuilders.post("/api/bot-commands")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isCreated)
                .andExpect(MockMvcResultMatchers.jsonPath("$.id", Is.`is`(id)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.name", Is.`is`(name)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.cmd", Is.`is`(cmd)))
                .andExpect(jsonPath("$.state", `is`(state.name())))
                .andExpect(MockMvcResultMatchers.jsonPath("$.botIds[0]", Is.`is`(botIds[0])))
                .andExpect(MockMvcResultMatchers.jsonPath("$.action.type", Is.`is`(type.name)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.action.dbConnectionId", Is.`is`(dbConnectionId)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.action.select", Is.`is`(select)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.action.resultTemplate", Is.`is`(resultTemplate)))
        Mockito.verify(service, Mockito.times(1))
                .add(botCommandRequestCaptor!!.capture())
        val botReqPassed = botCommandRequestCaptor!!.value
        Assertions.assertEquals(name, botReqPassed.name)
        Assertions.assertEquals(cmd, botReqPassed.cmd)
        assertEquals(state.name(), botReqPassed.getState())
        Assertions.assertEquals(botIds[0], botReqPassed.botIds.stream().findFirst().get())
        Assertions.assertEquals(name, botReqPassed.name)
        val actionRequest = botReqPassed.action as SqlSelectAsTextActionRequest
        Assertions.assertEquals(type.name, actionRequest.type)
        Assertions.assertEquals(dbConnectionId, actionRequest.dbConnectionId)
        Assertions.assertEquals(select, actionRequest.select)
        Assertions.assertEquals(resultTemplate, actionRequest.resultTemplate)
    }

    @Test
    @Throws(Exception::class)
    fun editSqlSelectAsStringBotCommand() {
        val dto = sqlAsSelectBotCommandDto1
        Mockito.`when`(service!!.edit(ArgumentMatchers.eq(id), ArgumentMatchers.any())).thenReturn(dto)
        val request = sqlAsSelectBotCommandRequest1
        mockMvc!!.perform(MockMvcRequestBuilders.put("/api/bot-commands/$id")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andExpect(MockMvcResultMatchers.jsonPath("$.id", Is.`is`(id)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.name", Is.`is`(name)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.cmd", Is.`is`(cmd)))
                .andExpect(jsonPath("$.state", `is`(state.name())))
                .andExpect(MockMvcResultMatchers.jsonPath("$.botIds[0]", Is.`is`(botIds[0])))
                .andExpect(MockMvcResultMatchers.jsonPath("$.action.type", Is.`is`(type.name)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.action.dbConnectionId", Is.`is`(dbConnectionId)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.action.select", Is.`is`(select)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.action.resultTemplate", Is.`is`(resultTemplate)))
        Mockito.verify(service, Mockito.times(1))
                .edit(ArgumentMatchers.eq(id), botCommandRequestCaptor!!.capture())
        val botReqPassed = botCommandRequestCaptor!!.value
        Assertions.assertEquals(name, botReqPassed.name)
        Assertions.assertEquals(cmd, botReqPassed.cmd)
        assertEquals(state.name(), botReqPassed.getState())
        Assertions.assertEquals(botIds[0], botReqPassed.botIds.stream().findFirst().get())
        Assertions.assertEquals(name, botReqPassed.name)
        val actionRequest = botReqPassed.action as SqlSelectAsTextActionRequest
        Assertions.assertEquals(type.name, actionRequest.type)
        Assertions.assertEquals(dbConnectionId, actionRequest.dbConnectionId)
        Assertions.assertEquals(select, actionRequest.select)
        Assertions.assertEquals(resultTemplate, actionRequest.resultTemplate)
    }

    @get:Throws(Exception::class)
    @get:Test
    val sqlSelectAsStringBotCommand: Unit
        get() {
            val dto = sqlAsSelectBotCommandDto1
            Mockito.`when`(service!![ArgumentMatchers.eq(id)]).thenReturn(dto)
            mockMvc!!.perform(MockMvcRequestBuilders.get("/api/bot-commands/$id")
                    .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(MockMvcResultMatchers.status().isOk)
                    .andExpect(MockMvcResultMatchers.jsonPath("$.id", Is.`is`(id)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.name", Is.`is`(name)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.cmd", Is.`is`(cmd)))
                    .andExpect(jsonPath("$.state", `is`(state.name())))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.botIds[0]", Is.`is`(botIds[0])))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.action.type", Is.`is`(type.name)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.action.dbConnectionId", Is.`is`(dbConnectionId)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.action.select", Is.`is`(select)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.action.resultTemplate", Is.`is`(resultTemplate)))
            Mockito.verify(service, Mockito.times(1))
                    .get(ArgumentMatchers.eq(id))
        }

    @get:Throws(Exception::class)
    @get:Test
    val list: Unit
        get() {
            val dto1 = sqlAsSelectBotCommandDto1
            val dto2 = sqlAsSelectBotCommandDto2
            val c: MutableList<BotCommandDTO?> = ArrayList()
            c.add(dto1)
            c.add(dto2)
            Mockito.`when`<List<BotCommandDTO?>>(service!!.list()).thenReturn(c)
            mockMvc!!.perform(MockMvcRequestBuilders.get("/api/bot-commands")
                    .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(MockMvcResultMatchers.status().isOk)
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].id", Is.`is`(id)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].name", Is.`is`(name)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].cmd", Is.`is`(cmd)))
                    .andExpect(jsonPath("$[0].state", `is`(state.name())))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].botIds[0]", Is.`is`(botIds[0])))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].action.type", Is.`is`(type.name)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].action.dbConnectionId", Is.`is`(dbConnectionId)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].action.select", Is.`is`(select)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].action.resultTemplate", Is.`is`(resultTemplate)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].id", Is.`is`(id2)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].name", Is.`is`(name2)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].cmd", Is.`is`(cmd2)))
                    .andExpect(jsonPath("$[1].state", `is`(state2.name())))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].botIds[0]", Is.`is`(botIds2[0])))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].action.type", Is.`is`(type2.name)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].action.dbConnectionId", Is.`is`(dbConnectionId2)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].action.select", Is.`is`(select2)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].action.resultTemplate", Is.`is`(resultTemplate2)))
        }

    @Test
    @Throws(Exception::class)
    fun deleteNotificationApi() {
        mockMvc!!.perform(MockMvcRequestBuilders.delete("/api/bot-commands/$id")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isNoContent)
        Mockito.verify(service, Mockito.times(1))
                .delete(ArgumentMatchers.eq(id))
    }

    @get:Throws(Exception::class)
    @get:Test
    val types: Unit
        get() {
            val dto = BotCommandTypeDTO()
            dto.setType(ActionType.SQL_SELECT_AS_TEXT.name)
            dto.setLabel(ActionType.SQL_SELECT_AS_TEXT.label)
            Mockito.`when`(service!!.types()).thenReturn(listOf(dto))
            mockMvc!!.perform(MockMvcRequestBuilders.get("/api/bot-commands/types")
                    .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(MockMvcResultMatchers.status().isOk)
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].type", Is.`is`(ActionType.SQL_SELECT_AS_TEXT.name)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].label", Is.`is`(ActionType.SQL_SELECT_AS_TEXT.label)))
        }
}*/
