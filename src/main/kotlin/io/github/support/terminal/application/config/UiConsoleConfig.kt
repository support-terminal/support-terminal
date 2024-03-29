package io.github.support.terminal.application.config

import ch.qos.logback.classic.Logger
import ch.qos.logback.classic.LoggerContext
import ch.qos.logback.classic.spi.ILoggingEvent
import ch.qos.logback.core.AppenderBase
import org.slf4j.LoggerFactory
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.messaging.simp.SimpMessagingTemplate
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

private const val UI_NOTIFICATIONS_TOPIC = "/topic/ui/events"

@Configuration
open class UiConsoleConfig {

    @Bean
    open fun logger(template: SimpMessagingTemplate): Logger {
        val lc = LoggerFactory.getILoggerFactory() as LoggerContext
        val uiConsoleLogger = LoggerFactory.getLogger("io.github.support.terminal") as Logger

        val uiAppender = UiConsoleLogsAppender(template)
        uiAppender.context = lc
        uiAppender.start()
        uiConsoleLogger.addAppender(uiAppender)
        return uiConsoleLogger
    }
}

class UiConsoleLogsAppender(private val template: SimpMessagingTemplate) : AppenderBase<ILoggingEvent>() {
    override fun append(event: ILoggingEvent) {
        template.convertAndSend(UI_NOTIFICATIONS_TOPIC,
                " ${LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss"))} - ${event.formattedMessage}")
    }
}
