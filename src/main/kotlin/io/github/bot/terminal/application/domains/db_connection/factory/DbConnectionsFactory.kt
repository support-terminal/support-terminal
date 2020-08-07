package io.github.bot.terminal.application.domains.db_connection.factory

import io.github.bot.terminal.application.domains.db_connection.entity.*
import io.github.bot.terminal.application.domains.db_connection.repository.DbConnectionRepository
import org.springframework.stereotype.Service

@Service
class DbConnectionsFactory (
        private val repository: DbConnectionRepository
){
    fun createNew(details: DbConnectionDetails): DbConnection<*> {
        val dbConnection = build(details)
        repository.add(details)
        return dbConnection;
    }

    fun update(id: String, detailsUpdate: DbConnectionDetails): DbConnection<*> {
        val details = getById(id)
        details.merge(detailsUpdate)
        val dbConnection = build(details)
        repository.update(details)
        return dbConnection
    }

    fun build(details: DbConnectionDetails): DbConnection<*> {
        if (details is PostgresDbConnectionDetails) {
            return PostgresDbConnection(details, repository)
        } else if (details is MySqlDbConnectionDetails) {
            return MySqlDbConnection(details, repository)
        } else if (details is OracleDbConnectionDetails) {
            return OracleDbConnection(details, repository)
        }
        throw IllegalArgumentException("Unknown db connection type")
    }

    fun all(): List<DbConnection<*>> = repository.findAll()
            .map { details: DbConnectionDetails -> build(details) }
            .toList()

    fun byId(id: String): DbConnection<*> {
        return build(getById(id))
    }

    fun getById(id: String): DbConnectionDetails
            = repository.findById(id) ?: throw IllegalArgumentException("DbConnection not found by id=${id}")

    fun delete(id: String) {
        repository.findById(id)?.let {
            repository.deleteById(id)
        }
    }
}