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
        open val id: String,
        open var name: String,
        open var type: DbConnectionType,
        open var host: String,
        open var port: Int,
        open var user: String,
        open var password: String
) {
    open fun merge(update: DbConnectionDetails) {
        name = update.name
        host = update.host
        port = update.port
        user = update.user
        password = update.password
    }
}

data class MySqlDbConnectionDetails(
        override var id: String = UUID.randomUUID().toString(),
        override var name: String,
        override var host: String,
        override var port: Int,
        override var user: String,
        override var password: String,
        var dbName: String
) : DbConnectionDetails(id, name, DbConnectionType.MYSQL, host, port, user, password) {
    override fun merge(detailsUpdate: DbConnectionDetails) {
        if(detailsUpdate is MySqlDbConnectionDetails){
            super.merge(detailsUpdate)
            dbName = detailsUpdate.dbName
        }
    }
}


data class OracleDbConnectionDetails(
        override var id: String = UUID.randomUUID().toString(),
        override var name: String,
        override var host: String,
        override var port: Int,
        override var user: String,
        override var password: String,
        var sid: String
) : DbConnectionDetails(id, name, DbConnectionType.ORACLE, host, port, user, password) {
    override fun merge(detailsUpdate: DbConnectionDetails) {
        if(detailsUpdate is OracleDbConnectionDetails){
            super.merge(detailsUpdate)
            sid = detailsUpdate.sid
        }
    }
}

data class PostgresDbConnectionDetails(
        override var id: String = UUID.randomUUID().toString(),
        override var name: String,
        override var host: String,
        override var port: Int,
        override var user: String,
        override var password: String,
        var dbName: String
) : DbConnectionDetails(id, name, DbConnectionType.POSTGRES, host, port, user, password) {
    override fun merge(detailsUpdate: DbConnectionDetails) {
        if(detailsUpdate is PostgresDbConnectionDetails){
            super.merge(detailsUpdate)
            dbName = detailsUpdate.dbName
        }
    }
}



