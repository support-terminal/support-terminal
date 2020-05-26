package io.github.bot.terminal.application.domains.monitoring;

import io.github.bot.terminal.application.domains.TestNitriteDataBaseConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import(TestNitriteDataBaseConfiguration.class)
@ComponentScan({
        "io.github.bot.terminal.application.domains.monitoring.config",
        "io.github.bot.terminal.application.domains.monitoring.repository"
})
public class MonitoringTasksRepositoryTestConfig {

}
