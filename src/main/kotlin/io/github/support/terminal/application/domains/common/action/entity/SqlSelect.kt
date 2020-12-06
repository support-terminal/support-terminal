package io.github.support.terminal.application.domains.common.action.entity

import io.github.support.terminal.application.domains.db_connection.entity.DbConnection
import org.apache.commons.text.StringSubstitutor
import org.springframework.jdbc.core.JdbcTemplate

class SqlSelect(val name: String, val select: String, val dbConnection: DbConnection<*>){

     fun execute(params: Map<String, String>): MutableList<MutableMap<String, Any>> {
        val template = dbConnection.createJdbcTemplate()
        return template.queryForList(StringSubstitutor(params).replace(select))
    }

    fun getTemplate(): JdbcTemplate {
        return dbConnection.createJdbcTemplate()
    }
}