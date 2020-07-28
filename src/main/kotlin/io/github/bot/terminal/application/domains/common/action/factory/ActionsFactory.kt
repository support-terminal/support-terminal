package io.github.bot.terminal.application.domains.common.action.factory

import io.github.bot.terminal.application.domains.common.action.entity.*
import io.github.bot.terminal.application.domains.common.action.values.ActionType
import io.github.bot.terminal.application.domains.common.services.ExcelManagerService
import io.github.bot.terminal.application.domains.db_connection.factory.DbConnectionsFactory
import org.springframework.stereotype.Service

@Service
class ActionsFactory(
        private val dbConnectionsFactory: DbConnectionsFactory,
        private val excelManagerService: ExcelManagerService
) {

    fun build(actionDetails: ActionDetails): Action =
            when (actionDetails.type) {
                ActionType.SQL_SELECT_AS_TEXT -> {
                    val details = actionDetails as SqlSelectAsTextActionDetails
                    val dbConnection = dbConnectionsFactory.byId(details.dbConnectionId)
                    SqlSelectAsTextAction(
                            select = details.select,
                            resultTemplate = details.resultTemplate,
                            dbConnection = dbConnection)
                }
                ActionType.SQL_SELECT_IN_EXCEL_FILE -> {
                    val details = actionDetails as SqlSelectInExcelFileActionDetails
                    val dbConnection = dbConnectionsFactory.byId(details.dbConnectionId)
                    SqlSelectInExcelFileAction(
                            select = details.select,
                            fileNameTemplate = details.fileNameTemplate,
                            dbConnection = dbConnection,
                            excelManagerService = excelManagerService
                    )
                }
                ActionType.SQL_SELECT_AS_ONE_NUMBER -> {
                    val details = actionDetails as SqlSelectAsOneNumberValueActionDetails
                    val dbConnection = dbConnectionsFactory.byId(details.dbConnectionId)
                    SqlSelectAsOneNumberValueAction(
                            select = details.select,
                            dbConnection = dbConnection
                    )
                }
            }
}