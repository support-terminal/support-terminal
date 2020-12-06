package io.github.support.terminal.application.domains.db_connection.entity

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