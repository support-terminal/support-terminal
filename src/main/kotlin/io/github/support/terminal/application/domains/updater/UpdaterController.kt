package io.github.support.terminal.application.domains.updater

import io.github.support.terminal.application.domains.updater.services.UpdaterService
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class UpdaterController(
    private val updaterService: UpdaterService
) {

    @PostMapping("/api/run-auto-update")
    @Throws(Exception::class)
    fun runAutoUpdate() {
        updaterService.runAutoUpdate()
    }
}
