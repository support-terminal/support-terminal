package io.github.bot.terminal.application.domains.monitoring.repository

/*

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
        val byId = repository.findById(BotCommandsDataSet.BotCommands.BOT_COMMAND_1.details().id)
        byId!!.merge(BotCommandsDataSet.BotCommands.BOT_COMMAND_2.details())
        repository.update(byId)
        Assertions.assertEquals(BotCommandsDataSet.BotCommands.BOT_COMMAND_1_UPDATED.details(), byId)
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


 */