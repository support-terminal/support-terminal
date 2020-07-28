package io.github.bot.terminal.application.domains.workers

import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommand
import io.github.bot.terminal.application.domains.bot_commands.entity.Cmd
import io.github.bot.terminal.application.domains.bot_commands.factory.BotCommandsFactory
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi
import io.github.bot.terminal.application.domains.notificarion_api.factory.NotificationApiFactory
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Service
import java.util.*
import java.util.concurrent.Callable
import java.util.concurrent.ExecutorService
import java.util.concurrent.Executors

@Service
class BotCommandsWorker(
        private val notificationApiFactory: NotificationApiFactory,
        private val botCommandsFactory: BotCommandsFactory,
        private val executorService: ExecutorService
) {

    @Scheduled(fixedDelay = 7000)
    fun scheduler() {
        val callables: MutableList<Callable<Any>> = ArrayList()
        for (notificationApi in notificationApiFactory.all) {
            callables.add(
                    Executors.callable { handle(notificationApi) }
            )
        }
        executorService.invokeAll(callables)
    }

    private fun handle(notificationApi: NotificationApi) {
        val lastCommands = notificationApi.lastMessages
                .map { (text) -> Cmd(text) }
                .filter { c: Cmd -> c.isNotEmpty() }
                .toSet()

        val cmdMap: Map<Cmd, List<BotCommand>> = botCommandsFactory.byNotificationApiId(notificationApi.id)
                .groupBy { it.cmd }

        lastCommands.forEach {
            cmdMap[it]?.let {
                it.forEach { botCommand: BotCommand ->
                    botCommand.process(notificationApi)
                }
            }
        }
    }
}