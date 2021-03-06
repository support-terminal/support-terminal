package io.github.support.terminal.application.domains.common.action.entity

import com.fasterxml.jackson.annotation.JsonSubTypes
import com.fasterxml.jackson.annotation.JsonTypeInfo

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "type", visible = true)
@JsonSubTypes(
        JsonSubTypes.Type(value = SqlSelectAsTextActionDetails::class,
                name = ActionType.Constants.SQL_SELECT_AS_TEXT),
        JsonSubTypes.Type(value = JoinSqlSelectAsTextActionDetails::class,
                name = ActionType.Constants.JOIN_SQL_SELECTS_AS_TEXT),
        JsonSubTypes.Type(value = SqlSelectAsOneNumberValueActionDetails::class,
                name = ActionType.Constants.SQL_SELECT_AS_ONE_NUMBER),
        JsonSubTypes.Type(value = SqlSelectInExcelFileActionDetails::class,
                name = ActionType.Constants.SQL_SELECT_IN_EXCEL_FILE))
abstract class ActionDetails(val type: ActionType)

data class SqlSelectAsOneNumberValueActionDetails(
        var select: String,
        var dbConnectionId: String
) : ActionDetails(ActionType.SQL_SELECT_AS_ONE_NUMBER)

data class JoinSqlSelectAsTextActionDetails(
        var queries: List<SqlSelectDetails>,
        var select: String,
        var resultTemplate: String
) : ActionDetails(ActionType.JOIN_SQL_SELECTS_AS_TEXT)

data class SqlSelectAsTextActionDetails(
        var select: String,
        var dbConnectionId: String,
        var resultTemplate: String
) : ActionDetails(ActionType.SQL_SELECT_AS_TEXT)

data class SqlSelectInExcelFileActionDetails(
        var select: String,
        var dbConnectionId: String,
        var fileNameTemplate: String
) : ActionDetails(ActionType.SQL_SELECT_IN_EXCEL_FILE)

data class SqlSelectDetails(
        var name: String,
        var select: String,
        var dbConnectionId: String
)