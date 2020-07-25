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

}