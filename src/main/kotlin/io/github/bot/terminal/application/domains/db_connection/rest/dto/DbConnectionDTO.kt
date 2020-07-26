package io.github.bot.terminal.application.domains.db_connection.rest.dto

import com.fasterxml.jackson.annotation.JsonSubTypes
import com.fasterxml.jackson.annotation.JsonTypeInfo
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "type", visible = true)
@JsonSubTypes(
        JsonSubTypes.Type(value = PostgresDbConnectionDTO::class, name = DbConnectionType.Constants.POSTGRES),
        JsonSubTypes.Type(value = OracleDbConnectionDTO::class, name = DbConnectionType.Constants.ORACLE),
        JsonSubTypes.Type(value = MySqlDbConnectionDTO::class, name = DbConnectionType.Constants.MYSQL))
abstract class DbConnectionDTO(
        val type: String
)

class MySqlDbConnectionDTO (
        val id: String,
        val name: String,
        val host: String,
        val port: Int,
        val user: String,
        val password: String,
        val dbName: String
): DbConnectionDTO(DbConnectionType.Constants.MYSQL)

class OracleDbConnectionDTO (
        val id: String,
        val name: String,
        val host: String,
        val port: Int,
        val user: String,
        val password: String,
        val sid: String
): DbConnectionDTO(DbConnectionType.Constants.ORACLE)

class PostgresDbConnectionDTO (
        val id: String,
        val name: String,
        val host: String,
        val port: Int,
        val user: String,
        val password: String,
        val dbName: String
): DbConnectionDTO(DbConnectionType.Constants.POSTGRES)
