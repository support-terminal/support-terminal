package io.github.bot.terminal.application.domains.db_connection.entity

import io.github.bot.terminal.application.domains.db_connection.repository.DbConnectionRepository

class MySqlDbConnection(override val details: MySqlDbConnectionDetails,
                             private val repository: DbConnectionRepository) : DbConnection<MySqlDbConnectionDetails>() {
    override val id: String
        get() = details.id

    override val url: String
        get() = "jdbc:mysql://${details.host}:${details.port}/${details.dbName}"

    override val className: String
        get() = "com.mysql.jdbc.Driver"

    override val checkSelect: String
        get() = "SELECT 1"

    fun delete() {
        repository.deleteById(details.id)
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as MySqlDbConnection

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