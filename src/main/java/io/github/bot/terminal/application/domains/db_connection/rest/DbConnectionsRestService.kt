package io.github.bot.terminal.application.domains.db_connection.rest

import io.github.bot.terminal.application.domains.db_connection.entity.DbConnection
import io.github.bot.terminal.application.domains.db_connection.factory.DbConnectionsFactory
import io.github.bot.terminal.application.domains.db_connection.repository.DbConnectionRepository
import io.github.bot.terminal.application.domains.db_connection.rest.dto.CheckDbConnectionDTO
import io.github.bot.terminal.application.domains.db_connection.rest.dto.DbConnectionDTO
import io.github.bot.terminal.application.domains.db_connection.rest.dto.DbConnectionTypeDTO
import io.github.bot.terminal.application.domains.db_connection.rest.requests.DbConnectionRequest
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType
import org.springframework.stereotype.Service
import java.util.*
import java.util.stream.Collectors

@Service
class DbConnectionsRestService (
    private val repository: DbConnectionRepository,
    private val factory: DbConnectionsFactory,
    private val converter: DbConnectionsRestConverter
){

    fun add(notificationApiRequest: DbConnectionRequest): DbConnectionDTO {
        val dbConnection = factory.createNew(
                converter.mapToDetails(notificationApiRequest)
        )
        return converter.mapToDto(dbConnection.details)
    }

    fun edit(id: String, request: DbConnectionRequest): DbConnectionDTO {
        val dbConnection = factory.merge(id, converter.mapToDetails(request))
        return converter.mapToDto(dbConnection.details)
    }

    operator fun get(id: String): DbConnectionDTO {
        val dbConnection = factory.byId(id)
        return converter.mapToDto(dbConnection.details)
    }

    fun list(): List<DbConnectionDTO> {
        return factory.all
                .stream()
                .map { c: DbConnection<*> -> converter.mapToDto(c.details) }
                .collect(Collectors.toList())
    }

    fun delete(id: String) {
        val dbConnection = factory.byId(id)
        repository.deleteById(dbConnection.id)
    }

    fun types(): List<DbConnectionTypeDTO> {
        return Arrays.stream(DbConnectionType.values())
                .map { e: DbConnectionType -> DbConnectionTypeDTO(e.label, e.name) }
                .collect(Collectors.toList())
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