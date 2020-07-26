/*
package io.github.bot.terminal.application.domains.db_connection.entity

import io.github.bot.terminal.application.domains.db_connection.repository.DbConnectionRepository
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.ArgumentMatchers
import org.mockito.Mock
import org.mockito.Mockito
import org.mockito.invocation.InvocationOnMock
import org.mockito.junit.jupiter.MockitoExtension
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.datasource.DriverManagerDataSource
import java.util.*
import javax.sql.DataSource

@ExtendWith(MockitoExtension::class)
internal class DbConnectionTest {
    @Mock
    private val repository: DbConnectionRepository? = null
    var dbConnectionid = UUID.randomUUID().toString()
    var name = UUID.randomUUID().toString()
    var host = UUID.randomUUID().toString()
    var port = 1233
    var user = UUID.randomUUID().toString()
    var password = UUID.randomUUID().toString()
    var dbName = UUID.randomUUID().toString()
    private var connection: DbConnection<*>? = null

    @BeforeEach
    fun init() {
        val details = PostgresDbConnectionDetails()
        details.setId(dbConnectionid)
        details.type = DbConnectionType.POSTGRES
        details.name = name
        details.host = host
        details.port = port
        details.user = user
        details.password = password
        details.dbName = dbName
        connection = Mockito.spy(PostgresDbConnection(details, repository!!))
    }

    @Test
    fun check() {
        val templateMock = Mockito.mock(JdbcTemplate::class.java)
        Mockito.doAnswer { invocation: InvocationOnMock? -> templateMock }
                .`when`(connection)!!.createJdbcTemplate()
        connection!!.check()
        Mockito.verify(templateMock, Mockito.times(1)).execute(ArgumentMatchers.eq(connection!!.checkSelect))
    }

    @Test
    fun createJdbcTemplate() {
        val dataSource = Mockito.mock(DataSource::class.java)
        Mockito.doAnswer { invocation: InvocationOnMock? -> Optional.of(dataSource) }
                .`when`(connection)!!.dataSource
        val template = connection!!.createJdbcTemplate()
        Assertions.assertEquals(dataSource, template.dataSource)
    }

    @get:Test
    val dataSource: Unit
        get() {
            val mockClassName = "java.lang.Class"
            connection!!.dataSource
            Mockito.`when`(connection!!.className).thenReturn(mockClassName)
            val dataSource = connection!!.dataSource.get() as DriverManagerDataSource
            Assertions.assertEquals(connection!!.url, dataSource.url)
            Assertions.assertEquals(connection!!.details.user, dataSource.username)
            Assertions.assertEquals(connection!!.details.password, dataSource.password)
            Assertions.assertEquals(connection!!.details.password, dataSource.password)
        }
}*/
