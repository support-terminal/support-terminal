package io.github.support.terminal.application.domains.common.action.entity

interface Action {
    fun execute(params: Map<String, String>): ActionResult<*>
}