package io.github.support.terminal.application.domains.db_connection.repository

import io.github.support.terminal.application.domains.db_connection.DbConnectionsDataSet
import io.github.support.terminal.application.domains.db_connection.DbConnectionsRepositoryTestConfig
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Import
import org.springframework.test.context.junit.jupiter.SpringExtension
import java.lang.IllegalArgumentException

@ExtendWith(SpringExtension::class)
@Import(DbConnectionsRepositoryTestConfig::class)
class DbConnectionRepositoryTest {

    @Autowired
    private lateinit var repository: DbConnectionRepository

    @BeforeEach
    fun inti() {
        repository.findAll().forEach { d -> repository.deleteById(d.id) }
    }

    @Test
    fun `add postgres details`() {
        addDetails(DbConnectionsDataSet.Postgres.POSTGRES_1.details());
    }

    @Test
    fun `add mysql details`() {
        addDetails(DbConnectionsDataSet.MySql.MY_SQL_1.details());
    }

    @Test
    fun `add oracle details`() {
        addDetails(DbConnectionsDataSet.Oracle.ORACLE_1.details());
    }

    private fun addDetails(details: DbConnectionDetails) {
        repository.add(details)
        val byId = repository.findById(details.id)
        Assertions.assertEquals(details, byId)
    }

    @Test
    fun `update oracle details`() {
        editDetails(
                details = DbConnectionsDataSet.Oracle.ORACLE_1.details(),
                update = DbConnectionsDataSet.Oracle.ORACLE_2.details(),
                newVersion = DbConnectionsDataSet.Oracle.ORACLE_1_UPDATED.details()
        );
    }

    @Test
    fun `update mysql details`() {
        editDetails(
                details = DbConnectionsDataSet.MySql.MY_SQL_1.details(),
                update = DbConnectionsDataSet.MySql.MY_SQL_2.details(),
                newVersion = DbConnectionsDataSet.MySql.MY_SQL_1_UPDATED.details()
        );
    }

    @Test
    fun `update postgres details`() {
        editDetails(
                details = DbConnectionsDataSet.Postgres.POSTGRES_1.details(),
                update = DbConnectionsDataSet.Postgres.POSTGRES_2.details(),
                newVersion = DbConnectionsDataSet.Postgres.POSTGRES_1_UPDATED.details()
        );
    }

    fun editDetails(details: DbConnectionDetails,
                    update: DbConnectionDetails,
                    newVersion: DbConnectionDetails) {
        repository.add(details)
        repository.findById(details.id)
                ?.let {
                   val updated = it.merge(update)
                    repository.update(updated)
                    Assertions.assertEquals(newVersion, updated)
                } ?: throw IllegalArgumentException("Not found details")
    }

    @Test
    fun `find all details`() {
        repository.add(DbConnectionsDataSet.Postgres.POSTGRES_1.details())
        repository.add(DbConnectionsDataSet.MySql.MY_SQL_1.details())
        repository.add(DbConnectionsDataSet.Oracle.ORACLE_1.details())

        val expectedResult = listOf(
                DbConnectionsDataSet.Postgres.POSTGRES_1.details(),
                DbConnectionsDataSet.MySql.MY_SQL_1.details(),
                DbConnectionsDataSet.Oracle.ORACLE_1.details()
        )

        Assertions.assertEquals(expectedResult, repository.findAll())
    }

    @Test
    fun deleteById() {
        addDetails(DbConnectionsDataSet.Postgres.POSTGRES_1.details())
        repository.deleteById(DbConnectionsDataSet.Postgres.POSTGRES_1.id())
        Assertions.assertNull(repository.findById(DbConnectionsDataSet.Postgres.POSTGRES_1.id()))
    }
}
