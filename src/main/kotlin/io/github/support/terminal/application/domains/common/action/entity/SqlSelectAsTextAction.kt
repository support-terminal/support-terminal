package io.github.support.terminal.application.domains.common.action.entity

import io.github.support.terminal.application.domains.db_connection.entity.DbConnection
import io.github.support.terminal.application.domains.notificarion_api.entity.NotificationApi
import org.apache.commons.text.StringSubstitutor
import java.util.function.Consumer

class SqlSelectAsTextAction(private val select: String,
                            private val resultTemplate: String,
                            private val dbConnection: DbConnection<*>) : Action {

    override fun execute(params: Map<String, String>): ActionResult<*> {
        val template = dbConnection.createJdbcTemplate()
        val rows = template.queryForList(StringSubstitutor(params).replace(select))
        val responseBuilder = StringBuilder()
        for (row in rows) {
            responseBuilder.append(renderRow(row))
            responseBuilder.append(System.lineSeparator())
        }
        val responseMessage = responseBuilder.toString()
        return ActionResultImpl(responseMessage)
    }

    private fun renderRow(row: Map<String, Any>): String {
        val model: MutableMap<String, Any?> = HashMap()
        row.keys.forEach(Consumer { k: String ->
            model[k] = row[k]
            model[k.toLowerCase()] = row[k]
        })
        val sub = StringSubstitutor(model)
        return sub.replace(resultTemplate)
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as SqlSelectAsTextAction

        if (select != other.select) return false
        if (resultTemplate != other.resultTemplate) return false
        if (dbConnection != other.dbConnection) return false

        return true
    }

    override fun hashCode(): Int {
        var result = select.hashCode()
        result = 31 * result + resultTemplate.hashCode()
        result = 31 * result + dbConnection.hashCode()
        return result
    }

    inner class ActionResultImpl(override val result: String?) : ActionResult<String?> {
        override fun notifyAboutResult(notificationApi: NotificationApi) {
            result?.let {
                notificationApi.sendText(result)
            }
        }
    }

}

