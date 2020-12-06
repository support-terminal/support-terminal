package io.github.support.terminal.application.domains.common.action.entity

import io.github.support.terminal.application.domains.notificarion_api.entity.NotificationApi

interface ActionResult<T> {
    fun notifyAboutResult(notificationApi: NotificationApi)
    val result: T
}

class EmptyResult : ActionResult<Any?> {
    override fun notifyAboutResult(notificationApi: NotificationApi) {}
    override val result: Any? = null
}