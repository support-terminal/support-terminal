package io.github.bot.terminal.application.domains.common.action.entity

import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi
import org.apache.commons.text.StringSubstitutor

class JoinSqlSelectAsTextAction(private val queries: List<SqlSelect>,
                                private val select: String,
                                private val resultTemplate: String,
                                private val inMemoryDataBase: InMemoryRelationalDataBase) : Action {

    override fun execute(params: Map<String, String>): ActionResult<*> {
        val responseBuilder = StringBuilder()
        for (row in buildInMemoryScope(params) { inMemoryDataBase.select(params, select) }) {
            responseBuilder.append(renderRow(row))
            responseBuilder.append(System.lineSeparator())
        }
        val responseMessage = if (responseBuilder.isNotEmpty()) {
            responseBuilder.toString()
        } else {
            "Could not perform command. Empty result"
        }
        return ActionResultImpl(responseMessage)
    }

    private fun buildInMemoryScope(params: Map<String, String>, performJoinQuery: () -> List<Map<String, Any>>): List<Map<String, Any>> =
            try {
                queries.forEach {
                    inMemoryDataBase.addTable(it.name, it.execute(params))
                }
                performJoinQuery()
            } catch (e: Exception) {
                listOf()
            } finally {
                queries.forEach {
                    inMemoryDataBase.dropTable(it.name)
                }
            }


    private fun renderRow(row: Map<String, Any>): String {
        val model: MutableMap<String, Any?> = HashMap()
        row.keys.forEach { k: String ->
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

