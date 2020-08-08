/*
package io.github.bot.terminal.application.domains.bot_commands.rest

import io.github.bot.terminal.application.domains.bot_commands.BotCommandsTestHelper
import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandDetails
import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandRepository
import io.github.bot.terminal.application.domains.common.action.ActionRestConverter
import io.github.bot.terminal.application.domains.common.action.dto.SqlSelectAsTextActionDTO
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsTextActionDetails
import io.github.bot.terminal.application.domains.common.action.values.ActionType
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.*
import org.mockito.invocation.InvocationOnMock
import org.mockito.junit.jupiter.MockitoExtension
import java.util.*

@ExtendWith(MockitoExtension::class)
internal class BotCommandsRestServiceTest : BotCommandsTestHelper() {
    private val actionConverter = ActionRestConverter()
    private val converter = Mockito.spy(BotCommandsRestConverter(actionConverter))

    @Mock
    private val repository: BotCommandRepository? = null
    private var service: BotCommandsRestService? = null

    @Captor
    var botCommandDetailsCaptor: ArgumentCaptor<BotCommandDetails>? = null

    @BeforeEach
    fun inti() {
        service = BotCommandsRestService(repository!!, converter)
    }

    @Test
    fun addSqlSelectAsTextBotCommand() {
        val request = sqlAsSelectBotCommandRequest1
        Mockito.doAnswer { invocation: InvocationOnMock -> (invocation.getArgument<Any>(0) as BotCommandDetails).setId(id) }.`when`(repository)!!.add(ArgumentMatchers.any())
        val apiDTO = service!!.add(request!!)
        Assertions.assertNotNull(id, apiDTO.id)
        Assertions.assertEquals(name, apiDTO.name)
        Assertions.assertEquals(cmd, apiDTO.cmd)
        assertEquals(state.name(), apiDTO.getState())
        Assertions.assertEquals(botIds[0], apiDTO.botIds.stream().findFirst().get())
        val actionDTO = apiDTO.action as SqlSelectAsTextActionDTO
        Assertions.assertEquals(type.name, actionDTO.type)
        Assertions.assertEquals(dbConnectionId, actionDTO.dbConnectionId)
        Assertions.assertEquals(select, actionDTO.select)
        Assertions.assertEquals(resultTemplate, actionDTO.resultTemplate)
        Mockito.verify(repository, Mockito.times(1))!!.add(botCommandDetailsCaptor!!.capture())
        val convertedDetails = botCommandDetailsCaptor!!.value
        Assertions.assertEquals(name, convertedDetails.name)
        Assertions.assertEquals(cmd, convertedDetails.cmd)
        assertEquals(state, convertedDetails.getState())
        Assertions.assertEquals(botIds[0], convertedDetails.botIds.stream().findFirst().get())
        val actionDetailsConverted = convertedDetails.actionDetails as SqlSelectAsTextActionDetails
        Assertions.assertEquals(type, actionDetailsConverted.type)
        Assertions.assertEquals(dbConnectionId, actionDetailsConverted.dbConnectionId)
        Assertions.assertEquals(select, actionDetailsConverted.select)
        Assertions.assertEquals(resultTemplate, actionDetailsConverted.resultTemplate)
    }

    @Test
    fun editSqlSelectAsTextBotCommand() {
        Mockito.`when`(repository!!.findById(ArgumentMatchers.eq(id)))
                .thenReturn(Optional.of(sqlAsSelectBotCommandDetails1))
        val request = sqlAsSelectBotCommandRequest2
        val apiDTO = service!!.edit(id, request!!)
        Assertions.assertEquals(id, apiDTO.id)
        Assertions.assertEquals(name2, apiDTO.name)
        Assertions.assertEquals(cmd2, apiDTO.cmd)
        assertEquals(state2.name(), apiDTO.getState())
        Assertions.assertEquals(botIds2[0], apiDTO.botIds.stream().findFirst().get())
        val actionDTO = apiDTO.action as SqlSelectAsTextActionDTO
        Assertions.assertEquals(type.name, actionDTO.type)
        Assertions.assertEquals(dbConnectionId2, actionDTO.dbConnectionId)
        Assertions.assertEquals(select2, actionDTO.select)
        Assertions.assertEquals(resultTemplate2, actionDTO.resultTemplate)
        Mockito.verify(repository, Mockito.times(1))!!.update(botCommandDetailsCaptor!!.capture())
        val convertedDetails = botCommandDetailsCaptor!!.value
        Assertions.assertEquals(name2, convertedDetails.name)
        Assertions.assertEquals(cmd2, convertedDetails.cmd)
        assertEquals(state2, convertedDetails.getState())
        Assertions.assertEquals(botIds2[0], convertedDetails.botIds.stream().findFirst().get())
        val actionDetailsConverted = convertedDetails.actionDetails as SqlSelectAsTextActionDetails
        Assertions.assertEquals(type, actionDetailsConverted.type)
        Assertions.assertEquals(dbConnectionId2, actionDetailsConverted.dbConnectionId)
        Assertions.assertEquals(select2, actionDetailsConverted.select)
        Assertions.assertEquals(resultTemplate2, actionDetailsConverted.resultTemplate)
    }

    @get:Test
    val sqlSelectAsTextBotCommand: Unit
        get() {
            Mockito.`when`(repository!!.findById(ArgumentMatchers.eq(id)))
                    .thenReturn(Optional.of(sqlAsSelectBotCommandDetails1))
            val apiDTO = service!![id]
            Assertions.assertEquals(id, apiDTO.id)
            Assertions.assertEquals(name, apiDTO.name)
            Assertions.assertEquals(cmd, apiDTO.cmd)
            assertEquals(state.name(), apiDTO.getState())
            Assertions.assertEquals(botIds[0], apiDTO.botIds.stream().findFirst().get())
            val actionRequest = apiDTO.action as SqlSelectAsTextActionDTO
            Assertions.assertEquals(type.name, actionRequest.type)
            Assertions.assertEquals(dbConnectionId, actionRequest.dbConnectionId)
            Assertions.assertEquals(select, actionRequest.select)
            Assertions.assertEquals(resultTemplate, actionRequest.resultTemplate)
        }

    @get:Test
    val all: Unit
        get() {
            Mockito.`when`(repository!!.findAll())
                    .thenReturn(listOf(sqlAsSelectBotCommandDetails1))
            val apiDTO = service!!.list()[0]
            Assertions.assertEquals(id, apiDTO.id)
            Assertions.assertEquals(name, apiDTO.name)
            Assertions.assertEquals(cmd, apiDTO.cmd)
            assertEquals(state.name(), apiDTO.getState())
            Assertions.assertEquals(botIds[0], apiDTO.botIds.stream().findFirst().get())
            val actionRequest = apiDTO.action as SqlSelectAsTextActionDTO
            Assertions.assertEquals(type.name, actionRequest.type)
            Assertions.assertEquals(dbConnectionId, actionRequest.dbConnectionId)
            Assertions.assertEquals(select, actionRequest.select)
            Assertions.assertEquals(resultTemplate, actionRequest.resultTemplate)
        }

    @Test
    fun deleteBotCommand() {
        service!!.delete(id)
        Mockito.verify(repository, Mockito.times(1))!!.deleteById(ArgumentMatchers.eq(id))
    }

    @get:Test
    val types: Unit
        get() {
            val types = service!!.types()
            Assertions.assertEquals(1, types.size)
            Assertions.assertEquals(ActionType.SQL_SELECT_AS_TEXT.name, types[0].type)
            Assertions.assertEquals(ActionType.SQL_SELECT_AS_TEXT.label, types[0].label)
        }
}*/
