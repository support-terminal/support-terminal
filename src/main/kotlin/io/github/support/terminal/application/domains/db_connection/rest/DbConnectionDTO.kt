package io.github.support.terminal.application.domains.db_connection.rest

import com.fasterxml.jackson.annotation.JsonSubTypes
import com.fasterxml.jackson.annotation.JsonTypeInfo
import io.github.support.terminal.application.domains.db_connection.entity.DbConnectionType

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "type", visible = true)
@JsonSubTypes(
        JsonSubTypes.Type(value = PostgresDbConnectionDTO::class, name = DbConnectionType.Constants.POSTGRES),
        JsonSubTypes.Type(value = OracleDbConnectionDTO::class, name = DbConnectionType.Constants.ORACLE),
        JsonSubTypes.Type(value = MySqlDbConnectionDTO::class, name = DbConnectionType.Constants.MYSQL))
abstract class DbConnectionDTO(
        val type: String
)

data class MySqlDbConnectionDTO (
        val id: String,
        val name: String,
        val host: String,
        val port: Int,
        val user: String,
        val password: String,
        val dbName: String
): DbConnectionDTO(DbConnectionType.Constants.MYSQL)

data class OracleDbConnectionDTO (
        val id: String,
        val name: String,
        val host: String,
        val port: Int,
        val user: String,
        val password: String,
        val sid: String
): DbConnectionDTO(DbConnectionType.Constants.ORACLE)

data class PostgresDbConnectionDTO (
        val id: String,
        val name: String,
        val host: String,
        val port: Int,
        val user: String,
        val password: String,
        val dbName: String
): DbConnectionDTO(DbConnectionType.Constants.POSTGRES)
