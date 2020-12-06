package io.github.support.terminal.application.domains.db_connection.entity

import io.github.support.terminal.application.domains.db_connection.repository.DbConnectionDetails
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.datasource.DriverManagerDataSource
import java.util.*
import javax.sql.DataSource

abstract class DbConnection<D : DbConnectionDetails> {

    abstract val details: D
    abstract val id: String
    abstract val url: String
    abstract val className: String
    abstract val checkSelect: String

    fun check() {
        val template = createJdbcTemplate()
        template.execute(checkSelect)
    }

    fun createJdbcTemplate(): JdbcTemplate {
        return JdbcTemplate(dataSource.get())
    }

    //TODO log out -- !!!When class name not found - it means that we forget jar driver or we dont see it
    val dataSource: Optional<DataSource>
        get() = try {
            val dataSource = DriverManagerDataSource()
            dataSource.url = url
            dataSource.username = details.user
            dataSource.password = details.password
            dataSource.setDriverClassName(className)
            Optional.of(dataSource)
        } catch (ex: Exception) {
            //TODO log out -- !!!When class name not found - it means that we forget jar driver or we dont see it
            Optional.empty()
        }
}