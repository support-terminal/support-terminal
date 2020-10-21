package io.github.bot.terminal.application.domains.db_connection

import com.nhaarman.mockitokotlin2.mock
import io.github.bot.terminal.application.domains.db_connection.entity.*
import io.github.bot.terminal.application.domains.db_connection.repository.DbConnectionRepository
import io.github.bot.terminal.application.domains.db_connection.rest.dto.*
import io.github.bot.terminal.application.domains.db_connection.rest.requests.DbConnectionRequest
import io.github.bot.terminal.application.domains.db_connection.rest.requests.MySqlDbConnectionRequest
import io.github.bot.terminal.application.domains.db_connection.rest.requests.OracleDbConnectionRequest
import io.github.bot.terminal.application.domains.db_connection.rest.requests.PostgresDbConnectionRequest
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType
import java.util.*


val someDbConnectionTypes = listOf(
        DbConnectionTypeDTO(DbConnectionType.ORACLE.label, DbConnectionType.ORACLE.name),
        DbConnectionTypeDTO(DbConnectionType.POSTGRES.label, DbConnectionType.POSTGRES.name)
)


interface DbConnectionTestData {
    fun dto(): DbConnectionDTO
    fun request(): DbConnectionRequest
    fun details(): DbConnectionDetails
    fun dbConnection(): DbConnection<*>
    fun id(): String
}

object DbConnectionsDataSet {

    val repository: DbConnectionRepository = mock()

    enum class Postgres(val id: String, val label: String, val host: String, val port: Int, val dbName: String, val user: String, val password: String) : DbConnectionTestData {
        POSTGRES_1("P01", "Постгрес 1", "localhost", 5432, "platform_db", "platform_user", "platform_password"),
        BAD_POSTGRES("P02", "Постгрес Bad", "localhost-bad", 35432, "db", "user", "password"),
        POSTGRES_2("P02","Постгрес 2", "localhost", 15432, "platform_db", "platform_user", "platform_password"),
        POSTGRES_1_UPDATED("P01","Постгрес 2", "localhost", 15432, "platform_db", "platform_user", "platform_password");

        override fun id() = id

        override fun dto() = PostgresDbConnectionDTO(
                 id = id,
                 name = label,
                 host = host,
                 port = port,
                 user = user,
                password = password,
                dbName = dbName
        )

        override fun details() = PostgresDbConnectionDetails(
                id = id,
                name = label,
                host = host,
                port = port,
                user = user,
                password = password,
                dbName = dbName
        )

        override fun dbConnection() = PostgresDbConnection(
                details(),
                repository
        )

        override fun request() = PostgresDbConnectionRequest(
                name = label,
                host = host,
                port = port,
                user = user,
                password = password,
                dbName = dbName
        )


    }

    enum class Oracle(val id: String, val label: String, val host: String, val port: Int, val sid: String, val user: String, val password: String) : DbConnectionTestData{
        ORACLE_1("OR_01", "Оракл 1", "localhost", 1521, "xe", "system", "oracle"),
        ORACLE_2("OR_01","Оракл 2", "localhost", 1521, "xe", "system", "oracle"),
        ORACLE_1_UPDATED("OR_01","Оракл 2", "localhost", 1521, "xe", "system", "oracle");

        override fun id() = id

        override fun dto() = OracleDbConnectionDTO(
                id = id,
                name = label,
                host = host,
                port = port,
                user = user,
                password = password,
                sid = sid
        )

        override fun details() = OracleDbConnectionDetails(
                id = id,
                name = label,
                host = host,
                port = port,
                user = user,
                password = password,
                sid = sid
        )

        override fun dbConnection() = OracleDbConnection(
                details(),
                repository
        )

        override fun request() = OracleDbConnectionRequest(
                name = label,
                host = host,
                port = port,
                user = user,
                password = password,
                sid = sid
        )

    }

    enum class MySql(val id: String, val label: String, val host: String, val port: Int, val dbName: String, val user: String, val password: String) : DbConnectionTestData {
        MY_SQL_1("M_01","MySQL 1", "localhost", 3306, "platform_db_mysql", "platform_user_mysql", "platform_password_mysql"),
        BAD_MY_SQL("M_03","MySQL_BAD", "localhost-bad", 3306, "mysql-database", "user_mysql", "password_mysql"),
        MY_SQL_2("M_02","Моя SQL2", "localhost", 33061, "platform_db_mysql", "platform_user_mysql", "platform_password_mysql"),
        MY_SQL_1_UPDATED("M_01","Моя SQL2", "localhost", 33061, "platform_db_mysql", "platform_user_mysql", "platform_password_mysql");


        override fun id() = id

        override fun dto() = MySqlDbConnectionDTO(
                id = id,
                name = label,
                host = host,
                port = port,
                user = user,
                password = password,
                dbName = dbName
        )

        override fun details() = MySqlDbConnectionDetails(
                id = id,
                name = label,
                host = host,
                port = port,
                user = user,
                password = password,
                dbName = dbName
        )

        override fun dbConnection() = MySqlDbConnection(
                details(),
                repository
        )

        override fun request() = MySqlDbConnectionRequest(
                name = label,
                host = host,
                port = port,
                user = user,
                password = password,
                dbName = dbName
        )



    }


    enum class Wrong(val id: String, val label: String, val host: String, val port: Int, val dbName: String, val user: String, val password: String) {
        WRONG_1("M_03","_BAD", "localhost-bad", 3306, "mysql-database", "user_mysql", "password_mysql");

         fun request() = MySqlDbConnectionRequest(
                name = label,
                host = host,
                port = port,
                type = UUID.randomUUID().toString(),
                user = user,
                password = password,
                dbName = dbName
        )

    }
}
