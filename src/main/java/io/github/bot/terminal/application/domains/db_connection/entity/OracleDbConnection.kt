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
}