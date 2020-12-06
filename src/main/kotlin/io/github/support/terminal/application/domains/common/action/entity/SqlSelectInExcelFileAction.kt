package io.github.support.terminal.application.domains.common.action.entity

import com.fasterxml.jackson.databind.util.StdDateFormat
import io.github.support.terminal.application.domains.common.services.ExcelManagerService
import io.github.support.terminal.application.domains.db_connection.entity.DbConnection
import io.github.support.terminal.application.domains.integrations.DocumentFile
import io.github.support.terminal.application.domains.notificarion_api.entity.NotificationApi
import org.apache.commons.text.StringSubstitutor
import java.io.IOException
import java.text.DateFormat
import java.util.*

class SqlSelectInExcelFileAction(private val select: String,
                                 private val fileNameTemplate: String,
                                 private val dbConnection: DbConnection<*>,
                                 private val excelManagerService: ExcelManagerService) : Action {

    private val df: DateFormat = StdDateFormat()

    override fun execute(params: Map<String, String>): ActionResult<*> {
            val template = dbConnection.createJdbcTemplate()
            val rows = template.queryForList(select)
            try {
                val file = excelManagerService.createExcelDocumentFile(
                        getExcelFileName(fileNameTemplate) + ".xls", rows)
                return ActionResultImpl(file)
            } catch (e: IOException) {
                throw e
            }
    }

    private fun getExcelFileName(fileNameTemplate: String): String {
        val model: MutableMap<String, Any?> = HashMap()
        model["now"] = df.format(Date())
        val sub = StringSubstitutor(model)
        return sub.replace(fileNameTemplate)
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as SqlSelectInExcelFileAction

        if (select != other.select) return false
        if (fileNameTemplate != other.fileNameTemplate) return false
        if (dbConnection != other.dbConnection) return false
        if (excelManagerService != other.excelManagerService) return false
        if (df != other.df) return false

        return true
    }

    override fun hashCode(): Int {
        var result = select.hashCode()
        result = 31 * result + fileNameTemplate.hashCode()
        result = 31 * result + dbConnection.hashCode()
        result = 31 * result + excelManagerService.hashCode()
        result = 31 * result + df.hashCode()
        return result
    }

    inner class ActionResultImpl(override val result: DocumentFile) : ActionResult<DocumentFile> {
        override fun notifyAboutResult(notificationApi: NotificationApi) {
            result?.let {
                notificationApi.sendDocument(result)
            }
        }
    }


}