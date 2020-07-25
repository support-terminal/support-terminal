package io.github.bot.terminal.application.domains.common.action

import io.github.bot.terminal.application.domains.common.action.dto.ActionDTO
import io.github.bot.terminal.application.domains.common.action.dto.SqlSelectAsExcelFileActionDTO
import io.github.bot.terminal.application.domains.common.action.dto.SqlSelectAsOneNumberValueActionDTO
import io.github.bot.terminal.application.domains.common.action.dto.SqlSelectAsTextActionDTO
import io.github.bot.terminal.application.domains.common.action.entity.ActionDetails
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsOneNumberValueActionDetails
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsTextActionDetails
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectInExcelFileActionDetails
import io.github.bot.terminal.application.domains.common.action.requests.ActionRequest
import io.github.bot.terminal.application.domains.common.action.requests.SqlSelectAsExcelFileActionRequest
import io.github.bot.terminal.application.domains.common.action.requests.SqlSelectAsOneNumberValueActionRequest
import io.github.bot.terminal.application.domains.common.action.requests.SqlSelectAsTextActionRequest
import io.github.bot.terminal.application.domains.common.action.values.ActionType
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

    fun mapToDto(details: ActionDetails): ActionDTO =
            when (details.type) {
                ActionType.SQL_SELECT_AS_TEXT ->
                    mapToDto(details as SqlSelectAsTextActionDetails)
                ActionType.SQL_SELECT_IN_EXCEL_FILE ->
                    mapToDto(details as SqlSelectInExcelFileActionDetails)
                ActionType.SQL_SELECT_AS_ONE_NUMBER ->
                    mapToDto(details as SqlSelectAsOneNumberValueActionDetails)
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

}