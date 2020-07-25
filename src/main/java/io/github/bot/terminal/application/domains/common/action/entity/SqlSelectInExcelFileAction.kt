package io.github.bot.terminal.application.domains.common.action.entity

import com.fasterxml.jackson.databind.util.StdDateFormat
import io.github.bot.terminal.application.domains.common.services.ExcelManagerService
import io.github.bot.terminal.application.domains.db_connection.entity.DbConnection
import io.github.bot.terminal.application.domains.integrations.DocumentFile
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi
import org.apache.commons.text.StringSubstitutor
import java.io.IOException
import java.text.DateFormat
import java.util.*

class SqlSelectInExcelFileAction(private val select: String,
                                 private val fileNameTemplate: String,
                                 private val dbConnection: DbConnection<*>,
                                 private val excelManagerService: ExcelManagerService) : Action {

    private val df: DateFormat = StdDateFormat()

    override fun execute(): ActionResult<*> {
        return try {
            val template = dbConnection.createJdbcTemplate()
            val rows = template.queryForList(select)
            try {
                val file = excelManagerService.createExcelDocumentFile(
                        getExcelFileName(fileNameTemplate) + ".xls", rows)
                ActionResultImpl(file)
            } catch (e: IOException) {
                throw e
            }
        } catch (e: Exception) {
            throw e
        }
    }

    private fun getExcelFileName(fileNameTemplate: String): String {
        val model: MutableMap<String, Any?> = HashMap()
        model["now"] = df.format(Date())
        val sub = StringSubstitutor(model)
        return sub.replace(fileNameTemplate)
    }

    inner class ActionResultImpl(override val result: DocumentFile) : ActionResult<DocumentFile> {
        override fun notify(notificationApi: NotificationApi) {
            notificationApi.sendDocument(result)
        }
    }

}