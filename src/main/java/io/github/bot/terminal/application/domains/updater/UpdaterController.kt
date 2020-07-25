package io.github.bot.terminal.application.domains.updater

import io.github.bot.terminal.application.domains.updater.services.UpdaterService
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class UpdaterController {
    private val updaterService: UpdaterService? = null

    @PostMapping("/api/run-auto-update")
    @Throws(Exception::class)
    fun runAutoUpdate() {
        updaterService!!.runAutoUpdate()
    }
}