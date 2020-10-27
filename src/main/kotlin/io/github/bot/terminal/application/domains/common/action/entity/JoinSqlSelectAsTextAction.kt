package io.github.bot.terminal.application.domains.common.action.entity

import io.github.bot.terminal.application.domains.db_connection.entity.DbConnection
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi
import org.apache.commons.text.StringSubstitutor
import java.util.function.Consumer
import kotlin.collections.HashMap

class JoinSqlSelectAsTextAction(private val joins: Collection<SqlSelectAsTextAction>,
                                private val select : String,
                                private val resultTemplate: String) : Action {

    override fun execute(params: Map<String, String>): ActionResult<*> {

        //создаем временные таблицы в H2 по кадому селекту

        //делаем select из H2

        //формируем результат
        return EmptyResult()
    }


    inner class ActionResultImpl(override val result: String?) : ActionResult<String?> {
        override fun notifyAboutResult(notificationApi: NotificationApi) {
            result?.let {
                notificationApi.sendText(result)
            }
        }
    }

}

