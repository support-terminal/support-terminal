/*
package io.github.bot.terminal.application.domains.db_connection.rest

import com.fasterxml.jackson.databind.ObjectMapper
import io.github.bot.terminal.application.domains.db_connection.rest.dto.*
import io.github.bot.terminal.application.domains.db_connection.rest.requests.MySqlDbConnectionRequest
import io.github.bot.terminal.application.domains.db_connection.rest.requests.OracleDbConnectionRequest
import io.github.bot.terminal.application.domains.db_connection.rest.requests.PostgresDbConnectionRequest
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType
import org.hamcrest.core.Is
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.*
import org.mockito.junit.jupiter.MockitoExtension
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import java.util.*

@ExtendWith(MockitoExtension::class)
internal class DbConnectionsRestControllerTest {
    @Mock
    private val service: DbConnectionsRestService? = null

    @InjectMocks
    private val controller: DbConnectionsRestController? = null

    @Captor
    var postgresRequestArgumentCaptor: ArgumentCaptor<PostgresDbConnectionRequest>? = null

    @Captor
    var mysqlRequestArgumentCaptor: ArgumentCaptor<MySqlDbConnectionRequest>? = null

    @Captor
    var oracleRequestArgumentCaptor: ArgumentCaptor<OracleDbConnectionRequest>? = null
    private val mapper = ObjectMapper()
    private var mockMvc: MockMvc? = null
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
    fun setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(controller).build()
    }

    @get:Throws(Exception::class)
    @get:Test
    val availableDbConnectionTypes: Unit
        get() {
            val dto = DbConnectionTypeDTO()
            dto.setType(DbConnectionType.POSTGRES.name)
            dto.setLabel(DbConnectionType.POSTGRES.label)
            Mockito.`when`(service!!.types()).thenReturn(listOf(dto))
            mockMvc!!.perform(MockMvcRequestBuilders.get("/api/db-connections/types")
                    .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(MockMvcResultMatchers.status().isOk)
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].type", Is.`is`(DbConnectionType.POSTGRES.name)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].label", Is.`is`(DbConnectionType.POSTGRES.label)))
        }

    @Test
    @Throws(Exception::class)
    fun testPostgresDataBaseConnection() {
        val request = PostgresDbConnectionRequest()
        request.setName(name)
        request.setHost(host)
        request.setPort(port)
        request.setUser(user)
        request.setPassword(password)
        request.setDbName(dbName)
        Mockito.`when`(service!!.check(ArgumentMatchers.any())).thenReturn(CheckDbConnectionDTO(true))
        mockMvc!!.perform(MockMvcRequestBuilders.post("/api/db-connections/check")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andExpect(MockMvcResultMatchers.jsonPath("$.success", Is.`is`(true)))
        Mockito.verify(service, Mockito.times(1))
                .check(postgresRequestArgumentCaptor!!.capture())
        val value = postgresRequestArgumentCaptor!!.value
        Assertions.assertEquals(name, value.name)
        Assertions.assertEquals(host, value.host)
        Assertions.assertEquals(port, value.port)
        Assertions.assertEquals(user, value.user)
        Assertions.assertEquals(password, value.password)
        Assertions.assertEquals(dbName, value.dbName)
    }

    @Test
    @Throws(Exception::class)
    fun addPostgresDataBaseConnection() {
        val dto = PostgresDbConnectionDTO()
        dto.setId(dbConnectionid)
        dto.setType(DbConnectionType.POSTGRES.name)
        dto.setName(name)
        dto.setHost(host)
        dto.setPort(port)
        dto.setUser(user)
        dto.setPassword(password)
        dto.setDbName(dbName)
        Mockito.`when`(service!!.add(ArgumentMatchers.any())).thenReturn(dto)
        val request = PostgresDbConnectionRequest()
        request.setName(name)
        request.setHost(host)
        request.setPort(port)
        request.setUser(user)
        request.setPassword(password)
        request.setDbName(dbName)
        mockMvc!!.perform(MockMvcRequestBuilders.post("/api/db-connections")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isCreated)
                .andExpect(MockMvcResultMatchers.jsonPath("$.id", Is.`is`(dbConnectionid)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.type", Is.`is`(DbConnectionType.Constants.POSTGRES)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.name", Is.`is`(name)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.host", Is.`is`(host)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.port", Is.`is`(port)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.user", Is.`is`(user)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.password", Is.`is`(password)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.dbName", Is.`is`(dbName)))
        Mockito.verify(service, Mockito.times(1))
                .add(postgresRequestArgumentCaptor!!.capture())
        val value = postgresRequestArgumentCaptor!!.value
        Assertions.assertEquals(name, value.name)
        Assertions.assertEquals(host, value.host)
        Assertions.assertEquals(port, value.port)
        Assertions.assertEquals(user, value.user)
        Assertions.assertEquals(password, value.password)
        Assertions.assertEquals(dbName, value.dbName)
    }

    @Test
    @Throws(Exception::class)
    fun addMySqlDataBaseConnection() {
        val dto = MySqlDbConnectionDTO()
        dto.setId(dbConnectionid)
        dto.setType(DbConnectionType.MYSQL.name)
        dto.setName(name)
        dto.setHost(host)
        dto.setPort(port)
        dto.setUser(user)
        dto.setPassword(password)
        dto.setDbName(dbName)
        Mockito.`when`(service!!.add(ArgumentMatchers.any())).thenReturn(dto)
        val request = MySqlDbConnectionRequest()
        request.setName(name)
        request.setHost(host)
        request.setPort(port)
        request.setUser(user)
        request.setPassword(password)
        request.setDbName(dbName)
        mockMvc!!.perform(MockMvcRequestBuilders.post("/api/db-connections")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isCreated)
                .andExpect(MockMvcResultMatchers.jsonPath("$.id", Is.`is`(dbConnectionid)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.type", Is.`is`(DbConnectionType.Constants.MYSQL)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.name", Is.`is`(name)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.host", Is.`is`(host)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.port", Is.`is`(port)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.user", Is.`is`(user)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.password", Is.`is`(password)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.dbName", Is.`is`(dbName)))
        Mockito.verify(service, Mockito.times(1))
                .add(mysqlRequestArgumentCaptor!!.capture())
        val value = mysqlRequestArgumentCaptor!!.value
        Assertions.assertEquals(name, value.name)
        Assertions.assertEquals(host, value.host)
        Assertions.assertEquals(port, value.port)
        Assertions.assertEquals(user, value.user)
        Assertions.assertEquals(password, value.password)
        Assertions.assertEquals(dbName, value.dbName)
    }

    @Test
    @Throws(Exception::class)
    fun addOracleDataBaseConnection() {
        val dto = OracleDbConnectionDTO()
        dto.setId(dbConnectionid)
        dto.setType(DbConnectionType.ORACLE.name)
        dto.setName(name)
        dto.setHost(host)
        dto.setPort(port)
        dto.setUser(user)
        dto.setPassword(password)
        dto.setSid(sid)
        Mockito.`when`(service!!.add(ArgumentMatchers.any())).thenReturn(dto)
        val request = OracleDbConnectionRequest()
        request.setName(name)
        request.setHost(host)
        request.setPort(port)
        request.setUser(user)
        request.setPassword(password)
        request.setSid(sid)
        mockMvc!!.perform(MockMvcRequestBuilders.post("/api/db-connections")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isCreated)
                .andExpect(MockMvcResultMatchers.jsonPath("$.id", Is.`is`(dbConnectionid)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.type", Is.`is`(DbConnectionType.Constants.ORACLE)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.name", Is.`is`(name)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.host", Is.`is`(host)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.port", Is.`is`(port)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.user", Is.`is`(user)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.password", Is.`is`(password)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.sid", Is.`is`(sid)))
        Mockito.verify(service, Mockito.times(1))
                .add(oracleRequestArgumentCaptor!!.capture())
        val value = oracleRequestArgumentCaptor!!.value
        Assertions.assertEquals(name, value.name)
        Assertions.assertEquals(host, value.host)
        Assertions.assertEquals(port, value.port)
        Assertions.assertEquals(user, value.user)
        Assertions.assertEquals(password, value.password)
        Assertions.assertEquals(sid, value.sid)
    }

    @Test
    @Throws(Exception::class)
    fun editPostgresDataBaseConnection() {
        val dto = PostgresDbConnectionDTO()
        dto.setId(dbConnectionid)
        dto.setType(DbConnectionType.POSTGRES.name)
        dto.setName(name)
        dto.setHost(host)
        dto.setPort(port)
        dto.setUser(user)
        dto.setPassword(password)
        dto.setDbName(dbName)
        Mockito.`when`(service!!.edit(ArgumentMatchers.any(), ArgumentMatchers.any())).thenReturn(dto)
        val request = PostgresDbConnectionRequest()
        request.setName(name)
        request.setHost(host)
        request.setPort(port)
        request.setUser(user)
        request.setPassword(password)
        request.setDbName(dbName)
        mockMvc!!.perform(MockMvcRequestBuilders.put("/api/db-connections/$dbConnectionid")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andExpect(MockMvcResultMatchers.jsonPath("$.id", Is.`is`(dbConnectionid)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.type", Is.`is`(DbConnectionType.Constants.POSTGRES)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.name", Is.`is`(name)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.host", Is.`is`(host)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.port", Is.`is`(port)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.user", Is.`is`(user)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.password", Is.`is`(password)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.dbName", Is.`is`(dbName)))
        Mockito.verify(service, Mockito.times(1))
                .edit(ArgumentMatchers.eq(dbConnectionid), postgresRequestArgumentCaptor!!.capture())
        val value = postgresRequestArgumentCaptor!!.value
        Assertions.assertEquals(name, value.name)
        Assertions.assertEquals(host, value.host)
        Assertions.assertEquals(port, value.port)
        Assertions.assertEquals(user, value.user)
        Assertions.assertEquals(password, value.password)
        Assertions.assertEquals(dbName, value.dbName)
    }

    @Test
    @Throws(Exception::class)
    fun editMySqlDataBaseConnection() {
        val dto = MySqlDbConnectionDTO()
        dto.setId(dbConnectionid)
        dto.setType(DbConnectionType.MYSQL.name)
        dto.setName(name)
        dto.setHost(host)
        dto.setPort(port)
        dto.setUser(user)
        dto.setPassword(password)
        dto.setDbName(dbName)
        Mockito.`when`(service!!.edit(ArgumentMatchers.any(), ArgumentMatchers.any())).thenReturn(dto)
        val request = MySqlDbConnectionRequest()
        request.setName(name)
        request.setHost(host)
        request.setPort(port)
        request.setUser(user)
        request.setPassword(password)
        request.setDbName(dbName)
        mockMvc!!.perform(MockMvcRequestBuilders.put("/api/db-connections/$dbConnectionid")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andExpect(MockMvcResultMatchers.jsonPath("$.id", Is.`is`(dbConnectionid)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.type", Is.`is`(DbConnectionType.Constants.MYSQL)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.name", Is.`is`(name)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.host", Is.`is`(host)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.port", Is.`is`(port)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.user", Is.`is`(user)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.password", Is.`is`(password)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.dbName", Is.`is`(dbName)))
        Mockito.verify(service, Mockito.times(1))
                .edit(ArgumentMatchers.eq(dbConnectionid), mysqlRequestArgumentCaptor!!.capture())
        val value = mysqlRequestArgumentCaptor!!.value
        Assertions.assertEquals(name, value.name)
        Assertions.assertEquals(host, value.host)
        Assertions.assertEquals(port, value.port)
        Assertions.assertEquals(user, value.user)
        Assertions.assertEquals(password, value.password)
        Assertions.assertEquals(dbName, value.dbName)
    }

    @Test
    @Throws(Exception::class)
    fun editOracleDataBaseConnection() {
        val dto = OracleDbConnectionDTO()
        dto.setId(dbConnectionid)
        dto.setType(DbConnectionType.ORACLE.name)
        dto.setName(name)
        dto.setHost(host)
        dto.setPort(port)
        dto.setUser(user)
        dto.setPassword(password)
        dto.setSid(sid)
        Mockito.`when`(service!!.edit(ArgumentMatchers.any(), ArgumentMatchers.any())).thenReturn(dto)
        val request = OracleDbConnectionRequest()
        request.setName(name)
        request.setHost(host)
        request.setPort(port)
        request.setUser(user)
        request.setPassword(password)
        request.setSid(sid)
        mockMvc!!.perform(MockMvcRequestBuilders.put("/api/db-connections/$dbConnectionid")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andExpect(MockMvcResultMatchers.jsonPath("$.id", Is.`is`(dbConnectionid)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.type", Is.`is`(DbConnectionType.Constants.ORACLE)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.name", Is.`is`(name)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.host", Is.`is`(host)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.port", Is.`is`(port)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.user", Is.`is`(user)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.password", Is.`is`(password)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.sid", Is.`is`(sid)))
        Mockito.verify(service, Mockito.times(1))
                .edit(ArgumentMatchers.eq(dbConnectionid), oracleRequestArgumentCaptor!!.capture())
        val value = oracleRequestArgumentCaptor!!.value
        Assertions.assertEquals(name, value.name)
        Assertions.assertEquals(host, value.host)
        Assertions.assertEquals(port, value.port)
        Assertions.assertEquals(user, value.user)
        Assertions.assertEquals(password, value.password)
        Assertions.assertEquals(sid, value.sid)
    }

    @get:Throws(Exception::class)
    @get:Test
    val postgresDataBaseConnection: Unit
        get() {
            val dto = PostgresDbConnectionDTO()
            dto.setId(dbConnectionid)
            dto.setType(DbConnectionType.POSTGRES.name)
            dto.setName(name)
            dto.setHost(host)
            dto.setPort(port)
            dto.setUser(user)
            dto.setPassword(password)
            dto.setDbName(dbName)
            Mockito.`when`(service!![ArgumentMatchers.any()]).thenReturn(dto)
            mockMvc!!.perform(MockMvcRequestBuilders.get("/api/db-connections/$dbConnectionid")
                    .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(MockMvcResultMatchers.status().isOk)
                    .andExpect(MockMvcResultMatchers.jsonPath("$.id", Is.`is`(dbConnectionid)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.type", Is.`is`(DbConnectionType.Constants.POSTGRES)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.name", Is.`is`(name)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.host", Is.`is`(host)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.port", Is.`is`(port)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.user", Is.`is`(user)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.password", Is.`is`(password)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.dbName", Is.`is`(dbName)))
            Mockito.verify(service, Mockito.times(1))
                    .get(ArgumentMatchers.eq(dbConnectionid))
        }

    @get:Throws(Exception::class)
    @get:Test
    val mySqlDataBaseConnection: Unit
        get() {
            val dto = MySqlDbConnectionDTO()
            dto.setId(dbConnectionid)
            dto.setType(DbConnectionType.MYSQL.name)
            dto.setName(name)
            dto.setHost(host)
            dto.setPort(port)
            dto.setUser(user)
            dto.setPassword(password)
            dto.setDbName(dbName)
            Mockito.`when`(service!![ArgumentMatchers.any()]).thenReturn(dto)
            mockMvc!!.perform(MockMvcRequestBuilders.get("/api/db-connections/$dbConnectionid")
                    .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(MockMvcResultMatchers.status().isOk)
                    .andExpect(MockMvcResultMatchers.jsonPath("$.id", Is.`is`(dbConnectionid)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.type", Is.`is`(DbConnectionType.Constants.MYSQL)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.name", Is.`is`(name)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.host", Is.`is`(host)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.port", Is.`is`(port)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.user", Is.`is`(user)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.password", Is.`is`(password)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.dbName", Is.`is`(dbName)))
            Mockito.verify(service, Mockito.times(1))
                    .get(ArgumentMatchers.eq(dbConnectionid))
        }

    @get:Throws(Exception::class)
    @get:Test
    val oracleDataBaseConnection: Unit
        get() {
            val dto = OracleDbConnectionDTO()
            dto.setId(dbConnectionid)
            dto.setType(DbConnectionType.ORACLE.name)
            dto.setName(name)
            dto.setHost(host)
            dto.setPort(port)
            dto.setUser(user)
            dto.setPassword(password)
            dto.setSid(sid)
            Mockito.`when`(service!![ArgumentMatchers.any()]).thenReturn(dto)
            mockMvc!!.perform(MockMvcRequestBuilders.get("/api/db-connections/$dbConnectionid")
                    .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(MockMvcResultMatchers.status().isOk)
                    .andExpect(MockMvcResultMatchers.jsonPath("$.id", Is.`is`(dbConnectionid)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.type", Is.`is`(DbConnectionType.Constants.ORACLE)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.name", Is.`is`(name)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.host", Is.`is`(host)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.port", Is.`is`(port)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.user", Is.`is`(user)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.password", Is.`is`(password)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.sid", Is.`is`(sid)))
            Mockito.verify(service, Mockito.times(1))
                    .get(ArgumentMatchers.eq(dbConnectionid))
        }

    @get:Throws(Exception::class)
    @get:Test
    val list: Unit
        get() {
            val dto1 = OracleDbConnectionDTO()
            dto1.setId(dbConnectionid)
            dto1.setType(DbConnectionType.ORACLE.name)
            dto1.setName(name)
            dto1.setHost(host)
            dto1.setPort(port)
            dto1.setUser(user)
            dto1.setPassword(password)
            dto1.setSid(sid)
            val dto2 = MySqlDbConnectionDTO()
            dto2.setId(dbConnectionid2)
            dto2.setType(DbConnectionType.MYSQL.name)
            dto2.setName(name2)
            dto2.setHost(host2)
            dto2.setPort(port2)
            dto2.setUser(user2)
            dto2.setPassword(password2)
            dto2.setDbName(dbName2)
            val c: MutableList<DbConnectionDTO> = ArrayList()
            c.add(dto1)
            c.add(dto2)
            Mockito.`when`(service!!.list()).thenReturn(c)
            mockMvc!!.perform(MockMvcRequestBuilders.get("/api/db-connections")
                    .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(MockMvcResultMatchers.status().isOk)
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].id", Is.`is`(dbConnectionid)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].type", Is.`is`(DbConnectionType.Constants.ORACLE)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].name", Is.`is`(name)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].host", Is.`is`(host)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].port", Is.`is`(port)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].user", Is.`is`(user)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].password", Is.`is`(password)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].sid", Is.`is`(sid)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].id", Is.`is`(dbConnectionid2)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].type", Is.`is`(DbConnectionType.Constants.MYSQL)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].name", Is.`is`(name2)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].host", Is.`is`(host2)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].port", Is.`is`(port2)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].user", Is.`is`(user2)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].password", Is.`is`(password2)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].dbName", Is.`is`(dbName2)))
        }

    @Test
    @Throws(Exception::class)
    fun deleteNotificationApi() {
        mockMvc!!.perform(MockMvcRequestBuilders.delete("/api/db-connections/$dbConnectionid")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isNoContent)
        Mockito.verify(service, Mockito.times(1))
                .delete(ArgumentMatchers.eq(dbConnectionid))
    }
}*/
