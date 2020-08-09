package io.github.bot.terminal.application.domains.common.action.entity

import io.github.bot.terminal.application.domains.db_connection.entity.DbConnection
import io.github.bot.terminal.application.domains.notificarion_api.entity.Message
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi

class SqlSelectAsOneNumberValueAction(private val select: String,
                                      private val dbConnection: DbConnection<*>) : Action {
    override fun execute(): ActionResult<*> {
        return try {
            val template = dbConnection.createJdbcTemplate()
            val value = template.queryForObject(select, Double::class.java)
            ActionResultImpl(value)
        } catch (ex: Exception) {
            throw ex
        }
    }

    inner class ActionResultImpl(override val result: Double?) : ActionResult<Double?> {
        override fun notify(notificationApi: NotificationApi) {
            if (result != null) {
                notificationApi.sendMessage(Message(result.toString()))
            }
        }
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as SqlSelectAsOneNumberValueAction

        if (select != other.select) return false
        if (dbConnection != other.dbConnection) return false

        return true
    }

    override fun hashCode(): Int {
        var result = select.hashCode()
        result = 31 * result + dbConnection.hashCode()
        return result
    }
}



