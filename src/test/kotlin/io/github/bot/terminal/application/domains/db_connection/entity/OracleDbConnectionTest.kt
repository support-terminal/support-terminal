/*
package io.github.bot.terminal.application.domains.db_connection.entity

import io.github.bot.terminal.application.domains.db_connection.repository.DbConnectionRepository
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.ArgumentMatchers
import org.mockito.Mock
import org.mockito.Mockito
import org.mockito.junit.jupiter.MockitoExtension
import java.util.*

@ExtendWith(MockitoExtension::class)
internal class OracleDbConnectionTest {
    @Mock
    private val repository: DbConnectionRepository? = null
    var dbConnectionid = UUID.randomUUID().toString()
    var name = UUID.randomUUID().toString()
    var host = UUID.randomUUID().toString()
    var port = 1233
    var user = UUID.randomUUID().toString()
    var password = UUID.randomUUID().toString()
    var sid = UUID.randomUUID().toString()

    @Test
    fun delete() {
        val details = OracleDbConnectionDetails()
        details.setId(dbConnectionid)
        details.type = DbConnectionType.ORACLE
        details.name = name
        details.host = host
        details.port = port
        details.user = user
        details.password = password
        details.sid = sid
        val connection: DbConnection<*> = OracleDbConnection(details, repository!!)
        connection.delete()
        Mockito.verify(repository, Mockito.times(1))!!.deleteById(ArgumentMatchers.eq(dbConnectionid))
    }

    @get:Test
    val url: Unit
        get() {
            val details = OracleDbConnectionDetails()
            details.setId(dbConnectionid)
            details.type = DbConnectionType.ORACLE
            details.name = name
            details.host = host
            details.port = port
            details.user = user
            details.password = password
            details.sid = sid
            val connection = OracleDbConnection(details, repository!!)
            Assertions.assertEquals("jdbc:oracle:thin:@$host:$port/$sid", connection.url)
        }

    @get:Test
    val className: Unit
        get() {
            val details = OracleDbConnectionDetails()
            details.setId(dbConnectionid)
            details.type = DbConnectionType.ORACLE
            details.name = name
            details.host = host
            details.port = port
            details.user = user
            details.password = password
            details.sid = sid
            val connection = OracleDbConnection(details, repository!!)
            Assertions.assertEquals("oracle.jdbc.driver.OracleDriver", connection.className)
        }

    @get:Test
    val checkSelect: Unit
        get() {
            val details = OracleDbConnectionDetails()
            details.setId(dbConnectionid)
            details.type = DbConnectionType.ORACLE
            details.name = name
            details.host = host
            details.port = port
            details.user = user
            details.password = password
            details.sid = sid
            val connection = OracleDbConnection(details, repository!!)
            Assertions.assertEquals("SELECT 1 FROM DUAL", connection.checkSelect)
        }
}*/
