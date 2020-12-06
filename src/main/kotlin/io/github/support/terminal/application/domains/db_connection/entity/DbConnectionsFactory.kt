package io.github.support.terminal.application.domains.db_connection.entity

import io.github.support.terminal.application.domains.db_connection.repository.*
import org.springframework.stereotype.Service

@Service
class DbConnectionsFactory (
        private val repository: DbConnectionRepository
){
    fun createNew(details: DbConnectionDetails): DbConnection<*> {
        val dbConnection = build(details)
        repository.add(details)
        return dbConnection
    }

    fun update(id: String, detailsUpdate: DbConnectionDetails): DbConnection<*> {
        val details = getById(id)
        val updatedDetails = details.merge(detailsUpdate)
        val dbConnection = build(updatedDetails)
        repository.update(updatedDetails)
        return dbConnection
    }

    fun build(details: DbConnectionDetails): DbConnection<*> =
            when(details) {
                is PostgresDbConnectionDetails -> PostgresDbConnection(details, repository)
                is MySqlDbConnectionDetails -> MySqlDbConnection(details, repository)
                is OracleDbConnectionDetails -> OracleDbConnection(details, repository)
            }

    fun all(): List<DbConnection<*>> = repository.findAll()
            .map { details: DbConnectionDetails -> build(details) }

    fun byId(id: String): DbConnection<*> {
        return build(getById(id))
    }

    private fun getById(id: String): DbConnectionDetails
            = repository.findById(id) ?: throw IllegalArgumentException("DbConnection not found by id=${id}")

    fun delete(id: String) {
        repository.findById(id)?.let {
            repository.deleteById(id)
        }
    }
}