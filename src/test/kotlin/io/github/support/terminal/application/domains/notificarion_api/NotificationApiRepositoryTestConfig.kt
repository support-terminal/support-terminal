package io.github.support.terminal.application.domains.notificarion_api

import io.github.support.terminal.application.domains.TestNitriteDataBaseConfiguration
import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Import

@Configuration
@Import(TestNitriteDataBaseConfiguration::class)
@ComponentScan(
        "io.github.support.terminal.application.domains.notificarion_api.repository",
        "io.github.support.terminal.application.domains.notificarion_api.config")
open class NotificationApiRepositoryTestConfig
