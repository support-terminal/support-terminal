
package io.github.bot.terminal.application.domains.db_connection.rest

import com.nhaarman.mockitokotlin2.*
import io.github.bot.terminal.application.domains.db_connection.DbConnectionTestData
import io.github.bot.terminal.application.domains.db_connection.DbConnectionsDataSet
import io.github.bot.terminal.application.domains.db_connection.entity.DbConnectionDetails
import io.github.bot.terminal.application.domains.db_connection.entity.MySqlDbConnectionDetails
import io.github.bot.terminal.application.domains.db_connection.entity.OracleDbConnectionDetails
import io.github.bot.terminal.application.domains.db_connection.entity.PostgresDbConnectionDetails
import io.github.bot.terminal.application.domains.db_connection.factory.DbConnectionsFactory
import io.github.bot.terminal.application.domains.db_connection.rest.dto.DbConnectionDTO
import io.github.bot.terminal.application.domains.db_connection.rest.dto.MySqlDbConnectionDTO
import io.github.bot.terminal.application.domains.db_connection.rest.dto.OracleDbConnectionDTO
import io.github.bot.terminal.application.domains.db_connection.rest.dto.PostgresDbConnectionDTO
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.*
import org.mockito.junit.jupiter.MockitoExtension
import java.util.*

@ExtendWith(MockitoExtension::class)
class DbConnectionsRestServiceTest {

    private val factory: DbConnectionsFactory = mock()

    @Captor
    private lateinit var detailsCaptor: ArgumentCaptor<DbConnectionDetails>

    private val converter = Mockito.spy(DbConnectionsRestConverter())

    private lateinit var restService: DbConnectionsRestService

    @BeforeEach
    fun inti() {
        reset(factory)
        restService = DbConnectionsRestService(factory, converter)
    }

    @Test
    fun addUnknownDbConnection() {
        Assertions.assertThrows(IllegalArgumentException::class.java) {
            restService.add(DbConnectionsDataSet.Wrong.WRONG_1.request())
        }
    }

    @Test
    fun `add new postgres db connection`() {
        val data = DbConnectionsDataSet.Postgres.POSTGRES_1
        addDbConnection(data,
                {
                    val dto = it as PostgresDbConnectionDTO
                    Assertions.assertEquals(data.label, dto.name)
                    Assertions.assertEquals(data.host, dto.host)
                    Assertions.assertEquals(data.port, dto.port)
                    Assertions.assertEquals(data.user, dto.user)
                    Assertions.assertEquals(data.password, dto.password)
                    Assertions.assertEquals(data.dbName, dto.dbName)
                },
                {
                    val details = it as PostgresDbConnectionDetails
                    Assertions.assertEquals(data.label, details.name)
                    Assertions.assertEquals(data.host, details.host)
                    Assertions.assertEquals(data.port, details.port)
                    Assertions.assertEquals(data.user, details.user)
                    Assertions.assertEquals(data.password, details.password)
                    Assertions.assertEquals(data.dbName, details.dbName)
                }
        )
    }

    @Test
    fun `add new oracle db connection`() {
        val data = DbConnectionsDataSet.Oracle.ORACLE_1
        addDbConnection(data,
                {
                    val dto = it as OracleDbConnectionDTO
                    Assertions.assertEquals(data.label, dto.name)
                    Assertions.assertEquals(data.host, dto.host)
                    Assertions.assertEquals(data.port, dto.port)
                    Assertions.assertEquals(data.user, dto.user)
                    Assertions.assertEquals(data.password, dto.password)
                    Assertions.assertEquals(data.sid, dto.sid)
                },
                {
                    val details = it as OracleDbConnectionDetails
                    Assertions.assertEquals(data.label, details.name)
                    Assertions.assertEquals(data.host, details.host)
                    Assertions.assertEquals(data.port, details.port)
                    Assertions.assertEquals(data.user, details.user)
                    Assertions.assertEquals(data.password, details.password)
                    Assertions.assertEquals(data.sid, details.sid)
                }
        )
    }

    @Test
    fun `add new mysql db connection`() {
        val data = DbConnectionsDataSet.MySql.MY_SQL_1
        addDbConnection(data,
                {
                    val dto = it as MySqlDbConnectionDTO
                    Assertions.assertEquals(data.label, dto.name)
                    Assertions.assertEquals(data.host, dto.host)
                    Assertions.assertEquals(data.port, dto.port)
                    Assertions.assertEquals(data.user, dto.user)
                    Assertions.assertEquals(data.password, dto.password)
                    Assertions.assertEquals(data.dbName, dto.dbName)
                },
                {
                    val details = it as MySqlDbConnectionDetails
                    Assertions.assertEquals(data.label, details.name)
                    Assertions.assertEquals(data.host, details.host)
                    Assertions.assertEquals(data.port, details.port)
                    Assertions.assertEquals(data.user, details.user)
                    Assertions.assertEquals(data.password, details.password)
                    Assertions.assertEquals(data.dbName, details.dbName)
                }
        )
    }

    private fun addDbConnection(data: DbConnectionTestData,
                                compareDto: (DbConnectionDTO) -> Unit,
                                compareDetails: (DbConnectionDetails) -> Unit) {
        whenever(factory.createNew(any()))
                .thenReturn(data.dbConnection())

        val dto = restService.add(data.request())
        compareDto(dto)

        verify(factory, times(1)).createNew(capture(detailsCaptor))
        compareDetails(detailsCaptor.value)
    }


    @Test
    fun `edit postgres db connection`() {
        editDbConnection(DbConnectionsDataSet.Postgres.POSTGRES_1,
                DbConnectionsDataSet.Postgres.POSTGRES_1_UPDATED,
                {
                    val dto = it as PostgresDbConnectionDTO
                    val update = DbConnectionsDataSet.Postgres.POSTGRES_1_UPDATED
                    Assertions.assertEquals(update.label, dto.name)
                    Assertions.assertEquals(update.host, dto.host)
                    Assertions.assertEquals(update.port, dto.port)
                    Assertions.assertEquals(update.user, dto.user)
                    Assertions.assertEquals(update.password, dto.password)
                    Assertions.assertEquals(update.dbName, dto.dbName)
                },
                {
                    val details = it as PostgresDbConnectionDetails
                    val updateDetails = DbConnectionsDataSet.Postgres.POSTGRES_1_UPDATED.details()
                    Assertions.assertEquals(updateDetails.name, details.name)
                    Assertions.assertEquals(updateDetails.host, details.host)
                    Assertions.assertEquals(updateDetails.port, details.port)
                    Assertions.assertEquals(updateDetails.user, details.user)
                    Assertions.assertEquals(updateDetails.password, details.password)
                    Assertions.assertEquals(updateDetails.dbName, details.dbName)
                }
        )
    }

    @Test
    fun `edit mysql db connection`() {
        editDbConnection(DbConnectionsDataSet.MySql.MY_SQL_1,
                DbConnectionsDataSet.MySql.MY_SQL_1_UPDATED,
                {
                    val dto = it as MySqlDbConnectionDTO
                    val update = DbConnectionsDataSet.MySql.MY_SQL_1_UPDATED
                    Assertions.assertEquals(update.label, dto.name)
                    Assertions.assertEquals(update.host, dto.host)
                    Assertions.assertEquals(update.port, dto.port)
                    Assertions.assertEquals(update.user, dto.user)
                    Assertions.assertEquals(update.password, dto.password)
                    Assertions.assertEquals(update.dbName, dto.dbName)
                },
                {
                    val details = it as MySqlDbConnectionDetails
                    val updateDetails = DbConnectionsDataSet.MySql.MY_SQL_1_UPDATED.details()
                    Assertions.assertEquals(updateDetails.name, details.name)
                    Assertions.assertEquals(updateDetails.host, details.host)
                    Assertions.assertEquals(updateDetails.port, details.port)
                    Assertions.assertEquals(updateDetails.user, details.user)
                    Assertions.assertEquals(updateDetails.password, details.password)
                    Assertions.assertEquals(updateDetails.dbName, details.dbName)
                }
        )
    }

    @Test
    fun `edit oracle db connection`() {
        editDbConnection(DbConnectionsDataSet.Oracle.ORACLE_1,
                DbConnectionsDataSet.Oracle.ORACLE_1_UPDATED,
                {
                    val dto = it as OracleDbConnectionDTO
                    val update = DbConnectionsDataSet.Oracle.ORACLE_1_UPDATED
                    Assertions.assertEquals(update.label, dto.name)
                    Assertions.assertEquals(update.host, dto.host)
                    Assertions.assertEquals(update.port, dto.port)
                    Assertions.assertEquals(update.user, dto.user)
                    Assertions.assertEquals(update.password, dto.password)
                    Assertions.assertEquals(update.sid, dto.sid)
                },
                {
                    val details = it as OracleDbConnectionDetails
                    val updateDetails = DbConnectionsDataSet.Oracle.ORACLE_1_UPDATED.details()
                    Assertions.assertEquals(updateDetails.name, details.name)
                    Assertions.assertEquals(updateDetails.host, details.host)
                    Assertions.assertEquals(updateDetails.port, details.port)
                    Assertions.assertEquals(updateDetails.user, details.user)
                    Assertions.assertEquals(updateDetails.password, details.password)
                    Assertions.assertEquals(updateDetails.sid, details.sid)
                }
        )
    }

    private fun editDbConnection(data: DbConnectionTestData, update: DbConnectionTestData,
                                    compareDto: (DbConnectionDTO) -> Unit,
                                    compareDetails: (DbConnectionDetails) -> Unit) {
        whenever(factory.update(any(), any()))
                .thenReturn(update.dbConnection())
        val dto = restService.edit(data.id(), update.request())
        compareDto(dto)
        verify(factory, times(1)).update(eq(data.id()), capture(detailsCaptor))
        compareDetails(detailsCaptor.value)
    }

    @Test
    fun `get db connection types`() {
        val types = restService.types()
        Assertions.assertEquals(3, types.size)
        Assertions.assertEquals(DbConnectionType.POSTGRES.name, types[0].type)
        Assertions.assertEquals(DbConnectionType.POSTGRES.label, types[0].label)
        Assertions.assertEquals(DbConnectionType.ORACLE.name, types[1].type)
        Assertions.assertEquals(DbConnectionType.ORACLE.label, types[1].label)
        Assertions.assertEquals(DbConnectionType.MYSQL.name, types[2].type)
        Assertions.assertEquals(DbConnectionType.MYSQL.label, types[2].label)
    }

    @Test
    fun `delete notificationApi`() {
        val someId = UUID.randomUUID().toString()
        restService.delete(someId)
        verify(factory, Mockito.timeout(1)).delete(eq(someId))
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

    fun getDbConnection(data: DbConnectionTestData) {
        whenever(factory.byId(eq(data.id()))).thenReturn(data.dbConnection())
        val result = restService.get(data.id())
        Assertions.assertEquals(data.dto(), result)
    }

    @Test
    fun `get all dbConnections`() {
        val connectionsList = listOf(
                DbConnectionsDataSet.Postgres.POSTGRES_1.dbConnection(),
                DbConnectionsDataSet.Oracle.ORACLE_1.dbConnection(),
                DbConnectionsDataSet.MySql.MY_SQL_1.dbConnection()
        )
        whenever(factory.all()).thenReturn(connectionsList)

        val dtoList = listOf(
                DbConnectionsDataSet.Postgres.POSTGRES_1.dto(),
                DbConnectionsDataSet.Oracle.ORACLE_1.dto(),
                DbConnectionsDataSet.MySql.MY_SQL_1.dto()
        )
        val resultList = restService.list()
        Assertions.assertEquals(dtoList, resultList)
    }

}