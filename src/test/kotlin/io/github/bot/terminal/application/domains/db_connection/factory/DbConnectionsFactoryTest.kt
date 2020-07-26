/*
package io.github.bot.terminal.application.domains.db_connection.factory

import io.github.bot.terminal.application.domains.db_connection.entity.*
import io.github.bot.terminal.application.domains.db_connection.repository.DbConnectionRepository
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.*
import org.mockito.junit.jupiter.MockitoExtension
import java.util.*

@ExtendWith(MockitoExtension::class)
internal class DbConnectionsFactoryTest {
    @Mock
    private val repository: DbConnectionRepository? = null
    private var factory: DbConnectionsFactory? = null

    @Captor
    var postgresCaptor: ArgumentCaptor<PostgresDbConnectionDetails>? = null

    @Captor
    var mysqlCaptor: ArgumentCaptor<MySqlDbConnectionDetails>? = null

    @Captor
    var oracleCaptor: ArgumentCaptor<OracleDbConnectionDetails>? = null
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
    fun init() {
        factory = DbConnectionsFactory(repository!!)
    }

    @Test
    fun createPostgresDbConnection() {
        val details = PostgresDbConnectionDetails()
        details.type = DbConnectionType.POSTGRES
        details.name = name
        details.host = host
        details.port = port
        details.user = user
        details.password = password
        details.dbName = dbName
        val connection = factory!!.createNew(details) as PostgresDbConnection
        Assertions.assertNotNull(connection.details.id)
        Assertions.assertEquals(name, connection.details.name)
        Assertions.assertEquals(host, connection.details.host)
        Assertions.assertEquals(port, connection.details.port)
        Assertions.assertEquals(user, connection.details.user)
        Assertions.assertEquals(password, connection.details.password)
        Assertions.assertEquals(DbConnectionType.POSTGRES, connection.details.type)
        Mockito.verify(repository, Mockito.times(1))!!.add(postgresCaptor!!.capture())
        val passedDetails = postgresCaptor!!.value
        Assertions.assertNotNull(passedDetails.id)
        Assertions.assertEquals(name, passedDetails.name)
        Assertions.assertEquals(host, passedDetails.host)
        Assertions.assertEquals(port, passedDetails.port)
        Assertions.assertEquals(user, passedDetails.user)
        Assertions.assertEquals(password, passedDetails.password)
        Assertions.assertEquals(DbConnectionType.POSTGRES, passedDetails.type)
    }

    @Test
    fun createMySqlDbConnection() {
        val details = MySqlDbConnectionDetails()
        details.type = DbConnectionType.MYSQL
        details.name = name
        details.host = host
        details.port = port
        details.user = user
        details.password = password
        details.dbName = dbName
        val connection = factory!!.createNew(details) as MySqlDbConnection
        Assertions.assertNotNull(connection.details.id)
        Assertions.assertEquals(name, connection.details.name)
        Assertions.assertEquals(host, connection.details.host)
        Assertions.assertEquals(port, connection.details.port)
        Assertions.assertEquals(user, connection.details.user)
        Assertions.assertEquals(password, connection.details.password)
        Assertions.assertEquals(DbConnectionType.MYSQL, connection.details.type)
        Mockito.verify(repository, Mockito.times(1))!!.add(mysqlCaptor!!.capture())
        val passedDetails = mysqlCaptor!!.value
        Assertions.assertNotNull(passedDetails.id)
        Assertions.assertEquals(name, passedDetails.name)
        Assertions.assertEquals(host, passedDetails.host)
        Assertions.assertEquals(port, passedDetails.port)
        Assertions.assertEquals(user, passedDetails.user)
        Assertions.assertEquals(password, passedDetails.password)
        Assertions.assertEquals(DbConnectionType.MYSQL, passedDetails.type)
    }

    @Test
    fun createOracleDbConnection() {
        val details = OracleDbConnectionDetails()
        details.type = DbConnectionType.ORACLE
        details.name = name
        details.host = host
        details.port = port
        details.user = user
        details.password = password
        details.sid = dbName
        val connection = factory!!.createNew(details) as OracleDbConnection
        Assertions.assertNotNull(connection.details.id)
        Assertions.assertEquals(name, connection.details.name)
        Assertions.assertEquals(host, connection.details.host)
        Assertions.assertEquals(port, connection.details.port)
        Assertions.assertEquals(user, connection.details.user)
        Assertions.assertEquals(password, connection.details.password)
        Assertions.assertEquals(DbConnectionType.ORACLE, connection.details.type)
        Mockito.verify(repository, Mockito.times(1))!!.add(oracleCaptor!!.capture())
        val passedDetails = oracleCaptor!!.value
        Assertions.assertNotNull(passedDetails.id)
        Assertions.assertEquals(name, passedDetails.name)
        Assertions.assertEquals(host, passedDetails.host)
        Assertions.assertEquals(port, passedDetails.port)
        Assertions.assertEquals(user, passedDetails.user)
        Assertions.assertEquals(password, passedDetails.password)
        Assertions.assertEquals(DbConnectionType.ORACLE, passedDetails.type)
    }

    @Test
    fun mergeOracleDbConnection() {
        val details = OracleDbConnectionDetails()
        details.setId(dbConnectionid)
        details.type = DbConnectionType.ORACLE
        details.name = name
        details.host = host
        details.port = port
        details.user = user
        details.password = password
        details.sid = sid
        Mockito.`when`(repository!!.findById(ArgumentMatchers.eq(dbConnectionid))).thenReturn(Optional.of(details))
        val detailsUpdate = OracleDbConnectionDetails()
        detailsUpdate.setId(dbConnectionid)
        detailsUpdate.type = DbConnectionType.ORACLE
        detailsUpdate.name = name2
        detailsUpdate.host = host2
        detailsUpdate.port = port2
        detailsUpdate.user = user2
        detailsUpdate.password = password2
        detailsUpdate.sid = sid2
        val connection = factory!!.merge(dbConnectionid, detailsUpdate) as OracleDbConnection
        Assertions.assertEquals(dbConnectionid, connection.details.id)
        Assertions.assertEquals(name2, connection.details.name)
        Assertions.assertEquals(host2, connection.details.host)
        Assertions.assertEquals(port2, connection.details.port)
        Assertions.assertEquals(user2, connection.details.user)
        Assertions.assertEquals(password2, connection.details.password)
        Assertions.assertEquals(sid2, connection.details.sid)
        Assertions.assertEquals(DbConnectionType.ORACLE, connection.details.type)
        Mockito.verify(repository, Mockito.times(1))!!.update(oracleCaptor!!.capture())
        val passedDetails = oracleCaptor!!.value
        Assertions.assertEquals(dbConnectionid, passedDetails.id)
        Assertions.assertEquals(name2, passedDetails.name)
        Assertions.assertEquals(host2, passedDetails.host)
        Assertions.assertEquals(port2, passedDetails.port)
        Assertions.assertEquals(user2, passedDetails.user)
        Assertions.assertEquals(password2, passedDetails.password)
        Assertions.assertEquals(sid2, passedDetails.sid)
        Assertions.assertEquals(DbConnectionType.ORACLE, passedDetails.type)
    }

    @Test
    fun mergeMySqlDbConnection() {
        val details = MySqlDbConnectionDetails()
        details.setId(dbConnectionid)
        details.type = DbConnectionType.MYSQL
        details.name = name
        details.host = host
        details.port = port
        details.user = user
        details.password = password
        details.dbName = dbName
        Mockito.`when`(repository!!.findById(ArgumentMatchers.eq(dbConnectionid))).thenReturn(Optional.of(details))
        val detailsUpdate = MySqlDbConnectionDetails()
        detailsUpdate.setId(dbConnectionid)
        detailsUpdate.type = DbConnectionType.MYSQL
        detailsUpdate.name = name2
        detailsUpdate.host = host2
        detailsUpdate.port = port2
        detailsUpdate.user = user2
        detailsUpdate.password = password2
        detailsUpdate.dbName = dbName2
        val connection = factory!!.merge(dbConnectionid, detailsUpdate) as MySqlDbConnection
        Assertions.assertEquals(dbConnectionid, connection.details.id)
        Assertions.assertEquals(name2, connection.details.name)
        Assertions.assertEquals(host2, connection.details.host)
        Assertions.assertEquals(port2, connection.details.port)
        Assertions.assertEquals(user2, connection.details.user)
        Assertions.assertEquals(password2, connection.details.password)
        Assertions.assertEquals(dbName2, connection.details.dbName)
        Assertions.assertEquals(DbConnectionType.MYSQL, connection.details.type)
        Mockito.verify(repository, Mockito.times(1))!!.update(mysqlCaptor!!.capture())
        val passedDetails = mysqlCaptor!!.value
        Assertions.assertEquals(dbConnectionid, passedDetails.id)
        Assertions.assertEquals(name2, passedDetails.name)
        Assertions.assertEquals(host2, passedDetails.host)
        Assertions.assertEquals(port2, passedDetails.port)
        Assertions.assertEquals(user2, passedDetails.user)
        Assertions.assertEquals(password2, passedDetails.password)
        Assertions.assertEquals(dbName2, passedDetails.dbName)
        Assertions.assertEquals(DbConnectionType.MYSQL, passedDetails.type)
    }

    @Test
    fun mergePostgresDbConnection() {
        val details = PostgresDbConnectionDetails()
        details.setId(dbConnectionid)
        details.type = DbConnectionType.POSTGRES
        details.name = name
        details.host = host
        details.port = port
        details.user = user
        details.password = password
        details.dbName = dbName
        Mockito.`when`(repository!!.findById(ArgumentMatchers.eq(dbConnectionid))).thenReturn(Optional.of(details))
        val detailsUpdate = PostgresDbConnectionDetails()
        detailsUpdate.setId(dbConnectionid)
        detailsUpdate.type = DbConnectionType.POSTGRES
        detailsUpdate.name = name2
        detailsUpdate.host = host2
        detailsUpdate.port = port2
        detailsUpdate.user = user2
        detailsUpdate.password = password2
        detailsUpdate.dbName = dbName2
        val connection = factory!!.merge(dbConnectionid, detailsUpdate) as PostgresDbConnection
        Assertions.assertEquals(dbConnectionid, connection.details.id)
        Assertions.assertEquals(name2, connection.details.name)
        Assertions.assertEquals(host2, connection.details.host)
        Assertions.assertEquals(port2, connection.details.port)
        Assertions.assertEquals(user2, connection.details.user)
        Assertions.assertEquals(password2, connection.details.password)
        Assertions.assertEquals(dbName2, connection.details.dbName)
        Assertions.assertEquals(DbConnectionType.POSTGRES, connection.details.type)
        Mockito.verify(repository, Mockito.times(1))!!.update(postgresCaptor!!.capture())
        val passedDetails = postgresCaptor!!.value
        Assertions.assertEquals(dbConnectionid, passedDetails.id)
        Assertions.assertEquals(name2, passedDetails.name)
        Assertions.assertEquals(host2, passedDetails.host)
        Assertions.assertEquals(port2, passedDetails.port)
        Assertions.assertEquals(user2, passedDetails.user)
        Assertions.assertEquals(password2, passedDetails.password)
        Assertions.assertEquals(dbName2, passedDetails.dbName)
        Assertions.assertEquals(DbConnectionType.POSTGRES, passedDetails.type)
    }

    @get:Test
    val all: Unit
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
            val details2 = OracleDbConnectionDetails()
            details2.setId(dbConnectionid2)
            details2.type = DbConnectionType.ORACLE
            details2.name = name2
            details2.host = host2
            details2.port = port2
            details2.user = user2
            details2.password = password2
            details2.sid = sid2
            val c: MutableList<DbConnectionDetails?> = ArrayList<Any?>()
            c.add(details)
            c.add(details2)
            Mockito.`when`<List<DbConnectionDetails?>>(repository!!.findAll())
                    .thenReturn(c)
            val list = factory!!.all
            val byId = list[0].details as PostgresDbConnectionDetails
            Assertions.assertEquals(dbConnectionid, byId.id)
            Assertions.assertEquals(name, byId.name)
            Assertions.assertEquals(host, byId.host)
            Assertions.assertEquals(port, byId.port)
            Assertions.assertEquals(user, byId.user)
            Assertions.assertEquals(password, byId.password)
            Assertions.assertEquals(dbName, byId.dbName)
            Assertions.assertEquals(DbConnectionType.POSTGRES, byId.type)
            val byId2 = list[1].details as OracleDbConnectionDetails
            Assertions.assertEquals(dbConnectionid2, byId2.id)
            Assertions.assertEquals(name2, byId2.name)
            Assertions.assertEquals(host2, byId2.host)
            Assertions.assertEquals(port2, byId2.port)
            Assertions.assertEquals(user2, byId2.user)
            Assertions.assertEquals(password2, byId2.password)
            Assertions.assertEquals(sid2, byId2.sid)
            Assertions.assertEquals(DbConnectionType.ORACLE, byId2.type)
        }

    @Test
    fun byIdDbConnection() {
        val details = PostgresDbConnectionDetails()
        details.setId(dbConnectionid)
        details.type = DbConnectionType.POSTGRES
        details.name = name
        details.host = host
        details.port = port
        details.user = user
        details.password = password
        details.dbName = dbName
        Mockito.`when`(repository!!.findById(ArgumentMatchers.eq(dbConnectionid))).thenReturn(Optional.of(details))
        val details2 = OracleDbConnectionDetails()
        details2.setId(dbConnectionid2)
        details2.type = DbConnectionType.ORACLE
        details2.name = name2
        details2.host = host2
        details2.port = port2
        details2.user = user2
        details2.password = password2
        details2.sid = sid2
        Mockito.`when`(repository.findById(ArgumentMatchers.eq(dbConnectionid2))).thenReturn(Optional.of(details2))
        val byId = factory!!.byId(dbConnectionid).details as PostgresDbConnectionDetails
        Assertions.assertEquals(dbConnectionid, byId.id)
        Assertions.assertEquals(name, byId.name)
        Assertions.assertEquals(host, byId.host)
        Assertions.assertEquals(port, byId.port)
        Assertions.assertEquals(user, byId.user)
        Assertions.assertEquals(password, byId.password)
        Assertions.assertEquals(dbName, byId.dbName)
        Assertions.assertEquals(DbConnectionType.POSTGRES, byId.type)
        val byId2 = factory!!.byId(dbConnectionid2).details as OracleDbConnectionDetails
        Assertions.assertEquals(dbConnectionid2, byId2.id)
        Assertions.assertEquals(name2, byId2.name)
        Assertions.assertEquals(host2, byId2.host)
        Assertions.assertEquals(port2, byId2.port)
        Assertions.assertEquals(user2, byId2.user)
        Assertions.assertEquals(password2, byId2.password)
        Assertions.assertEquals(sid2, byId2.sid)
        Assertions.assertEquals(DbConnectionType.ORACLE, byId2.type)
    }

    @Test
    fun byIdNotFound() {
        Mockito.`when`(repository!!.findById(ArgumentMatchers.eq(dbConnectionid))).thenReturn(Optional.empty())
        Assertions.assertThrows(IllegalArgumentException::class.java) { factory!!.byId(dbConnectionid) }
    }

    @Test
    fun createUnknownType() {
        val details = PostgresDbConnectionDetails()
        details.setId(dbConnectionid)
        details.type = null
        details.name = name
        details.host = host
        details.port = port
        details.user = user
        details.password = password
        details.dbName = dbName
        Mockito.`when`(repository!!.findById(ArgumentMatchers.eq(dbConnectionid))).thenReturn(Optional.of(details))
        Assertions.assertThrows(IllegalArgumentException::class.java) { factory!!.byId(dbConnectionid) }
    }
}*/
