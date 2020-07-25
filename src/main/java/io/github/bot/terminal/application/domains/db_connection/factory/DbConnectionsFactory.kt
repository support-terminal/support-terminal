package io.github.bot.terminal.application.domains.db_connection.factory

import io.github.bot.terminal.application.domains.db_connection.entity.*
import io.github.bot.terminal.application.domains.db_connection.repository.DbConnectionRepository
import org.springframework.stereotype.Service
import java.util.stream.Collectors

@Service
class DbConnectionsFactory (
        private val repository: DbConnectionRepository
){
    fun createNew(details: DbConnectionDetails): DbConnection<*> {
        repository.add(details)
        return build(details)
    }

    fun byId(id: String): DbConnection<*> {
        val details = getById(id)
        return build(details)
    }

    fun merge(id: String, detailsUpdate: DbConnectionDetails): DbConnection<*> {
        val details = getById(id)
        details.merge(detailsUpdate)
        repository.update(details)
        return build(details)
    }

    private fun getById(id: String): DbConnectionDetails {
        return repository.findById(id)
                .orElseThrow { IllegalArgumentException("Notification API not found: id=$id") }
    }

    fun build(details: DbConnectionDetails): DbConnection<*> {
        if (details is MySqlDbConnectionDetails) {
            return createDetails(details)
        } else if (details is PostgresDbConnectionDetails) {
            return createDetails(details)
        } else if (details is OracleDbConnectionDetails) {
            return createDetails(details)
        }
        throw IllegalArgumentException("Unknown db connection api type: " + details.type)
    }

    private fun createDetails(details: MySqlDbConnectionDetails): DbConnection<*> {
        return MySqlDbConnection(details, repository)
    }

    private fun createDetails(details: PostgresDbConnectionDetails): DbConnection<PostgresDbConnectionDetails> {
        return PostgresDbConnection(details, repository)
    }

    private fun createDetails(details: OracleDbConnectionDetails): DbConnection<OracleDbConnectionDetails> {
        return OracleDbConnection(details, repository)
    }

    val all: List<DbConnection<*>>
        get() = repository.findAll().stream()
                .map { details: DbConnectionDetails -> build(details) }.collect(Collectors.toList())
}