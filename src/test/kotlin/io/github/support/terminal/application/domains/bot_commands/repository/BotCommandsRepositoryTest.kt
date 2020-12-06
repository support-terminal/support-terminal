package io.github.support.terminal.application.domains.bot_commands.repository

import io.github.support.terminal.application.domains.bot_commands.BotCommandsDataSet
import io.github.support.terminal.application.domains.bot_commands.BotCommandsRepositoryTestConfig
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Import
import org.springframework.test.context.junit.jupiter.SpringExtension
import java.lang.IllegalArgumentException


@ExtendWith(SpringExtension::class)
@Import(BotCommandsRepositoryTestConfig::class)
class NotificationApiRepositoryTest {

    @Autowired
    private lateinit var repository: BotCommandRepository;

    @BeforeEach
    fun inti() {
        repository.findAll().forEach { d -> repository.deleteById(d.id) }
    }

    @Test
    fun `add bot commands details`() {
        repository.add(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.details())
        val byId = repository.findById(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.id)
        Assertions.assertEquals(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.details(), byId)
    }

    @Test
    fun `edit bot commands details`() {
        repository.add(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.details())
        repository.findById(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.details().id)
                ?.let{
                   val updated = it.merge(BotCommandsDataSet.BotCommands.BOT_COMMAND_2.details())
                    repository.update(updated)
                    Assertions.assertEquals(BotCommandsDataSet.BotCommands.BOT_COMMAND_1_UPDATED.details(), updated)
                } ?: throw IllegalArgumentException()
     }

    @Test
    fun `find all bot commands`() {
        repository.add(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.details())
        repository.add(BotCommandsDataSet.BotCommands.BOT_COMMAND_2.details())

        val expectedResult = listOf(
                BotCommandsDataSet.BotCommands.BOT_COMMAND_1.details(),
                BotCommandsDataSet.BotCommands.BOT_COMMAND_2.details()
        )

        Assertions.assertEquals(expectedResult, repository.findAll())
    }

    @Test
    fun deleteById() {
        repository.add(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.details())
        val byId = repository.findById(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.id)
        Assertions.assertEquals(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.details(), byId)
        repository.deleteById(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.id())
        Assertions.assertNull(repository.findById(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.id()))
    }

}