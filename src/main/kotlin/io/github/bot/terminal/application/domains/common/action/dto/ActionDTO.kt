package io.github.bot.terminal.application.domains.common.action.dto

import io.github.bot.terminal.application.domains.common.action.values.ActionType
import javax.validation.constraints.NotBlank

abstract class ActionDTO(val type: String)

data class SqlSelectAsExcelFileActionDTO(
        val select: @NotBlank String,
        val dbConnectionId: @NotBlank String,
        val fileNameTemplate: @NotBlank String
) : ActionDTO(ActionType.Constants.SQL_SELECT_IN_EXCEL_FILE)

data class JoinSqlSelectAsTextActionDTO(
        val queries: List<SqlSelectDTO>,
        val select: @NotBlank String,
        val resultTemplate: @NotBlank String
) : ActionDTO(ActionType.Constants.JOIN_SQL_SELECTS_AS_TEXT)

data class SqlSelectAsOneNumberValueActionDTO(
        val select: @NotBlank String,
        val dbConnectionId: @NotBlank String
) : ActionDTO(ActionType.Constants.SQL_SELECT_AS_ONE_NUMBER)

data class SqlSelectAsTextActionDTO(
        val select: @NotBlank String,
        val dbConnectionId: @NotBlank String,
        val resultTemplate: @NotBlank String
) : ActionDTO(ActionType.Constants.SQL_SELECT_AS_TEXT)

data class SqlSelectDTO(
        val name: @NotBlank String,
        val select: @NotBlank String,
        val dbConnectionId: @NotBlank String
)