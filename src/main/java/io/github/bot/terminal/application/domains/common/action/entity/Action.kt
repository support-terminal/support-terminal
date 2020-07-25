package io.github.bot.terminal.application.domains.common.action.entity

interface Action {
    fun execute(): ActionResult<*>
}