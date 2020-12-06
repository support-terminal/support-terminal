package io.github.support.terminal.application.domains.common.action.entity

enum class ActionType(val label: String) {
    SQL_SELECT_AS_TEXT("Sql select as text"),
    JOIN_SQL_SELECTS_AS_TEXT("Join of sql selects as text"),
    SQL_SELECT_AS_ONE_NUMBER("Sql select as one number value"),
    SQL_SELECT_IN_EXCEL_FILE("Sql select as excel");

    interface Constants {
        companion object {
            const val SQL_SELECT_AS_TEXT = "SQL_SELECT_AS_TEXT"
            const val JOIN_SQL_SELECTS_AS_TEXT = "JOIN_SQL_SELECTS_AS_TEXT"
            const val SQL_SELECT_AS_ONE_NUMBER = "SQL_SELECT_AS_ONE_NUMBER"
            const val SQL_SELECT_IN_EXCEL_FILE = "SQL_SELECT_IN_EXCEL_FILE"
        }
    }

}