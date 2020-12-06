package io.github.support.terminal.application.domains.bot_commands.repository

import io.github.support.terminal.application.domains.common.action.entity.ActionDetails
import org.dizitart.no2.objects.Id
import java.util.*

data class BotCommandDetails(
        @Id
        val id: String = UUID.randomUUID().toString(),
        var name: String,
        var cmdTemplate: String,
        var isEnabled: Boolean,
        var actionDetails: ActionDetails,
        var botIds: Collection<String>
) {
    fun merge(update: BotCommandDetails) =
            this.copy(
                    name = update.name,
                    cmdTemplate = update.cmdTemplate,
                    isEnabled = update.isEnabled,
                    actionDetails = update.actionDetails,
                    botIds = update.botIds
            )
}