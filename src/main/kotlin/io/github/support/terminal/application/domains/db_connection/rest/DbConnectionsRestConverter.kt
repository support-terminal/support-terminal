package io.github.support.terminal.application.domains.db_connection.rest

import io.github.support.terminal.application.domains.db_connection.repository.DbConnectionDetails
import io.github.support.terminal.application.domains.db_connection.repository.MySqlDbConnectionDetails
import io.github.support.terminal.application.domains.db_connection.repository.OracleDbConnectionDetails
import io.github.support.terminal.application.domains.db_connection.repository.PostgresDbConnectionDetails
import io.github.support.terminal.application.domains.db_connection.entity.DbConnectionType
import org.springframework.stereotype.Service

@Service
class DbConnectionsRestConverter {

    fun mapToDetails(request: DbConnectionRequest): DbConnectionDetails {
        if (DbConnectionType.MYSQL.name == request.type) {
            return mapToDetails(request as MySqlDbConnectionRequest)
        } else if (DbConnectionType.POSTGRES.name == request.type) {
            return mapToDetails(request as PostgresDbConnectionRequest)
        } else if (DbConnectionType.ORACLE.name == request.type) {
            return mapToDetails(request as OracleDbConnectionRequest)
        }
        throw IllegalArgumentException("Unknown notification api type: " + request.type)
    }

    fun mapToDetails(request: MySqlDbConnectionRequest) = MySqlDbConnectionDetails(
            name = request.name,
            host = request.host,
            port = request.port,
            user = request.user,
            password = request.password,
            dbName = request.dbName
    )

    fun mapToDetails(request: PostgresDbConnectionRequest) = PostgresDbConnectionDetails(
            name = request.name,
            host = request.host,
            port = request.port,
            user = request.user,
            password = request.password,
            dbName = request.dbName
    )

    fun mapToDetails(request: OracleDbConnectionRequest) = OracleDbConnectionDetails(
            name = request.name,
            host = request.host,
            port = request.port,
            user = request.user,
            password = request.password,
            sid = request.sid
    )


    fun mapToDto(details: DbConnectionDetails): DbConnectionDTO {
        if (details is MySqlDbConnectionDetails) {
            return mapToDto(details)
        } else if (details is PostgresDbConnectionDetails) {
            return mapToDto(details)
        } else if (details is OracleDbConnectionDetails) {
            return mapToDto(details)
        }
        throw IllegalArgumentException("Unknown db connection type: " + details.type)
    }

    fun mapToDto(details: MySqlDbConnectionDetails) = MySqlDbConnectionDTO(
            id = details.id,
            name = details.name,
            host = details.host,
            port = details.port,
            user = details.user,
            password = details.password,
            dbName = details.dbName
    )

    fun mapToDto(details: PostgresDbConnectionDetails) = PostgresDbConnectionDTO(
            id = details.id,
            name = details.name,
            host = details.host,
            port = details.port,
            user = details.user,
            password = details.password,
            dbName = details.dbName
    )

    fun mapToDto(details: OracleDbConnectionDetails) = OracleDbConnectionDTO(
            id = details.id,
            name = details.name,
            host = details.host,
            port = details.port,
            user = details.user,
            password = details.password,
            sid = details.sid
    )
}