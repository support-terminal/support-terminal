package io.github.support.terminal.application.domains.bot_commands.factory

import com.nhaarman.mockitokotlin2.*
import io.github.support.terminal.application.domains.bot_commands.BotCommandsDataSet
import io.github.support.terminal.application.domains.bot_commands.entity.BotCommandsFactory
import io.github.support.terminal.application.domains.bot_commands.repository.BotCommandDetails
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.ArgumentCaptor
import org.mockito.Captor
import org.mockito.junit.jupiter.MockitoExtension


@ExtendWith(MockitoExtension::class)
internal class BotCommandsFactoryTest {

    private lateinit var factory: BotCommandsFactory

    @Captor
    private lateinit var detailsCaptor: ArgumentCaptor<BotCommandDetails>

    @BeforeEach
    fun init() {
        whenever(BotCommandsDataSet.actionsFactory.build(eq(BotCommandsDataSet.Action.ACTION_1.details())))
                .thenReturn(BotCommandsDataSet.Action.ACTION_1.action())

        whenever(BotCommandsDataSet.actionsFactory.build(eq(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.action.details())))
                .thenReturn(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.action.action())

        whenever(BotCommandsDataSet.repository.findById(eq(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.id)))
                .thenReturn(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.details())

        factory = BotCommandsFactory(BotCommandsDataSet.repository, BotCommandsDataSet.actionsFactory)
    }

    @Test
    fun `create new bot command`() {

        val botCommand = factory.createNew(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.details())

        Assertions.assertEquals(botCommand, BotCommandsDataSet.BotCommands.BOT_COMMAND_1.botCommand())

        verify(BotCommandsDataSet.repository, times(1)).add(capture(detailsCaptor))
        Assertions.assertEquals(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.details(), detailsCaptor.value)
    }


    @Test
    fun `update bot command`() {
        val updated = factory.update(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.id, BotCommandsDataSet.BotCommands.BOT_COMMAND_2.details())

        val botCommand = BotCommandsDataSet.BotCommands.BOT_COMMAND_1_UPDATED.botCommand()
        Assertions.assertEquals(botCommand, updated)

        verify(BotCommandsDataSet.repository, times(1))
                .update(capture(detailsCaptor))
        Assertions.assertEquals(BotCommandsDataSet.BotCommands.BOT_COMMAND_1_UPDATED.details(), detailsCaptor.value)
    }

    @Test
    fun `get all bot commands`() {
        whenever(BotCommandsDataSet.actionsFactory.build(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.action.details()))
                .thenReturn(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.action.action())
        whenever(BotCommandsDataSet.actionsFactory.build(BotCommandsDataSet.BotCommands.BOT_COMMAND_2.action.details()))
                .thenReturn(BotCommandsDataSet.BotCommands.BOT_COMMAND_2.action.action())

        val list = listOf(
                BotCommandsDataSet.BotCommands.BOT_COMMAND_1.details(),
                BotCommandsDataSet.BotCommands.BOT_COMMAND_2.details()
        )
        whenever(BotCommandsDataSet.repository.findAll()).thenReturn(list)

        val expectedApisList = listOf(
                BotCommandsDataSet.BotCommands.BOT_COMMAND_1.botCommand(),
                BotCommandsDataSet.BotCommands.BOT_COMMAND_2.botCommand()
        )
        Assertions.assertEquals(expectedApisList, factory.all())
    }

    @Test
    fun `get bot command by id`() {
        whenever(BotCommandsDataSet.actionsFactory.build(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.action.details()))
                .thenReturn(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.action.action())
        whenever(BotCommandsDataSet.repository.findById(eq(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.id())))
                .thenReturn(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.details())
        Assertions.assertEquals(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.botCommand(),
                factory.byId(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.id()))
    }

    @Test
    fun byIdNotFound() {
        whenever(BotCommandsDataSet.repository.findById(any())).thenReturn(null)
        Assertions.assertThrows(IllegalArgumentException::class.java) { factory.byId("some-id") }
    }
}