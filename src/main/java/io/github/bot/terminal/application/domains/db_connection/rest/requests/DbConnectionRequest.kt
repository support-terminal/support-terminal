package io.github.bot.terminal.application.domains.db_connection.rest.requests

import com.fasterxml.jackson.annotation.JsonSubTypes
import com.fasterxml.jackson.annotation.JsonTypeInfo
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType
import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotNull

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "type", visible = true)
@JsonSubTypes(
        JsonSubTypes.Type(value = PostgresDbConnectionRequest::class, name = DbConnectionType.Constants.POSTGRES),
        JsonSubTypes.Type(value = OracleDbConnectionRequest::class, name = DbConnectionType.Constants.ORACLE),
        JsonSubTypes.Type(value = MySqlDbConnectionRequest::class, name = DbConnectionType.Constants.MYSQL))
interface DbConnectionRequest {
    val type: String
    val name: String
    val host: String
    val port: Int
    val user: String
    val password: String
}

class MySqlDbConnectionRequest (
        override val type: String = DbConnectionType.Constants.MYSQL,
        override val name: String,
        override val host: String,
        override val port: Int,
        override val user: String,
        override val password: String,
        val dbName: String
): DbConnectionRequest

class OracleDbConnectionRequest (
        override val type: String = DbConnectionType.Constants.ORACLE,
        override val name: String,
        override val host: String,
        override val port: Int,
        override val user: String,
        override val password: String,
        val sid: String
): DbConnectionRequest

class PostgresDbConnectionRequest (
        override val type: String = DbConnectionType.Constants.POSTGRES,
        override val name: String,
        override val host: String,
        override val port: Int,
        override val user: String,
        override val password: String,
        val dbName: String
): DbConnectionRequest