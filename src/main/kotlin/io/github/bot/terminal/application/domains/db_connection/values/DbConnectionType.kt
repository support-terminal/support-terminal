package io.github.bot.terminal.application.domains.db_connection.values

enum class DbConnectionType(val label: String) {
    POSTGRES("PostgreSQL"),
    ORACLE("Oracle DB"),
    MYSQL("MySQL");

    interface Constants {
        companion object {
            const val POSTGRES = "POSTGRES"
            const val ORACLE = "ORACLE"
            const val MYSQL = "MYSQL"
        }
    }

}