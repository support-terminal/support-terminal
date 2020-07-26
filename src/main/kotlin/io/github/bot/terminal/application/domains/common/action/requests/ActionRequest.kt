package io.github.bot.terminal.application.domains.common.action.requests

import com.fasterxml.jackson.annotation.JsonSubTypes
import com.fasterxml.jackson.annotation.JsonTypeInfo
import io.github.bot.terminal.application.domains.common.action.values.ActionType
import javax.validation.constraints.NotBlank

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "type", visible = true)
@JsonSubTypes(
        JsonSubTypes.Type(value = SqlSelectAsTextActionRequest::class,
                name = ActionType.Constants.SQL_SELECT_AS_TEXT),
        JsonSubTypes.Type(value = SqlSelectAsExcelFileActionRequest::class,
                name = ActionType.Constants.SQL_SELECT_IN_EXCEL_FILE),
        JsonSubTypes.Type(value = SqlSelectAsOneNumberValueActionRequest::class,
                name = ActionType.Constants.SQL_SELECT_AS_ONE_NUMBER))
open class ActionRequest(var type: @NotBlank String)

data class SqlSelectAsTextActionRequest(
        val select: @NotBlank String,
        val dbConnectionId: @NotBlank String,
        val resultTemplate: @NotBlank String
) : ActionRequest(ActionType.Constants.SQL_SELECT_AS_TEXT)

data class SqlSelectAsExcelFileActionRequest(
        val select: @NotBlank String,
        val dbConnectionId: @NotBlank String,
        val fileNameTemplate: @NotBlank String
) : ActionRequest(ActionType.Constants.SQL_SELECT_IN_EXCEL_FILE)

data class SqlSelectAsOneNumberValueActionRequest(
        val select: @NotBlank String,
        val dbConnectionId: @NotBlank String
) : ActionRequest(ActionType.Constants.SQL_SELECT_AS_ONE_NUMBER)
