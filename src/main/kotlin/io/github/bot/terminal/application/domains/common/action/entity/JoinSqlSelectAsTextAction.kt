package io.github.bot.terminal.application.domains.common.action.entity

import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi
import org.apache.commons.text.StringSubstitutor

class JoinSqlSelectAsTextAction(private val queries: List<SqlSelect>,
                                private val select: String,
                                private val resultTemplate: String,
                                private val h2InMemory: H2InMemory) : Action {

    override fun execute(params: Map<String, String>): ActionResult<*> {
        //создаем временные таблицы в H2 по кадому селекту
        queries.forEach {
            h2InMemory.addTable(it.name, it.execute(params))
        }
        val rows = h2InMemory.select(params, select)
        queries.forEach {
            h2InMemory.dropTable(it.name)
        }
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
        row.keys.forEach{ k: String ->
            model[k] = row[k]
            model[k.toLowerCase()] = row[k]
        }
        val sub = StringSubstitutor(model)
        return sub.replace(resultTemplate)
    }

    inner class ActionResultImpl(override val result: String?) : ActionResult<String?> {
        override fun notifyAboutResult(notificationApi: NotificationApi) {
            result?.let {
                notificationApi.sendText(result)
            }
        }
    }

}

