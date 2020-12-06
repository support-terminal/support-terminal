package io.github.support.terminal.application.domains.common.action.entity

import io.github.support.terminal.application.domains.db_connection.entity.DbConnection
import io.github.support.terminal.application.domains.notificarion_api.entity.NotificationApi

class SqlSelectAsOneNumberValueAction(private val select: String,
                                      private val dbConnection: DbConnection<*>) : Action {
    override fun execute(params: Map<String, String>): ActionResult<*> {
        val template = dbConnection.createJdbcTemplate()
        val value = template.queryForObject(select, Double::class.java)
        return ActionResultImpl(value)
    }

    inner class ActionResultImpl(override val result: Double?) : ActionResult<Double?> {
        override fun notifyAboutResult(notificationApi: NotificationApi) {
            result?.let {
                notificationApi.sendText(result.toString())
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



