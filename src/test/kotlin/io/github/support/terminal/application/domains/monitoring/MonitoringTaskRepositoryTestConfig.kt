package io.github.support.terminal.application.domains.monitoring

import io.github.support.terminal.application.domains.TestNitriteDataBaseConfiguration
import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Import

@Configuration
@Import(TestNitriteDataBaseConfiguration::class)
@ComponentScan(
        "io.github.support.terminal.application.domains.monitoring.repository",
        "io.github.support.terminal.application.domains.monitoring.config")
open class MonitoringTaskRepositoryTestConfig
