package io.github.support.terminal.application.domains.db_connection.entity

import io.github.support.terminal.application.domains.db_connection.repository.DbConnectionRepository
import io.github.support.terminal.application.domains.db_connection.repository.PostgresDbConnectionDetails

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

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as PostgresDbConnection

        if (details != other.details) return false
        if (repository != other.repository) return false

        return true
    }

    override fun hashCode(): Int {
        var result = details.hashCode()
        result = 31 * result + repository.hashCode()
        return result
    }

}