package io.github.bot.terminal.application.domains.events.services

import io.github.bot.terminal.application.domains.events.models.ApplicationEvent
import io.github.bot.terminal.application.domains.events.models.Level
import org.slf4j.LoggerFactory
import org.springframework.messaging.simp.SimpMessagingTemplate
import org.springframework.stereotype.Service
import java.util.*

@Service
class ApplicationEventsService(
        val template: SimpMessagingTemplate
) {

    fun notifyInfo(message: String) {
        log.info(message)
        template.convertAndSend("/topic/ui/events",
                ApplicationEvent(
                        message = message,
                        level = Level.INFO,
                        date = Date()
                )
        )
    }

    fun notifyError(message: String) {
        log.error(message)
        template.convertAndSend("/topic/ui/events",
                ApplicationEvent(
                        message = message,
                        level = Level.ERROR,
                        date = Date()
                )
        )
    }

    companion object {
        private val log = LoggerFactory.getLogger(ApplicationEventsService.javaClass)
    }
}