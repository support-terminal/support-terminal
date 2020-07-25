package io.github.bot.terminal.application.domains.common.action.dto

import io.github.bot.terminal.application.domains.common.action.values.ActionType
import javax.validation.constraints.NotBlank

abstract class ActionDTO(val type: String)

class SqlSelectAsExcelFileActionDTO(
        val select: @NotBlank String,
        val dbConnectionId: @NotBlank String,
        val fileNameTemplate: @NotBlank String
) : ActionDTO(ActionType.Constants.SQL_SELECT_IN_EXCEL_FILE)

class SqlSelectAsOneNumberValueActionDTO(
        val select: @NotBlank String,
        val dbConnectionId: @NotBlank String
) : ActionDTO(ActionType.Constants.SQL_SELECT_AS_ONE_NUMBER)

class SqlSelectAsTextActionDTO(
        val select: @NotBlank String,
        val dbConnectionId: @NotBlank String,
        val resultTemplate: @NotBlank String
) : ActionDTO(ActionType.Constants.SQL_SELECT_AS_TEXT)

