package io.github.support.terminal.application.domains.db_connection.rest

import io.github.support.terminal.application.domains.db_connection.entity.DbConnection
import io.github.support.terminal.application.domains.db_connection.entity.DbConnectionsFactory
import io.github.support.terminal.application.domains.db_connection.entity.DbConnectionType
import org.springframework.stereotype.Service

@Service
class DbConnectionsRestService(
        private val factory: DbConnectionsFactory,
        private val converter: DbConnectionsRestConverter
) {

    fun add(request: DbConnectionRequest): DbConnectionDTO {
        val dbConnection = factory.createNew(details = converter.mapToDetails(request))
        return converter.mapToDto(dbConnection.details)
    }

    fun edit(id: String, request: DbConnectionRequest): DbConnectionDTO {
        val dbConnection = factory.update(id, converter.mapToDetails(request))
        return converter.mapToDto(dbConnection.details)
    }

    fun get(id: String): DbConnectionDTO {
        val dbConnection = factory.byId(id)
        return converter.mapToDto(dbConnection.details)
    }

    fun list(): List<DbConnectionDTO> {
        return factory.all()
                .map { c: DbConnection<*> -> converter.mapToDto(c.details) }
    }

    fun delete(id: String) {
        factory.delete(id)
    }

    fun types(): List<DbConnectionTypeDTO> {
        return DbConnectionType.values()
                .map { e: DbConnectionType -> DbConnectionTypeDTO(e.label, e.name) }
    }

    fun check(request: DbConnectionRequest): CheckDbConnectionDTO {
        val dbConnection = factory.build(
                converter.mapToDetails(request)
        )
        return try {
            dbConnection.check()
            CheckDbConnectionDTO(true)
        } catch (ex: Exception) {
            CheckDbConnectionDTO(false)
        }
    }
}