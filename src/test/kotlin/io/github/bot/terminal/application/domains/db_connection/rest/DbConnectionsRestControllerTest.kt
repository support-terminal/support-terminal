package io.github.bot.terminal.application.domains.db_connection.rest

import com.fasterxml.jackson.databind.ObjectMapper
import com.nhaarman.mockitokotlin2.*
import io.github.bot.terminal.application.domains.db_connection.DbConnectionTestData
import io.github.bot.terminal.application.domains.db_connection.DbConnectionsDataSet
import io.github.bot.terminal.application.domains.db_connection.rest.requests.DbConnectionRequest
import io.github.bot.terminal.application.domains.db_connection.someDbConnectionTypes
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.ArgumentCaptor
import org.mockito.Captor
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.junit.jupiter.MockitoExtension
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.*
import org.springframework.test.web.servlet.setup.MockMvcBuilders

@ExtendWith(MockitoExtension::class)
internal class DbConnectionsRestControllerTest {

    @Mock
    private lateinit var restService: DbConnectionsRestService

    @InjectMocks
    private lateinit var controller: DbConnectionsRestController

    @Captor
    private lateinit var requestArgumentCaptor: ArgumentCaptor<DbConnectionRequest>

    private val mapper = ObjectMapper()
    private val API_PATH = "/api/db-connections"
    private lateinit var mockMvc: MockMvc

    @BeforeEach
    fun setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(controller).build()
    }

    @Test
    fun `available db types`() {
        whenever(restService.types()).thenReturn(someDbConnectionTypes)
        mockMvc.get("${API_PATH}/types") {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
        }.andExpect {
            status { isOk }
            content { contentType(MediaType.APPLICATION_JSON) }
            content { json(mapper.writeValueAsString(someDbConnectionTypes)) }
        }
    }

    @Test
    fun `add postgres db connection`() {
        addDbConnection(DbConnectionsDataSet.Postgres.POSTGRES_1)
    }

    @Test
    fun `add mysql db connection`() {
        addDbConnection(DbConnectionsDataSet.MySql.MY_SQL_1)
    }

    @Test
    fun `add oracle db connection`() {
        addDbConnection(DbConnectionsDataSet.Oracle.ORACLE_1)
    }

    private fun addDbConnection(data: DbConnectionTestData) {
        whenever(restService.add(any())).thenReturn(data.dto())
        mockMvc.post(API_PATH) {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
            content = mapper.writeValueAsString(data.request())
        }.andExpect {
            status { isCreated }
            content { contentType(MediaType.APPLICATION_JSON) }
            content { json(mapper.writeValueAsString(data.dto())) }
        }
        verify(restService, times(1)).add(capture(requestArgumentCaptor))
        Assertions.assertEquals(data.request(), requestArgumentCaptor.value)
    }

    @Test
    fun `edit postgres db connection`() {
        editDbConnection(DbConnectionsDataSet.Postgres.POSTGRES_1, DbConnectionsDataSet.Postgres.POSTGRES_2)
    }

    @Test
    fun `edit oracle db connection`() {
        editDbConnection(DbConnectionsDataSet.Oracle.ORACLE_1, DbConnectionsDataSet.Oracle.ORACLE_2)
    }

    @Test
    fun `edit mysql db connection`() {
        editDbConnection(DbConnectionsDataSet.MySql.MY_SQL_1, DbConnectionsDataSet.MySql.MY_SQL_2)
    }

    private fun editDbConnection(data: DbConnectionTestData, update: DbConnectionTestData) {
        whenever(restService.edit(any(), any())).thenReturn(update.dto())
        mockMvc.put("${API_PATH}/${data.id()}") {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
            content = mapper.writeValueAsString(update.request())
        }.andExpect {
            status { isOk }
            content { contentType(MediaType.APPLICATION_JSON) }
            content { json(mapper.writeValueAsString(update.dto())) }
        }
        verify(restService, times(1)).edit(eq(data.id()), capture(requestArgumentCaptor))
        Assertions.assertEquals(update.request(), requestArgumentCaptor.value)
    }

    @Test
    fun `get postgres db connection`() {
        getDbConnection(DbConnectionsDataSet.Postgres.POSTGRES_1)
    }

    @Test
    fun `get mysql db connection`() {
        getDbConnection(DbConnectionsDataSet.MySql.MY_SQL_1)
    }

    @Test
    fun `get oracle db connection`() {
        getDbConnection(DbConnectionsDataSet.Oracle.ORACLE_1)
    }

    private fun getDbConnection(data: DbConnectionTestData) {
        whenever(restService.get(eq(data.id())))
                .thenReturn(data.dto())
        mockMvc.get("${API_PATH}/${data.id()}") {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
        }.andExpect {
            status { isOk }
            content { contentType(MediaType.APPLICATION_JSON) }
            content { json(mapper.writeValueAsString(data.dto())) }
        }
        verify(restService, times(1)).get(eq(data.id()))
    }


    @Test
    fun `get list db connections`() {
        val listApis = listOf(
                DbConnectionsDataSet.Oracle.ORACLE_1.dto(),
                DbConnectionsDataSet.MySql.MY_SQL_1.dto(),
                DbConnectionsDataSet.Postgres.POSTGRES_1.dto()
        )
        whenever(restService.list()).thenReturn(listApis)

        mockMvc.get("${API_PATH}") {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
        }.andExpect {
            status { isOk }
            content { contentType(MediaType.APPLICATION_JSON) }
            content { json(mapper.writeValueAsString(listApis)) }
        }
        verify(restService, times(1)).list()
    }

    @Test
    fun `delete db connection`() {
        mockMvc.delete("${API_PATH}/${DbConnectionsDataSet.Oracle.ORACLE_1.id()}") {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
        }.andExpect {
            status { isNoContent }
        }
        verify(restService, times(1))
                .delete(eq(DbConnectionsDataSet.Oracle.ORACLE_1.id()))
    }

}