package io.github.bot.terminal.application.domains.db_connection.entity;

import io.github.bot.terminal.application.domains.db_connection.repository.DbConnectionRepository;
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class PostgresDbConnectionTest {


    @Mock
    private DbConnectionRepository repository;


    public String dbConnectionid = UUID.randomUUID().toString();
    public String name = UUID.randomUUID().toString();
    public String host = UUID.randomUUID().toString();
    public int port = 1233;
    public String user = UUID.randomUUID().toString();
    public String password = UUID.randomUUID().toString();
    public String dbName = UUID.randomUUID().toString();

    @Test
    public void delete() {

        PostgresDbConnectionDetails details = new PostgresDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.POSTGRES);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setDbName(dbName);

        DbConnection connection = new PostgresDbConnection(details, repository);

        connection.delete();
        verify(repository, times(1)).deleteById(eq(dbConnectionid));

    }

    @Test
    public void getUrl() {

        PostgresDbConnectionDetails details = new PostgresDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.POSTGRES);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setDbName(dbName);

        PostgresDbConnection connection = new PostgresDbConnection(details, repository);
        assertEquals("jdbc:postgresql://" + host + ":" + port + "/" + dbName, connection.getUrl());

    }

    @Test
    public void getClassName() {

        PostgresDbConnectionDetails details = new PostgresDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.POSTGRES);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setDbName(dbName);

        PostgresDbConnection connection = new PostgresDbConnection(details, repository);
        assertEquals("org.postgresql.Driver", connection.getClassName());

    }

    @Test
    public void getCheckSelect() {

        PostgresDbConnectionDetails details = new PostgresDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.POSTGRES);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setDbName(dbName);

        PostgresDbConnection connection = new PostgresDbConnection(details, repository);
        assertEquals("SELECT 1", connection.getCheckSelect());
    }

}