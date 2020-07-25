package io.github.bot.terminal.application.domains.db_connection.entity

import io.github.bot.terminal.application.domains.db_connection.repository.DbConnectionRepository

class PostgresDbConnection(override val details: PostgresDbConnectionDetails,
                           private val repository: DbConnectionRepository) : DbConnection<PostgresDbConnectionDetails>() {
    override val id: String
        get() = details.id

    override val url: String
        get() = "jdbc:postgresql://${details.host}:${details.port}/${details.dbName}"

    override val className: String
        get() = "org.postgresql.Driver"

    override val checkSelect: String
        get() = "SELECT 1"

    fun delete() {
        repository.deleteById(details.id)
    }

}