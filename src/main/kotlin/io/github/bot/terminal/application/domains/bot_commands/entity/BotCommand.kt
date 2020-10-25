package io.github.bot.terminal.application.domains.bot_commands.entity

import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandDetails
import io.github.bot.terminal.application.domains.common.action.entity.Action
import io.github.bot.terminal.application.domains.common.action.entity.ActionResult
import io.github.bot.terminal.application.domains.common.action.entity.EmptyResult
import org.slf4j.LoggerFactory
import java.lang.invoke.MethodHandles

class BotCommand(
        val details: BotCommandDetails,
        private val action: Action,
        val cmd: Cmd = Cmd(details.cmd)
) {

    fun performAction() : ActionResult<*> {
        if (!details.isEnabled) {
            log.info("Can not perform bot command `${details.name}`. It's disabled")
            return EmptyResult()
        }
        return action.execute()
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as BotCommand

        if (details != other.details) return false
        if (action != other.action) return false
        if (cmd != other.cmd) return false

        return true
    }

    override fun hashCode(): Int {
        var result = details.hashCode()
        result = 31 * result + action.hashCode()
        result = 31 * result + cmd.hashCode()
        return result
    }

    companion object {
        private val log = LoggerFactory.getLogger(MethodHandles.lookup().lookupClass())
    }

}