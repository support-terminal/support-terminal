package io.github.bot.terminal.application.domains.common.action.entity

import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi

interface ActionResult<T> {
    fun notify(api: NotificationApi)
    val result: T
}