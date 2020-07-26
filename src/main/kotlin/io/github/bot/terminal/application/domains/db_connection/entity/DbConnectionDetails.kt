package io.github.bot.terminal.application.domains.db_connection.entity

import com.fasterxml.jackson.annotation.JsonSubTypes
import com.fasterxml.jackson.annotation.JsonTypeInfo
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApiDetails
import io.github.bot.terminal.application.domains.notificarion_api.entity.SlackNotificationApiDetails
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
abstract class DbConnectionDetails(
        @Id
        val id: String,
        var name: String,
        var type: DbConnectionType,
        var host: String,
        var port: Int,
        var user: String,
        var password: String
) {
    open fun merge(update: DbConnectionDetails) {
        name = update.name
        host = update.host
        port = update.port
        user = update.user
        password = update.password
    }
}

class MySqlDbConnectionDetails(
        id: String = UUID.randomUUID().toString(),
        name: String,
        host: String,
        port: Int,
        user: String,
        password: String,
        var dbName: String
) : DbConnectionDetails(id, name, DbConnectionType.MYSQL, host, port, user, password) {
    override fun merge(detailsUpdate: DbConnectionDetails) {
        if(detailsUpdate is MySqlDbConnectionDetails){
            super.merge(detailsUpdate)
            dbName = detailsUpdate.dbName
        }
    }
}


class OracleDbConnectionDetails(
        id: String = UUID.randomUUID().toString(),
        name: String,
        host: String,
        port: Int,
        user: String,
        password: String,
        var sid: String
) : DbConnectionDetails(id, name, DbConnectionType.ORACLE, host, port, user, password) {
    override fun merge(detailsUpdate: DbConnectionDetails) {
        if(detailsUpdate is OracleDbConnectionDetails){
            super.merge(detailsUpdate)
            sid = detailsUpdate.sid
        }
    }
}

class PostgresDbConnectionDetails(
        id: String = UUID.randomUUID().toString(),
        name: String,
        host: String,
        port: Int,
        user: String,
        password: String,
        var dbName: String
) : DbConnectionDetails(id, name, DbConnectionType.POSTGRES, host, port, user, password) {
    override fun merge(detailsUpdate: DbConnectionDetails) {
        if(detailsUpdate is PostgresDbConnectionDetails){
            super.merge(detailsUpdate)
            dbName = detailsUpdate.dbName
        }
    }
}



