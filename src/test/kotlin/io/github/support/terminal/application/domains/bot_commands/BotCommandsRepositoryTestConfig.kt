package io.github.support.terminal.application.domains.bot_commands

import io.github.support.terminal.application.domains.TestNitriteDataBaseConfiguration
import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Import

@Configuration
@Import(TestNitriteDataBaseConfiguration::class)
@ComponentScan(
        "io.github.support.terminal.application.domains.bot_commands.repository",
        "io.github.support.terminal.application.domains.bot_commands.config")
open class BotCommandsRepositoryTestConfig
