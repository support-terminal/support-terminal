package io.github.bot.terminal.application.domains.common.action.entity

import io.github.bot.terminal.application.domains.db_connection.entity.DbConnection
import io.github.bot.terminal.application.domains.notificarion_api.entity.Message
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi
import org.apache.commons.text.StringSubstitutor
import java.util.*
import java.util.function.Consumer
import kotlin.collections.HashMap

class SqlSelectAsTextAction(private val select: String,
                            private val resultTemplate: String,
                            private val dbConnection: DbConnection<*>) : Action {

    override fun execute(): ActionResult<*> {
        return try {
            val template = dbConnection.createJdbcTemplate()
            val rows = template.queryForList(select)
            val responseBuilder = StringBuilder()
            for (row in rows) {
                responseBuilder.append(renderRow(row))
                responseBuilder.append(System.lineSeparator())
            }
            val responseMessage = responseBuilder.toString()
            ActionResultImpl(responseMessage)
        } catch (ex: Exception) {
            throw ex
        }
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

    inner class ActionResultImpl(override val result: String?) : ActionResult<String?> {
        override fun notify(notificationApi: NotificationApi) {
            if(result != null){
                notificationApi.sendMessage(Message(result))
            }
        }
    }

}
