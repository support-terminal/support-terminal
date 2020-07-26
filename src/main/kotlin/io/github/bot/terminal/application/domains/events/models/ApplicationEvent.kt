package io.github.bot.terminal.application.domains.events.models

import java.util.*

data class ApplicationEvent(
        val message: String,
        val level: Level,
        val date: Date
)

enum class Level {
    INFO, ERROR
}
