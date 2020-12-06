package io.github.support.terminal.application.domains.db_connection.repository

import com.fasterxml.jackson.annotation.JsonSubTypes
import com.fasterxml.jackson.annotation.JsonTypeInfo
import io.github.support.terminal.application.domains.db_connection.entity.DbConnectionType
import org.dizitart.no2.objects.Id
import java.util.*

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "type", visible = true)
@JsonSubTypes(
        JsonSubTypes.Type(value = PostgresDbConnectionDetails::class,
                name = DbConnectionType.Constants.POSTGRES),
        JsonSubTypes.Type(value = OracleDbConnectionDetails::class,
                name = DbConnectionType.Constants.ORACLE),
        JsonSubTypes.Type(value = MySqlDbConnectionDetails::class,
                name = DbConnectionType.Constants.MYSQL)
)
sealed class DbConnectionDetails(@Id open val id: String) {
    abstract val name: String
    abstract val type: DbConnectionType
    abstract val host: String
    abstract val port: Int
    abstract val user: String
    abstract val password: String
    abstract fun merge(update: DbConnectionDetails): DbConnectionDetails
}

data class MySqlDbConnectionDetails(
        override val id: String = UUID.randomUUID().toString(),
        override val name: String,
        override val host: String,
        override val port: Int,
        override val user: String,
        override val password: String,
        val dbName: String
) : DbConnectionDetails(id) {
    override val type: DbConnectionType = DbConnectionType.MYSQL

    override fun merge(update: DbConnectionDetails) =
            if (update is MySqlDbConnectionDetails) {
                this.copy(
                        name = update.name,
                        host = update.host,
                        port = update.port,
                        user = update.user,
                        password = update.password,
                        dbName = update.dbName
                )
            } else {
                this
            }
}


data class OracleDbConnectionDetails(
        override val id: String = UUID.randomUUID().toString(),
        override val name: String,
        override val host: String,
        override val port: Int,
        override val user: String,
        override val password: String,
        val sid: String
) : DbConnectionDetails(id) {
    override val type: DbConnectionType = DbConnectionType.ORACLE

    override fun merge(update: DbConnectionDetails) =
            if (update is OracleDbConnectionDetails) {
                this.copy(
                        name = update.name,
                        host = update.host,
                        port = update.port,
                        user = update.user,
                        password = update.password,
                        sid = update.sid
                )
            } else {
                this
            }
}

data class PostgresDbConnectionDetails(
        override val id: String = UUID.randomUUID().toString(),
        override val name: String,
        override val host: String,
        override val port: Int,
        override val user: String,
        override val password: String,
        val dbName: String
) : DbConnectionDetails(id) {
    override val type: DbConnectionType = DbConnectionType.POSTGRES

    override fun merge(update: DbConnectionDetails) =
            if (update is PostgresDbConnectionDetails) {
                this.copy(
                        name = update.name,
                        host = update.host,
                        port = update.port,
                        user = update.user,
                        password = update.password,
                        dbName = update.dbName
                )
            } else {
                this
            }
}



