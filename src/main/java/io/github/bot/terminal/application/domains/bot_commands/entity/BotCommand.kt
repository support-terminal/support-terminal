package io.github.bot.terminal.application.domains.bot_commands.entity

import io.github.bot.terminal.application.domains.common.action.entity.Action
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi

class BotCommand(private val action: Action,
                 val cmd: Cmd,
                 private val isEnabled: Boolean) {

    fun process(notificationApi: NotificationApi?) {
        if (!isEnabled) {
            return
        }
        action.execute()!!.notify(notificationApi!!)
    }

}