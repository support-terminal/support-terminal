package io.github.bot.terminal.application.domains.db_connection.entity

import io.github.bot.terminal.application.domains.db_connection.repository.DbConnectionRepository

class OracleDbConnection(override val details: OracleDbConnectionDetails,
                         private val repository: DbConnectionRepository) : DbConnection<OracleDbConnectionDetails>() {
    override val id: String
        get() = details.id

    override val url: String
        get() = "jdbc:oracle:thin:@${details.host}:${details.port}/${details.sid}"

    override val className: String
        get() = "oracle.jdbc.driver.OracleDriver"

    override val checkSelect: String
        get() = "SELECT 1 FROM DUAL"

    fun delete() {
        repository.deleteById(details.id)
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as OracleDbConnection

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