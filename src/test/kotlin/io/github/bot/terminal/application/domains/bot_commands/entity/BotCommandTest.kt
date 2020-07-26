/*
package io.github.bot.terminal.application.domains.bot_commands.entity

import io.github.bot.terminal.application.domains.bot_commands.entity.Cmd
import io.github.bot.terminal.application.domains.common.action.entity.Action
import io.github.bot.terminal.application.domains.common.action.entity.ActionResult
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.ArgumentMatchers
import org.mockito.Mockito
import org.mockito.junit.jupiter.MockitoExtension

@ExtendWith(MockitoExtension::class)
internal class BotCommandTest {
    @Test
    fun process() {
        val notificationApi: NotificationApi<*> = Mockito.mock(NotificationApi::class.java)
        val action = Mockito.mock(Action::class.java)
        val actionResult = Mockito.mock(ActionResult::class.java)
        Mockito.`when`(action.execute()).thenReturn(actionResult)
        val cmd = Mockito.mock(Cmd::class.java)
        val command = BotCommand(action, cmd, true)
        command.process(notificationApi)
        Mockito.verify(action, Mockito.times(1)).execute()
        Mockito.verify(actionResult, Mockito.times(1)).notify(ArgumentMatchers.eq<NotificationApi>(notificationApi))
    }

    @get:Test
    val isDisabled: Unit
        get() {
            val notificationApi: NotificationApi<*> = Mockito.mock(NotificationApi::class.java)
            val action = Mockito.mock(Action::class.java)
            val cmd = Mockito.mock(Cmd::class.java)
            val command = BotCommand(action, cmd, false)
            command.process(notificationApi)
            Mockito.verify(action, Mockito.times(0)).execute()
        }
}*/
