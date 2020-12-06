package io.github.support.terminal.application.domains.db_connection.factory

import com.nhaarman.mockitokotlin2.*
import io.github.support.terminal.application.domains.db_connection.DbConnectionTestData
import io.github.support.terminal.application.domains.db_connection.DbConnectionsDataSet
import io.github.support.terminal.application.domains.db_connection.entity.DbConnection
import io.github.support.terminal.application.domains.db_connection.repository.DbConnectionDetails
import io.github.support.terminal.application.domains.db_connection.entity.DbConnectionsFactory
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.ArgumentCaptor
import org.mockito.Captor
import org.mockito.junit.jupiter.MockitoExtension

@ExtendWith(MockitoExtension::class)
class DbConnectionsFactoryTest {

    private lateinit var factory: DbConnectionsFactory

    @Captor
    private lateinit var detailsCaptor: ArgumentCaptor<DbConnectionDetails>

    @BeforeEach
    fun init() {
        reset(DbConnectionsDataSet.repository)
        factory = DbConnectionsFactory(DbConnectionsDataSet.repository)
    }

    @Test
    fun `create new postgres`() {
        createDbConnection(DbConnectionsDataSet.Postgres.POSTGRES_1)
    }

    @Test
    fun `create new mysql`() {
        createDbConnection(DbConnectionsDataSet.MySql.MY_SQL_1)
    }

    @Test
    fun `create new oracle`() {
        createDbConnection(DbConnectionsDataSet.Oracle.ORACLE_1)
    }

    private fun createDbConnection(data: DbConnectionTestData) {
        val api = factory.createNew(data.details())
        Assertions.assertEquals(api, data.dbConnection())
        verify(DbConnectionsDataSet.repository, times(1)).add(capture(detailsCaptor))
        Assertions.assertEquals(data.details(), detailsCaptor.value)
    }

    @Test
    fun `update postgres`() {
        updateDbConnection(details = DbConnectionsDataSet.Postgres.POSTGRES_1.details(),
                update = DbConnectionsDataSet.Postgres.POSTGRES_2.details(),
                newVersion = DbConnectionsDataSet.Postgres.POSTGRES_1_UPDATED.details(),
                updateApi = DbConnectionsDataSet.Postgres.POSTGRES_1_UPDATED.dbConnection()
        );
    }

    @Test
    fun `update mysql`() {
        updateDbConnection(details = DbConnectionsDataSet.MySql.MY_SQL_1.details(),
                update = DbConnectionsDataSet.MySql.MY_SQL_2.details(),
                newVersion = DbConnectionsDataSet.MySql.MY_SQL_1_UPDATED.details(),
                updateApi = DbConnectionsDataSet.MySql.MY_SQL_1_UPDATED.dbConnection()
        );
    }

    @Test
    fun `update oracle`() {
        updateDbConnection(details = DbConnectionsDataSet.Oracle.ORACLE_1.details(),
                update = DbConnectionsDataSet.Oracle.ORACLE_2.details(),
                newVersion = DbConnectionsDataSet.Oracle.ORACLE_1_UPDATED.details(),
                updateApi = DbConnectionsDataSet.Oracle.ORACLE_1_UPDATED.dbConnection()
        );
    }

    private fun updateDbConnection(details: DbConnectionDetails,
                                   update: DbConnectionDetails,
                                   newVersion: DbConnectionDetails,
                                   updateApi: DbConnection<*>) {
        whenever(DbConnectionsDataSet.repository.findById(eq(details.id)))
                .thenReturn(details)

        val updated = factory.update(details.id, update)
        Assertions.assertEquals(updateApi, updated)

        verify(DbConnectionsDataSet.repository, times(1))
                .update(capture(detailsCaptor))
        Assertions.assertEquals(newVersion, detailsCaptor.value)
    }

    @Test
    fun `get postgres by id`() {
        getById(DbConnectionsDataSet.Oracle.ORACLE_1)
    }

    @Test
    fun `get mysql by id`() {
        getById(DbConnectionsDataSet.MySql.MY_SQL_1)
    }

    @Test
    fun `get oracle by id`() {
        getById(DbConnectionsDataSet.Oracle.ORACLE_1)
    }

    private fun getById(data: DbConnectionTestData) {
        whenever(DbConnectionsDataSet.repository.findById(eq(data.id()))).thenReturn(data.details())
        Assertions.assertEquals(data.dbConnection(), factory.byId(data.id()))
    }

    @Test
    fun byIdNotFound() {
        whenever(DbConnectionsDataSet.repository.findById(any())).thenReturn(null)
        Assertions.assertThrows(IllegalArgumentException::class.java) { factory.byId("some-id") }
    }


    @Test
    fun `get all`() {
        val list = listOf(
                DbConnectionsDataSet.Postgres.POSTGRES_1.details(),
                DbConnectionsDataSet.MySql.MY_SQL_1.details(),
                DbConnectionsDataSet.Oracle.ORACLE_1.details()
        )
        whenever(DbConnectionsDataSet.repository.findAll()).thenReturn(list)

        val expectedApisList = listOf(
                DbConnectionsDataSet.Postgres.POSTGRES_1.dbConnection(),
                DbConnectionsDataSet.MySql.MY_SQL_1.dbConnection(),
                DbConnectionsDataSet.Oracle.ORACLE_1.dbConnection()
        )
        Assertions.assertEquals(expectedApisList, factory.all())
    }

}