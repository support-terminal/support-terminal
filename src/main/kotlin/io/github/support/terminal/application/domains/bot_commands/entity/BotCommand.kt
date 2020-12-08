package io.github.support.terminal.application.domains.bot_commands.entity

import io.github.support.terminal.application.domains.bot_commands.repository.BotCommandDetails
import io.github.support.terminal.application.domains.common.action.entity.Action
import io.github.support.terminal.application.domains.common.action.entity.ActionResult
import io.github.support.terminal.application.domains.common.action.entity.EmptyResult
import org.slf4j.LoggerFactory
import java.lang.invoke.MethodHandles

class BotCommand(
        val details: BotCommandDetails,
        private val action: Action
) {

    fun cmd(): String = details.cmdTemplate.split(" ")[0].trim()
    val name: String = details.name

    fun performAction(cmd: String): ActionResult<*> {
        if (!details.isEnabled) {
            log.info("Can not perform bot command `${details.name}`. It's disabled")
            return EmptyResult()
        }
        val params = getParams(cmd);
        return action.execute(params)
    }

    private fun getParams(cmd: String): Map<String, String> {
        val parameterMap: MutableMap<String, String> = mutableMapOf();
        val names = details.cmdTemplate.trim().split(" ")
        val maxIndexOfParams = names.size - 1
        val params = cmd.trim().split(" ")
        for (i in 1..maxIndexOfParams) {
            val paramName =  names[i].trim().replace(Regex("[\${}]"), "")
            parameterMap[paramName] = params[i].trim()
        }
        return parameterMap;
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as BotCommand

        if (details != other.details) return false
        if (action != other.action) return false
        return true
    }

    override fun hashCode(): Int {
        var result = details.hashCode()
        result = 31 * result + action.hashCode()
        return result
    }

    companion object {
        private val log = LoggerFactory.getLogger(MethodHandles.lookup().lookupClass())
    }

}