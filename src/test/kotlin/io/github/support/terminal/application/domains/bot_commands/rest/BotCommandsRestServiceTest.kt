package io.github.support.terminal.application.domains.bot_commands.rest

import com.nhaarman.mockitokotlin2.*
import io.github.support.terminal.application.domains.bot_commands.BotCommandsDataSet
import io.github.support.terminal.application.domains.bot_commands.entity.BotCommandsFactory
import io.github.support.terminal.application.domains.bot_commands.repository.BotCommandDetails
import io.github.support.terminal.application.domains.common.action.ActionRestConverter
import io.github.support.terminal.application.domains.common.action.entity.ActionType
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.ArgumentCaptor
import org.mockito.Captor
import org.mockito.Mockito
import org.mockito.junit.jupiter.MockitoExtension
import java.util.*

@ExtendWith(MockitoExtension::class)
internal class BotCommandsRestServiceTest {

    private val factory: BotCommandsFactory = mock()

    @Captor
    private lateinit var detailsCaptor: ArgumentCaptor<BotCommandDetails>

    private val actionConverter = Mockito.spy(ActionRestConverter())
    private val converter = Mockito.spy(BotCommandsRestConverter(actionConverter))

    private lateinit var restService: BotCommandsRestService

    @BeforeEach
    fun inti() {
        reset(factory)
        restService = BotCommandsRestService(factory, converter)
    }

    @Test
    fun `add unknown`() {
        Assertions.assertThrows(IllegalArgumentException::class.java) {
            restService.add(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.requestWrong())
        }
    }

    @Test
    fun `add db connection`() {
        whenever(factory.createNew(any()))
                .thenReturn(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.botCommand())
        val dto = restService.add(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.request())
        Assertions.assertEquals(dto, BotCommandsDataSet.BotCommands.BOT_COMMAND_1.dto())

        verify(factory, times(1)).createNew(capture(detailsCaptor))
        val details = BotCommandsDataSet.BotCommands.BOT_COMMAND_1.details()
        Assertions.assertEquals(details.name, detailsCaptor.value.name)
        Assertions.assertEquals(details.cmdTemplate, detailsCaptor.value.cmdTemplate)
        Assertions.assertEquals(details.botIds, detailsCaptor.value.botIds)
        Assertions.assertEquals(details.actionDetails, detailsCaptor.value.actionDetails)
        Assertions.assertEquals(details.isEnabled, detailsCaptor.value.isEnabled)
    }

    @Test
    fun `edit db connection`() {
        whenever(factory.update(any(), any()))
                .thenReturn(BotCommandsDataSet.BotCommands.BOT_COMMAND_1_UPDATED.botCommand())
        val dto = restService.edit(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.id(),
                BotCommandsDataSet.BotCommands.BOT_COMMAND_2.request())
        Assertions.assertEquals(dto, BotCommandsDataSet.BotCommands.BOT_COMMAND_1_UPDATED.dto())


        verify(factory, times(1)).update(eq(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.id()), capture(detailsCaptor))
        val details = BotCommandsDataSet.BotCommands.BOT_COMMAND_1_UPDATED.details()
        Assertions.assertEquals(details.name, detailsCaptor.value.name)
        Assertions.assertEquals(details.cmdTemplate, detailsCaptor.value.cmdTemplate)
        Assertions.assertEquals(details.botIds, detailsCaptor.value.botIds)
        Assertions.assertEquals(details.actionDetails, detailsCaptor.value.actionDetails)
        Assertions.assertEquals(details.isEnabled, detailsCaptor.value.isEnabled)
    }

    @Test
    fun `delete db connection`() {
        val someId = UUID.randomUUID().toString()
        restService.delete(someId)
        verify(factory, Mockito.timeout(1)).delete(eq(someId))
    }

    @Test
    fun `get db connection types`() {
        val types = restService.types()
        Assertions.assertEquals(3, types.size)

        Assertions.assertEquals(ActionType.SQL_SELECT_AS_TEXT.name, types[0].type)
        Assertions.assertEquals(ActionType.SQL_SELECT_AS_TEXT.label, types[0].label)
        Assertions.assertEquals(ActionType.JOIN_SQL_SELECTS_AS_TEXT.name, types[1].type)
        Assertions.assertEquals(ActionType.JOIN_SQL_SELECTS_AS_TEXT.label, types[1].label)
        Assertions.assertEquals(ActionType.SQL_SELECT_IN_EXCEL_FILE.name, types[2].type)
        Assertions.assertEquals(ActionType.SQL_SELECT_IN_EXCEL_FILE.label, types[2].label)
    }

    @Test
    fun `get db connection`() {
        whenever(factory.byId(eq(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.id())))
                .thenReturn(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.botCommand())
        val result = restService.get(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.id())
        Assertions.assertEquals(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.dto(), result)
    }

    @Test
    fun `get all db connections`() {
        val list = listOf(
                BotCommandsDataSet.BotCommands.BOT_COMMAND_1.botCommand(),
                BotCommandsDataSet.BotCommands.BOT_COMMAND_2.botCommand()
        )
        whenever(factory.all()).thenReturn(list)

        val dtoList = listOf(
                BotCommandsDataSet.BotCommands.BOT_COMMAND_1.dto(),
                BotCommandsDataSet.BotCommands.BOT_COMMAND_2.dto()
        )
        val resultList = restService.list()
        Assertions.assertEquals(dtoList, resultList)
    }

}