package io.github.support.terminal.application.domains.common.action

import io.github.support.terminal.application.domains.common.action.entity.*
import io.github.support.terminal.application.domains.common.action.entity.ActionType
import org.springframework.stereotype.Service

@Service
class ActionRestConverter {
    fun mapToDetails(request: ActionRequest): ActionDetails =
            when (request.type) {
                ActionType.SQL_SELECT_AS_TEXT.name ->
                    mapToDetails(request as SqlSelectAsTextActionRequest)

                ActionType.SQL_SELECT_IN_EXCEL_FILE.name ->
                    mapToDetails(request as SqlSelectAsExcelFileActionRequest)

                ActionType.SQL_SELECT_AS_ONE_NUMBER.name ->
                    mapToDetails(request as SqlSelectAsOneNumberValueActionRequest)

                ActionType.JOIN_SQL_SELECTS_AS_TEXT.name ->
                    mapToDetails(request as JoinSqlSelectAsTextActionRequest)

                else -> throw IllegalArgumentException("Unknown type: " + request.type)
            }

    fun mapToDetails(request: SqlSelectAsTextActionRequest) =
            SqlSelectAsTextActionDetails(
                    dbConnectionId = request.dbConnectionId,
                    select = request.select,
                    resultTemplate = request.resultTemplate
            )

    fun mapToDetails(request: SqlSelectAsExcelFileActionRequest) =
            SqlSelectInExcelFileActionDetails(
                    dbConnectionId = request.dbConnectionId,
                    select = request.select,
                    fileNameTemplate = request.fileNameTemplate
            )

    fun mapToDetails(request: SqlSelectAsOneNumberValueActionRequest) =
            SqlSelectAsOneNumberValueActionDetails(
                    dbConnectionId = request.dbConnectionId,
                    select = request.select
            )

    fun mapToDetails(request: JoinSqlSelectAsTextActionRequest) =
            JoinSqlSelectAsTextActionDetails(
                    queries = request.queries.map{
                        SqlSelectDetails(it.name, it.select, it.dbConnectionId)
                    },
                    select = request.select,
                    resultTemplate = request.resultTemplate
            )

    fun mapToDto(details: ActionDetails): ActionDTO =
            when (details.type) {
                ActionType.SQL_SELECT_AS_TEXT ->
                    mapToDto(details as SqlSelectAsTextActionDetails)
                ActionType.SQL_SELECT_IN_EXCEL_FILE ->
                    mapToDto(details as SqlSelectInExcelFileActionDetails)
                ActionType.SQL_SELECT_AS_ONE_NUMBER ->
                    mapToDto(details as SqlSelectAsOneNumberValueActionDetails)
                ActionType.JOIN_SQL_SELECTS_AS_TEXT ->
                    mapToDto(details as JoinSqlSelectAsTextActionDetails)
            }

    fun mapToDto(details: SqlSelectAsTextActionDetails) =
            SqlSelectAsTextActionDTO(
                    select = details.select,
                    dbConnectionId = details.dbConnectionId,
                    resultTemplate = details.resultTemplate
            )

    fun mapToDto(details: SqlSelectInExcelFileActionDetails) =
            SqlSelectAsExcelFileActionDTO(
                    dbConnectionId = details.dbConnectionId,
                    select = details.select,
                    fileNameTemplate = details.fileNameTemplate
            )

    fun mapToDto(details: SqlSelectAsOneNumberValueActionDetails) =
            SqlSelectAsOneNumberValueActionDTO(
                    dbConnectionId = details.dbConnectionId,
                    select = details.select
            )

    fun mapToDto(details: JoinSqlSelectAsTextActionDetails) =
            JoinSqlSelectAsTextActionDTO(
                    queries = details.queries.map{
                        SqlSelectDTO(it.name, it.select, it.dbConnectionId)
                    },
                    select = details.select,
                    resultTemplate = details.resultTemplate
            )

}