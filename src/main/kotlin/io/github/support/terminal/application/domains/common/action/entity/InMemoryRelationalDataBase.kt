package io.github.support.terminal.application.domains.common.action.entity

import org.apache.commons.text.StringSubstitutor
import org.springframework.jdbc.core.JdbcTemplate

class InMemoryRelationalDataBase(private val h2JdbcTemplate: JdbcTemplate) {


    fun addTable(tableName: String, resultSet: MutableList<MutableMap<String, Any>>) {
        h2JdbcTemplate.execute("""
                 CREATE TABLE $tableName (
                        ${tableFields(resultSet[0].keys)}
                );""".trimIndent()
        )
        h2JdbcTemplate.batchUpdate(
                buildBatchUpdate(tableName, resultSet)
        )
    }

    private fun buildBatchUpdate(tableName: String, rows: List<Map<String, Any>>): String? {
        return rows.map {
            "${it.toInsertStatement(tableName)}"
        }.joinToString(";")
    }

    private fun Map<String, Any>.toInsertStatement(tableName: String): String {
        return """
            INSERT INTO $tableName (${this.keys.sorted().joinToString(",")})
            VALUES (${this.keys.sorted().map { this.get(it) }.joinToString("','", "'", "'")})
        """.trimIndent()
    }

    private fun tableFields(fields: Set<String>): String {
        return fields.joinToString { "${it.toUpperCase()} VARCHAR(1024)" }
    }


    fun select(params: Map<String, String>, select: String): MutableList<MutableMap<String, Any>> {
        return h2JdbcTemplate.queryForList(StringSubstitutor(params).replace(select))
    }

    fun dropTable(tableName: String) {
        h2JdbcTemplate.execute("DROP TABLE $tableName")
    }

}
