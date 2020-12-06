package io.github.support.terminal.application.domains

import org.dizitart.no2.Nitrite
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
open class TestNitriteDataBaseConfiguration {

    @Bean(destroyMethod = "close")
    open fun getNitriteInMemory(): Nitrite = Nitrite.builder()
            .compressed()
            .openOrCreate()

}
