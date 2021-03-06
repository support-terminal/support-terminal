package io.github.support.terminal.application.domains.common.action

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonSubTypes
import com.fasterxml.jackson.annotation.JsonTypeInfo
import io.github.support.terminal.application.domains.common.action.entity.ActionType
import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotEmpty

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "type", visible = true)
@JsonSubTypes(
        JsonSubTypes.Type(value = SqlSelectAsTextActionRequest::class,
                name = ActionType.Constants.SQL_SELECT_AS_TEXT),
        JsonSubTypes.Type(value = JoinSqlSelectAsTextActionRequest::class,
                name = ActionType.Constants.JOIN_SQL_SELECTS_AS_TEXT),
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

data class JoinSqlSelectAsTextActionRequest(
        val queries: @NotEmpty List<SqlSelectRequest>,
        val select: @NotBlank String,
        val resultTemplate: @NotBlank String
) : ActionRequest(ActionType.Constants.JOIN_SQL_SELECTS_AS_TEXT)

data class SqlSelectRequest(
        val name: @NotBlank String,
        val select: @NotBlank String,
        val dbConnectionId: @NotBlank String
)
