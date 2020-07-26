/*
package io.github.bot.terminal.application.domains.db_connection.repository

import io.github.bot.terminal.application.domains.db_connection.DbConnectionsRepositoryTestConfig
import io.github.bot.terminal.application.domains.db_connection.entity.MySqlDbConnectionDetails
import io.github.bot.terminal.application.domains.db_connection.entity.OracleDbConnectionDetails
import io.github.bot.terminal.application.domains.db_connection.entity.PostgresDbConnectionDetails
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Import
import org.springframework.test.context.junit.jupiter.SpringExtension
import java.util.*

@ExtendWith(SpringExtension::class)
@Import(DbConnectionsRepositoryTestConfig::class)
internal class DbConnectionRepositoryTest {
    @Autowired
    var repository: DbConnectionRepository? = null
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

    @AfterEach
    fun clean() {
        repository!!.deleteById(dbConnectionid)
        repository!!.deleteById(dbConnectionid2)
    }

    @Test
    fun addPostgresDetails() {
        val details = PostgresDbConnectionDetails()
        details.setId(dbConnectionid)
        details.type = DbConnectionType.POSTGRES
        details.name = name
        details.host = host
        details.port = port
        details.user = user
        details.password = password
        details.dbName = dbName
        repository!!.add(details)
        val byId = repository!!.findById(dbConnectionid).get() as PostgresDbConnectionDetails
        Assertions.assertEquals(name, byId.name)
        Assertions.assertEquals(host, byId.host)
        Assertions.assertEquals(port, byId.port)
        Assertions.assertEquals(user, byId.user)
        Assertions.assertEquals(password, byId.password)
        Assertions.assertEquals(dbName, byId.dbName)
        Assertions.assertEquals(DbConnectionType.POSTGRES, byId.type)
    }

    @Test
    fun addMySqlDetails() {
        val details = MySqlDbConnectionDetails()
        details.setId(dbConnectionid)
        details.type = DbConnectionType.MYSQL
        details.name = name
        details.host = host
        details.port = port
        details.user = user
        details.password = password
        details.dbName = dbName
        repository!!.add(details)
        val byId = repository!!.findById(dbConnectionid).get() as MySqlDbConnectionDetails
        Assertions.assertEquals(name, byId.name)
        Assertions.assertEquals(host, byId.host)
        Assertions.assertEquals(port, byId.port)
        Assertions.assertEquals(user, byId.user)
        Assertions.assertEquals(password, byId.password)
        Assertions.assertEquals(dbName, byId.dbName)
        Assertions.assertEquals(DbConnectionType.MYSQL, byId.type)
    }

    @Test
    fun addOracleDetails() {
        val details = OracleDbConnectionDetails()
        details.setId(dbConnectionid)
        details.type = DbConnectionType.ORACLE
        details.name = name
        details.host = host
        details.port = port
        details.user = user
        details.password = password
        details.sid = sid
        repository!!.add(details)
        val byId = repository!!.findById(dbConnectionid).get() as OracleDbConnectionDetails
        Assertions.assertEquals(name, byId.name)
        Assertions.assertEquals(host, byId.host)
        Assertions.assertEquals(port, byId.port)
        Assertions.assertEquals(user, byId.user)
        Assertions.assertEquals(password, byId.password)
        Assertions.assertEquals(sid, byId.sid)
        Assertions.assertEquals(DbConnectionType.ORACLE, byId.type)
    }

    @Test
    fun editOracleDetails() {
        val details = OracleDbConnectionDetails()
        details.setId(dbConnectionid)
        details.type = DbConnectionType.ORACLE
        details.name = name
        details.host = host
        details.port = port
        details.user = user
        details.password = password
        details.sid = sid
        repository!!.add(details)
        details.name = name2
        details.host = host2
        details.port = port2
        details.user = user2
        details.password = password2
        details.sid = sid2
        repository!!.update(details)
        val byId = repository!!.findById(dbConnectionid).get() as OracleDbConnectionDetails
        Assertions.assertEquals(name2, byId.name)
        Assertions.assertEquals(host2, byId.host)
        Assertions.assertEquals(port2, byId.port)
        Assertions.assertEquals(user2, byId.user)
        Assertions.assertEquals(password2, byId.password)
        Assertions.assertEquals(sid2, byId.sid)
        Assertions.assertEquals(DbConnectionType.ORACLE, byId.type)
    }

    @Test
    fun editMySqlDetails() {
        val details = MySqlDbConnectionDetails()
        details.setId(dbConnectionid)
        details.type = DbConnectionType.MYSQL
        details.name = name
        details.host = host
        details.port = port
        details.user = user
        details.password = password
        details.dbName = dbName
        repository!!.add(details)
        details.name = name2
        details.host = host2
        details.port = port2
        details.user = user2
        details.password = password2
        details.dbName = dbName2
        repository!!.update(details)
        val byId = repository!!.findById(dbConnectionid).get() as MySqlDbConnectionDetails
        Assertions.assertEquals(name2, byId.name)
        Assertions.assertEquals(host2, byId.host)
        Assertions.assertEquals(port2, byId.port)
        Assertions.assertEquals(user2, byId.user)
        Assertions.assertEquals(password2, byId.password)
        Assertions.assertEquals(dbName2, byId.dbName)
        Assertions.assertEquals(DbConnectionType.MYSQL, byId.type)
    }

    @Test
    fun editPostgresDetails() {
        val details = PostgresDbConnectionDetails()
        details.setId(dbConnectionid)
        details.type = DbConnectionType.POSTGRES
        details.name = name
        details.host = host
        details.port = port
        details.user = user
        details.password = password
        details.dbName = dbName
        repository!!.add(details)
        details.name = name2
        details.host = host2
        details.port = port2
        details.user = user2
        details.password = password2
        details.dbName = dbName2
        repository!!.update(details)
        val byId = repository!!.findById(dbConnectionid).get() as PostgresDbConnectionDetails
        Assertions.assertEquals(name2, byId.name)
        Assertions.assertEquals(host2, byId.host)
        Assertions.assertEquals(port2, byId.port)
        Assertions.assertEquals(user2, byId.user)
        Assertions.assertEquals(password2, byId.password)
        Assertions.assertEquals(dbName2, byId.dbName)
        Assertions.assertEquals(DbConnectionType.POSTGRES, byId.type)
    }

    @Test
    fun findAll() {
        val details = PostgresDbConnectionDetails()
        details.setId(dbConnectionid)
        details.type = DbConnectionType.POSTGRES
        details.name = name
        details.host = host
        details.port = port
        details.user = user
        details.password = password
        details.dbName = dbName
        repository!!.add(details)
        val details2 = OracleDbConnectionDetails()
        details2.setId(dbConnectionid2)
        details2.type = DbConnectionType.ORACLE
        details2.name = name2
        details2.host = host2
        details2.port = port2
        details2.user = user2
        details2.password = password2
        details2.sid = sid2
        repository!!.add(details2)
        val all = repository!!.findAll()
        val byId = all[0] as PostgresDbConnectionDetails
        Assertions.assertEquals(name, byId.name)
        Assertions.assertEquals(host, byId.host)
        Assertions.assertEquals(port, byId.port)
        Assertions.assertEquals(user, byId.user)
        Assertions.assertEquals(password, byId.password)
        Assertions.assertEquals(dbName, byId.dbName)
        Assertions.assertEquals(DbConnectionType.POSTGRES, byId.type)
        val byId2 = all[1] as OracleDbConnectionDetails
        Assertions.assertEquals(name2, byId2.name)
        Assertions.assertEquals(host2, byId2.host)
        Assertions.assertEquals(port2, byId2.port)
        Assertions.assertEquals(user2, byId2.user)
        Assertions.assertEquals(password2, byId2.password)
        Assertions.assertEquals(sid2, byId2.sid)
        Assertions.assertEquals(DbConnectionType.ORACLE, byId2.type)
    }

    @Test
    fun deleteById() {
        val id = UUID.randomUUID().toString()
        val details = PostgresDbConnectionDetails()
        details.setId(id)
        details.type = DbConnectionType.POSTGRES
        details.name = name
        details.host = host
        details.port = port
        details.user = user
        details.password = password
        details.dbName = dbName
        repository!!.add(details)
        Assertions.assertTrue(repository!!.findById(id).isPresent)
        repository!!.deleteById(id)
        Assertions.assertFalse(repository!!.findById(id).isPresent)
    }
}*/
