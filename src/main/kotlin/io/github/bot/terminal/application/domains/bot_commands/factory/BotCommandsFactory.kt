package io.github.bot.terminal.application.domains.bot_commands.factory

import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommand
import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandDetails
import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandRepository
import io.github.bot.terminal.application.domains.common.action.factory.ActionsFactory
import org.springframework.stereotype.Service

@Service
class BotCommandsFactory(
        private val repository: BotCommandRepository,
        private val actionsFactory: ActionsFactory
) {

    fun createNew(details: BotCommandDetails): BotCommand {
        val botCommand = build(details)
        repository.add(details)
        return botCommand
    }

    fun update(id: String, detailsUpdate: BotCommandDetails): BotCommand {
        val details = getById(id)
        details.merge(detailsUpdate)
        val botCommand = build(details)
        repository.update(details)
        return botCommand
    }

    fun getById(id: String): BotCommandDetails = repository.findById(id)
            ?: throw IllegalArgumentException("BotCommand not found by id=${id}")

    fun all(): List<BotCommand> = repository.findAll()
            .map { details: BotCommandDetails -> build(details) }
            .toList()

    fun byId(id: String): BotCommand {
        return build(getById(id))
    }

    fun delete(id: String) {
        repository.findById(id)?.let {
            repository.deleteById(id)
        }
    }

    fun build(details: BotCommandDetails): BotCommand {
        val action = actionsFactory.build(details.actionDetails)
        return BotCommand(details = details, action = action)
    }

    fun byNotificationApiId(notificationApi: String): List<BotCommand> {
        return repository
                .findAll()
                .filter { d: BotCommandDetails -> d.botIds.contains(notificationApi) }
                .map { details: BotCommandDetails -> build(details) }
                .toList()
    }
}