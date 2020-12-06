package io.github.support.terminal.application.config

import org.dizitart.no2.Nitrite
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
open class NitriteDataBaseConfiguration {
    @Value("\${storage_path}")
    private val STORAGE_PATH: String? = null

    @Bean(destroyMethod = "close")
    open fun getNitrite(): Nitrite? {
        return Nitrite.builder()
                .compressed()
                .filePath(STORAGE_PATH)
                .openOrCreate()
    }

}