package io.github.bot.terminal.application.domains.bot_commands.factory

import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommand
import io.github.bot.terminal.application.domains.bot_commands.entity.Cmd
import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandDetails
import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandRepository
import io.github.bot.terminal.application.domains.common.action.factory.ActionsFactory
import org.springframework.stereotype.Service

@Service
class BotCommandsFactory(
        private val repository: BotCommandRepository,
        private val actionsFactory: ActionsFactory
) {

    fun build(details: BotCommandDetails): BotCommand {
        val action = actionsFactory.build(details.actionDetails)
        val cmd = Cmd(details.cmd)
        val isEnabled = details.isEnabled
        return BotCommand(action = action, cmd = cmd, isEnabled = isEnabled)
    }

    fun byNotificationApiId(notificationApi: String): List<BotCommand> {
        return repository
                .findAll()
                .filter { d: BotCommandDetails -> d.botIds.contains(notificationApi) }
                .map { details: BotCommandDetails -> build(details) }
                .toList()
    }
}