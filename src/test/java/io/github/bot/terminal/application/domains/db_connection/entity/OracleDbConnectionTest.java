package io.github.bot.terminal.application.domains.db_connection.entity;

import io.github.bot.terminal.application.domains.db_connection.repository.DbConnectionRepository;
import io.github.bot.terminal.application.domains.db_connection.rest.values.DbConnectionType;
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
class OracleDbConnectionTest {


    @Mock
    private DbConnectionRepository repository;


    public String dbConnectionid = UUID.randomUUID().toString();
    public String name = UUID.randomUUID().toString();
    public String host = UUID.randomUUID().toString();
    public int port = 1233;
    public String user = UUID.randomUUID().toString();
    public String password = UUID.randomUUID().toString();
    public String sid = UUID.randomUUID().toString();

    @Test
    public void delete() {

        OracleDbConnectionDetails details = new OracleDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.ORACLE);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setSid(sid);

        DbConnection connection = new OracleDbConnection(details, repository);

        connection.delete();
        verify(repository, times(1)).deleteById(eq(dbConnectionid));

    }

    @Test
    public void getUrl() {

        OracleDbConnectionDetails details = new OracleDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.ORACLE);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setSid(sid);

        OracleDbConnection connection = new OracleDbConnection(details, repository);
        assertEquals("jdbc:oracle:thin:@" + host + ":" + port + "/" + sid, connection.getUrl());

    }

    @Test
    public void getClassName() {

        OracleDbConnectionDetails details = new OracleDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.ORACLE);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setSid(sid);

        OracleDbConnection connection = new OracleDbConnection(details, repository);
        assertEquals("oracle.jdbc.driver.OracleDriver", connection.getClassName());

    }

    @Test
    public void getCheckSelect() {

        OracleDbConnectionDetails details = new OracleDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.ORACLE);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setSid(sid);

        OracleDbConnection connection = new OracleDbConnection(details, repository);
        assertEquals("SELECT 1 FROM DUAL", connection.getCheckSelect());
    }

}