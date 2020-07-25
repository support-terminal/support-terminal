package io.github.bot.terminal.application.domains.bot_commands.repository

import io.github.bot.terminal.application.domains.common.action.entity.ActionDetails
import org.dizitart.no2.objects.Id
import java.util.*

data class BotCommandDetails(
        @Id
        val id: String = UUID.randomUUID().toString(),
        var name: String,
        var cmd: String,
        var isEnabled: Boolean,
        var actionDetails: ActionDetails,
        var botIds: Collection<String>
) {
    fun merge(update: BotCommandDetails) {
        name = update.name
        cmd = update.cmd
        isEnabled = update.isEnabled
        actionDetails = update.actionDetails
        botIds = update.botIds
    }
}