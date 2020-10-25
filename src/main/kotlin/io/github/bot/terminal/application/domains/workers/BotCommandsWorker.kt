package io.github.bot.terminal.application.domains.workers

import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommand
import io.github.bot.terminal.application.domains.bot_commands.entity.Cmd
import io.github.bot.terminal.application.domains.bot_commands.factory.BotCommandsFactory
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi
import io.github.bot.terminal.application.domains.notificarion_api.factory.NotificationApiFactory
import org.slf4j.LoggerFactory
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Service
import java.lang.invoke.MethodHandles
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
        for (notificationApi in notificationApiFactory.all()) {
            callables.add(
                    Executors.callable { handle(notificationApi) }
            )
        }
        executorService.invokeAll(callables)
    }

    private fun handle(notificationApi: NotificationApi) {

        val cmdMap: Map<Cmd, List<BotCommand>> = botCommandsFactory.byNotificationApiId(notificationApi.id)
                .groupBy { it.cmd }

        for (message in notificationApi.lastMessages) {
            val cmd = Cmd(message.text)
            if(cmd.isEmpty()) {
                continue
            }
            cmdMap[cmd]?.let {
                it.forEach { botCommand: BotCommand ->
                    log.info("Start execution of command `${cmd.cmd}`")
                    botCommand.performAction().notifyAboutResult(notificationApi)
                }
            }
        }
    }

    companion object {
        private val log = LoggerFactory.getLogger(MethodHandles.lookup().lookupClass())
    }
}