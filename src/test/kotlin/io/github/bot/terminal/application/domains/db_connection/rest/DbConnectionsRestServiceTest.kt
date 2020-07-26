/*
package io.github.bot.terminal.application.domains.db_connection.rest

import io.github.bot.terminal.application.domains.db_connection.entity.*
import io.github.bot.terminal.application.domains.db_connection.factory.DbConnectionsFactory
import io.github.bot.terminal.application.domains.db_connection.repository.DbConnectionRepository
import io.github.bot.terminal.application.domains.db_connection.rest.dto.MySqlDbConnectionDTO
import io.github.bot.terminal.application.domains.db_connection.rest.dto.OracleDbConnectionDTO
import io.github.bot.terminal.application.domains.db_connection.rest.dto.PostgresDbConnectionDTO
import io.github.bot.terminal.application.domains.db_connection.rest.requests.MySqlDbConnectionRequest
import io.github.bot.terminal.application.domains.db_connection.rest.requests.OracleDbConnectionRequest
import io.github.bot.terminal.application.domains.db_connection.rest.requests.PostgresDbConnectionRequest
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.*
import org.mockito.junit.jupiter.MockitoExtension
import java.util.*

@ExtendWith(MockitoExtension::class)
internal class DbConnectionsRestServiceTest {
    @Mock
    private val factory: DbConnectionsFactory? = null

    @Mock
    private val repository: DbConnectionRepository? = null
    private val converter = Mockito.spy(DbConnectionsRestConverter())
    private var service: DbConnectionsRestService? = null

    @Captor
    var postgresDetailsCaptor: ArgumentCaptor<PostgresDbConnectionDetails>? = null

    @Captor
    var mysqlDetailsCaptor: ArgumentCaptor<MySqlDbConnectionDetails>? = null

    @Captor
    var oracleDetailsCaptor: ArgumentCaptor<OracleDbConnectionDetails>? = null
    var dbConnectionid = UUID.randomUUID().toString()
    var name = UUID.randomUUID().toString()
    var host = UUID.randomUUID().toString()
    var port = 1233
    var user = UUID.randomUUID().toString()
    var password = UUID.randomUUID().toString()
    var dbName = UUID.randomUUID().toString()
    var sid = UUID.randomUUID().toString()
    var dbConnectionid2 = UUID.randomUUID().toString()
    var name2 = UUID.randomUUID().toString()
    var host2 = UUID.randomUUID().toString()
    var port2 = 1234
    var user2 = UUID.randomUUID().toString()
    var password2 = UUID.randomUUID().toString()
    var dbName2 = UUID.randomUUID().toString()
    var sid2 = UUID.randomUUID().toString()

    @BeforeEach
    fun inti() {
        service = DbConnectionsRestService(factory, converter)
    }

    @Test
    fun addUnknownDbConnection() {
        val request = PostgresDbConnectionRequest()
        request.setName(name)
        request.setType("Some type")
        request.setHost(host)
        request.setPort(port)
        request.setUser(user)
        request.setPassword(password)
        request.setDbName(dbName)
        Assertions.assertThrows(IllegalArgumentException::class.java
        ) { service!!.add(request) }
    }

    @Test
    fun mapFromUnknownDbConnectionType() {
        val details = PostgresDbConnectionDetails()
        details.setId(dbConnectionid)
        details.type = null
        details.name = name
        details.host = host
        details.port = port
        details.user = user
        details.password = password
        details.dbName = dbName
        val connection: DbConnection<*> = PostgresDbConnection(details, repository!!)
        Mockito.`when`(factory!!.createNew(ArgumentMatchers.any()))
                .thenReturn(connection)
        val request = PostgresDbConnectionRequest()
        request.setName(name)
        request.setHost(host)
        request.setPort(port)
        request.setUser(user)
        request.setPassword(password)
        request.setDbName(dbName)
        Assertions.assertThrows(IllegalArgumentException::class.java
        ) { service!!.add(request) }
    }

    @Test
    fun checkPostgresDbConnection() {
        val c1 = Mockito.mock(DbConnection::class.java)
        val c2 = Mockito.mock(DbConnection::class.java)
        Mockito.doThrow(RuntimeException("some issues")).`when`(c2).check()
        Mockito.`when`(factory!!.build(ArgumentMatchers.any()))
                .thenReturn(c1)
                .thenReturn(c2)
        val request = PostgresDbConnectionRequest()
        request.setName(name)
        request.setHost(host)
        request.setPort(port)
        request.setUser(user)
        request.setPassword(password)
        request.setDbName(dbName)
        val dto = service!!.check(request)
        assertTrue(dto.isSuccess())
        val dto2 = service!!.check(request)
        assertFalse(dto2.isSuccess())
    }

    @Test
    fun addNewPostgresDbConnection() {
        val details = PostgresDbConnectionDetails()
        details.setId(dbConnectionid)
        details.type = DbConnectionType.POSTGRES
        details.name = name
        details.host = host
        details.port = port
        details.user = user
        details.password = password
        details.dbName = dbName
        val connection: DbConnection<*> = PostgresDbConnection(details, repository!!)
        Mockito.`when`(factory!!.createNew(ArgumentMatchers.any()))
                .thenReturn(connection)
        val request = PostgresDbConnectionRequest()
        request.setName(name)
        request.setHost(host)
        request.setPort(port)
        request.setUser(user)
        request.setPassword(password)
        request.setDbName(dbName)
        val apiDTO = service!!.add(request) as PostgresDbConnectionDTO
        Assertions.assertEquals(dbConnectionid, apiDTO.id)
        Assertions.assertEquals(name, apiDTO.name)
        Assertions.assertEquals(host, apiDTO.host)
        Assertions.assertEquals(port, apiDTO.port)
        Assertions.assertEquals(user, apiDTO.user)
        Assertions.assertEquals(password, apiDTO.password)
        Assertions.assertEquals(dbName, apiDTO.dbName)
        Assertions.assertEquals(DbConnectionType.POSTGRES.name, apiDTO.type)
        Mockito.verify(factory, Mockito.times(1))!!.createNew(postgresDetailsCaptor!!.capture())
        val convertedDetails = postgresDetailsCaptor!!.value
        Assertions.assertEquals(name, convertedDetails.name)
        Assertions.assertEquals(host, convertedDetails.host)
        Assertions.assertEquals(port, convertedDetails.port)
        Assertions.assertEquals(user, convertedDetails.user)
        Assertions.assertEquals(password, convertedDetails.password)
        Assertions.assertEquals(dbName, convertedDetails.dbName)
        Assertions.assertEquals(DbConnectionType.POSTGRES, convertedDetails.type)
    }

    @Test
    fun addNewMySqlDbConnection() {
        val details = MySqlDbConnectionDetails()
        details.setId(dbConnectionid)
        details.type = DbConnectionType.MYSQL
        details.name = name
        details.host = host
        details.port = port
        details.user = user
        details.password = password
        details.dbName = dbName
        val connection: DbConnection<*> = MySqlDbConnection(details, repository!!)
        Mockito.`when`(factory!!.createNew(ArgumentMatchers.any()))
                .thenReturn(connection)
        val request = MySqlDbConnectionRequest()
        request.setName(name)
        request.setHost(host)
        request.setPort(port)
        request.setUser(user)
        request.setPassword(password)
        request.setDbName(dbName)
        val apiDTO = service!!.add(request) as MySqlDbConnectionDTO
        Assertions.assertEquals(dbConnectionid, apiDTO.id)
        Assertions.assertEquals(name, apiDTO.name)
        Assertions.assertEquals(host, apiDTO.host)
        Assertions.assertEquals(port, apiDTO.port)
        Assertions.assertEquals(user, apiDTO.user)
        Assertions.assertEquals(password, apiDTO.password)
        Assertions.assertEquals(dbName, apiDTO.dbName)
        Assertions.assertEquals(DbConnectionType.MYSQL.name, apiDTO.type)
        Mockito.verify(factory, Mockito.times(1))!!.createNew(mysqlDetailsCaptor!!.capture())
        val convertedDetails = mysqlDetailsCaptor!!.value
        Assertions.assertEquals(name, convertedDetails.name)
        Assertions.assertEquals(host, convertedDetails.host)
        Assertions.assertEquals(port, convertedDetails.port)
        Assertions.assertEquals(user, convertedDetails.user)
        Assertions.assertEquals(password, convertedDetails.password)
        Assertions.assertEquals(dbName, convertedDetails.dbName)
        Assertions.assertEquals(DbConnectionType.MYSQL, convertedDetails.type)
    }

    @Test
    fun addNewOracleDbConnection() {
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
        Mockito.`when`(factory!!.createNew(ArgumentMatchers.any()))
                .thenReturn(connection)
        val request = OracleDbConnectionRequest()
        request.setName(name)
        request.setHost(host)
        request.setPort(port)
        request.setUser(user)
        request.setPassword(password)
        request.setSid(sid)
        val apiDTO = service!!.add(request) as OracleDbConnectionDTO
        Assertions.assertEquals(dbConnectionid, apiDTO.id)
        Assertions.assertEquals(name, apiDTO.name)
        Assertions.assertEquals(host, apiDTO.host)
        Assertions.assertEquals(port, apiDTO.port)
        Assertions.assertEquals(user, apiDTO.user)
        Assertions.assertEquals(password, apiDTO.password)
        Assertions.assertEquals(sid, apiDTO.sid)
        Assertions.assertEquals(DbConnectionType.ORACLE.name, apiDTO.type)
        Mockito.verify(factory, Mockito.times(1))!!.createNew(oracleDetailsCaptor!!.capture())
        val convertedDetails = oracleDetailsCaptor!!.value
        Assertions.assertEquals(name, convertedDetails.name)
        Assertions.assertEquals(host, convertedDetails.host)
        Assertions.assertEquals(port, convertedDetails.port)
        Assertions.assertEquals(user, convertedDetails.user)
        Assertions.assertEquals(password, convertedDetails.password)
        Assertions.assertEquals(sid, convertedDetails.sid)
        Assertions.assertEquals(DbConnectionType.ORACLE, convertedDetails.type)
    }

    @Test
    fun editOracleDbConnection() {
        val details = OracleDbConnectionDetails()
        details.setId(dbConnectionid)
        details.type = DbConnectionType.ORACLE
        details.name = name2
        details.host = host2
        details.port = port2
        details.user = user2
        details.password = password2
        details.sid = sid2
        val connection: DbConnection<*> = OracleDbConnection(details, repository!!)
        Mockito.`when`(factory!!.merge(ArgumentMatchers.eq(dbConnectionid), ArgumentMatchers.any()))
                .thenReturn(connection)
        val request = OracleDbConnectionRequest()
        request.setName(name2)
        request.setHost(host2)
        request.setPort(port2)
        request.setUser(user2)
        request.setPassword(password2)
        request.setSid(sid2)
        val apiDTO = service!!.edit(dbConnectionid, request) as OracleDbConnectionDTO
        Assertions.assertEquals(dbConnectionid, apiDTO.id)
        Assertions.assertEquals(name2, apiDTO.name)
        Assertions.assertEquals(host2, apiDTO.host)
        Assertions.assertEquals(port2, apiDTO.port)
        Assertions.assertEquals(user2, apiDTO.user)
        Assertions.assertEquals(password2, apiDTO.password)
        Assertions.assertEquals(sid2, apiDTO.sid)
        Assertions.assertEquals(DbConnectionType.ORACLE.name, apiDTO.type)
        Mockito.verify(factory, Mockito.times(1))!!.merge(ArgumentMatchers.eq(dbConnectionid), oracleDetailsCaptor!!.capture())
        val convertedDetails = oracleDetailsCaptor!!.value
        Assertions.assertEquals(name2, convertedDetails.name)
        Assertions.assertEquals(host2, convertedDetails.host)
        Assertions.assertEquals(port2, convertedDetails.port)
        Assertions.assertEquals(user2, convertedDetails.user)
        Assertions.assertEquals(password2, convertedDetails.password)
        Assertions.assertEquals(sid2, convertedDetails.sid)
        Assertions.assertEquals(DbConnectionType.ORACLE, convertedDetails.type)
    }

    @Test
    fun editPostgresDbConnection() {
        val details = PostgresDbConnectionDetails()
        details.setId(dbConnectionid)
        details.type = DbConnectionType.POSTGRES
        details.name = name2
        details.host = host2
        details.port = port2
        details.user = user2
        details.password = password2
        details.dbName = dbName2
        val connection: DbConnection<*> = PostgresDbConnection(details, repository!!)
        Mockito.`when`(factory!!.merge(ArgumentMatchers.eq(dbConnectionid), ArgumentMatchers.any()))
                .thenReturn(connection)
        val request = PostgresDbConnectionRequest()
        request.setName(name2)
        request.setHost(host2)
        request.setPort(port2)
        request.setUser(user2)
        request.setPassword(password2)
        request.setDbName(dbName2)
        val apiDTO = service!!.edit(dbConnectionid, request) as PostgresDbConnectionDTO
        Assertions.assertEquals(dbConnectionid, apiDTO.id)
        Assertions.assertEquals(name2, apiDTO.name)
        Assertions.assertEquals(host2, apiDTO.host)
        Assertions.assertEquals(port2, apiDTO.port)
        Assertions.assertEquals(user2, apiDTO.user)
        Assertions.assertEquals(password2, apiDTO.password)
        Assertions.assertEquals(dbName2, apiDTO.dbName)
        Assertions.assertEquals(DbConnectionType.POSTGRES.name, apiDTO.type)
        Mockito.verify(factory, Mockito.times(1))!!.merge(ArgumentMatchers.eq(dbConnectionid), postgresDetailsCaptor!!.capture())
        val convertedDetails = postgresDetailsCaptor!!.value
        Assertions.assertEquals(name2, convertedDetails.name)
        Assertions.assertEquals(host2, convertedDetails.host)
        Assertions.assertEquals(port2, convertedDetails.port)
        Assertions.assertEquals(user2, convertedDetails.user)
        Assertions.assertEquals(password2, convertedDetails.password)
        Assertions.assertEquals(dbName2, convertedDetails.dbName)
        Assertions.assertEquals(DbConnectionType.POSTGRES, convertedDetails.type)
    }

    @Test
    fun editMySqlDbConnection() {
        val details = MySqlDbConnectionDetails()
        details.setId(dbConnectionid)
        details.type = DbConnectionType.MYSQL
        details.name = name2
        details.host = host2
        details.port = port2
        details.user = user2
        details.password = password2
        details.dbName = dbName2
        val connection: DbConnection<*> = MySqlDbConnection(details, repository!!)
        Mockito.`when`(factory!!.merge(ArgumentMatchers.eq(dbConnectionid), ArgumentMatchers.any()))
                .thenReturn(connection)
        val request = MySqlDbConnectionRequest()
        request.setName(name2)
        request.setHost(host2)
        request.setPort(port2)
        request.setUser(user2)
        request.setPassword(password2)
        request.setDbName(dbName2)
        val apiDTO = service!!.edit(dbConnectionid, request) as MySqlDbConnectionDTO
        Assertions.assertEquals(dbConnectionid, apiDTO.id)
        Assertions.assertEquals(name2, apiDTO.name)
        Assertions.assertEquals(host2, apiDTO.host)
        Assertions.assertEquals(port2, apiDTO.port)
        Assertions.assertEquals(user2, apiDTO.user)
        Assertions.assertEquals(password2, apiDTO.password)
        Assertions.assertEquals(dbName2, apiDTO.dbName)
        Assertions.assertEquals(DbConnectionType.MYSQL.name, apiDTO.type)
        Mockito.verify(factory, Mockito.times(1))!!.merge(ArgumentMatchers.eq(dbConnectionid), mysqlDetailsCaptor!!.capture())
        val convertedDetails = mysqlDetailsCaptor!!.value
        Assertions.assertEquals(name2, convertedDetails.name)
        Assertions.assertEquals(host2, convertedDetails.host)
        Assertions.assertEquals(port2, convertedDetails.port)
        Assertions.assertEquals(user2, convertedDetails.user)
        Assertions.assertEquals(password2, convertedDetails.password)
        Assertions.assertEquals(dbName2, convertedDetails.dbName)
        Assertions.assertEquals(DbConnectionType.MYSQL, convertedDetails.type)
    }

    @get:Test
    val mySqlDbConnection: Unit
        get() {
            val details = MySqlDbConnectionDetails()
            details.setId(dbConnectionid)
            details.type = DbConnectionType.MYSQL
            details.name = name
            details.host = host
            details.port = port
            details.user = user
            details.password = password
            details.dbName = dbName
            val connection: DbConnection<*> = MySqlDbConnection(details, repository!!)
            Mockito.`when`(factory!!.byId(ArgumentMatchers.eq(dbConnectionid)))
                    .thenReturn(connection)
            val apiDTO = service!![dbConnectionid] as MySqlDbConnectionDTO
            Assertions.assertEquals(dbConnectionid, apiDTO.id)
            Assertions.assertEquals(name, apiDTO.name)
            Assertions.assertEquals(host, apiDTO.host)
            Assertions.assertEquals(port, apiDTO.port)
            Assertions.assertEquals(user, apiDTO.user)
            Assertions.assertEquals(password, apiDTO.password)
            Assertions.assertEquals(dbName, apiDTO.dbName)
            Assertions.assertEquals(DbConnectionType.MYSQL.name, apiDTO.type)
        }

    @get:Test
    val postgresDbConnection: Unit
        get() {
            val details = PostgresDbConnectionDetails()
            details.setId(dbConnectionid)
            details.type = DbConnectionType.POSTGRES
            details.name = name
            details.host = host
            details.port = port
            details.user = user
            details.password = password
            details.dbName = dbName
            val connection: DbConnection<*> = PostgresDbConnection(details, repository!!)
            Mockito.`when`(factory!!.byId(ArgumentMatchers.eq(dbConnectionid)))
                    .thenReturn(connection)
            val apiDTO = service!![dbConnectionid] as PostgresDbConnectionDTO
            Assertions.assertEquals(dbConnectionid, apiDTO.id)
            Assertions.assertEquals(name, apiDTO.name)
            Assertions.assertEquals(host, apiDTO.host)
            Assertions.assertEquals(port, apiDTO.port)
            Assertions.assertEquals(user, apiDTO.user)
            Assertions.assertEquals(password, apiDTO.password)
            Assertions.assertEquals(dbName, apiDTO.dbName)
            Assertions.assertEquals(DbConnectionType.POSTGRES.name, apiDTO.type)
        }

    @get:Test
    val oracleDbConnection: Unit
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
            val connection: DbConnection<*> = OracleDbConnection(details, repository!!)
            Mockito.`when`(factory!!.byId(ArgumentMatchers.eq(dbConnectionid)))
                    .thenReturn(connection)
            val apiDTO = service!![dbConnectionid] as OracleDbConnectionDTO
            Assertions.assertEquals(dbConnectionid, apiDTO.id)
            Assertions.assertEquals(name, apiDTO.name)
            Assertions.assertEquals(host, apiDTO.host)
            Assertions.assertEquals(port, apiDTO.port)
            Assertions.assertEquals(user, apiDTO.user)
            Assertions.assertEquals(password, apiDTO.password)
            Assertions.assertEquals(sid, apiDTO.sid)
            Assertions.assertEquals(DbConnectionType.ORACLE.name, apiDTO.type)
        }

    @Test
    fun deleteDbConnection() {
        val dbConnection = Mockito.mock(DbConnection::class.java)
        Mockito.`when`(factory!!.byId(ArgumentMatchers.eq(dbConnectionid)))
                .thenReturn(dbConnection)
        service!!.delete(dbConnectionid)
        Mockito.verify(dbConnection, Mockito.timeout(1)).delete()
    }

    @get:Test
    val allDbConnection: Unit
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
            val connection1: DbConnection<*> = OracleDbConnection(details, repository!!)
            val details2 = PostgresDbConnectionDetails()
            details2.setId(dbConnectionid)
            details2.type = DbConnectionType.POSTGRES
            details2.name = name
            details2.host = host
            details2.port = port
            details2.user = user
            details2.password = password
            details2.dbName = dbName
            val connection2: DbConnection<*> = PostgresDbConnection(details2, repository)
            val c: MutableList<DbConnection<*>?> = ArrayList<Any?>()
            c.add(connection1)
            c.add(connection2)
            Mockito.`when`<List<DbConnection<*>?>>(factory!!.all)
                    .thenReturn(c)
            val list = service!!.list()
            val apiDTO1 = list[0] as OracleDbConnectionDTO
            Assertions.assertEquals(dbConnectionid, apiDTO1.id)
            Assertions.assertEquals(name, apiDTO1.name)
            Assertions.assertEquals(host, apiDTO1.host)
            Assertions.assertEquals(port, apiDTO1.port)
            Assertions.assertEquals(user, apiDTO1.user)
            Assertions.assertEquals(password, apiDTO1.password)
            Assertions.assertEquals(sid, apiDTO1.sid)
            Assertions.assertEquals(DbConnectionType.ORACLE.name, apiDTO1.type)
            val apiDTO2 = list[1] as PostgresDbConnectionDTO
            Assertions.assertEquals(dbConnectionid, apiDTO2.id)
            Assertions.assertEquals(name, apiDTO2.name)
            Assertions.assertEquals(host, apiDTO2.host)
            Assertions.assertEquals(port, apiDTO2.port)
            Assertions.assertEquals(user, apiDTO2.user)
            Assertions.assertEquals(password, apiDTO2.password)
            Assertions.assertEquals(dbName, apiDTO2.dbName)
            Assertions.assertEquals(DbConnectionType.POSTGRES.name, apiDTO2.type)
        }

    @get:Test
    val types: Unit
        get() {
            val types = service!!.types()
            Assertions.assertEquals(3, types.size)
            Assertions.assertEquals(DbConnectionType.POSTGRES.name, types[0].type)
            Assertions.assertEquals(DbConnectionType.POSTGRES.label, types[0].label)
            Assertions.assertEquals(DbConnectionType.ORACLE.name, types[1].type)
            Assertions.assertEquals(DbConnectionType.ORACLE.label, types[1].label)
            Assertions.assertEquals(DbConnectionType.MYSQL.name, types[2].type)
            Assertions.assertEquals(DbConnectionType.MYSQL.label, types[2].label)
        }
}*/
