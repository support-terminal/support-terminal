package io.github.support.terminal.application.domains.db_connection.config

import io.github.support.terminal.application.domains.db_connection.repository.DbConnectionDetails
import org.dizitart.no2.Nitrite
import org.dizitart.no2.objects.ObjectRepository
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
open class DbConnectionsConfig {
    @Bean
    open fun dbConnectionDetailsObjectRepository(db: Nitrite): ObjectRepository<DbConnectionDetails> {
        return db.getRepository(DbConnectionDetails::class.java)
    }
}