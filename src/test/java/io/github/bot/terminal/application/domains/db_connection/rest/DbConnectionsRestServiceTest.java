package io.github.bot.terminal.application.domains.db_connection.rest;

import io.github.bot.terminal.application.domains.db_connection.entity.*;
import io.github.bot.terminal.application.domains.db_connection.factory.DbConnectionsFactory;
import io.github.bot.terminal.application.domains.db_connection.repository.DbConnectionRepository;
import io.github.bot.terminal.application.domains.db_connection.rest.dto.*;
import io.github.bot.terminal.application.domains.db_connection.rest.requests.MySqlDbConnectionRequest;
import io.github.bot.terminal.application.domains.db_connection.rest.requests.OracleDbConnectionRequest;
import io.github.bot.terminal.application.domains.db_connection.rest.requests.PostgresDbConnectionRequest;
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;


@ExtendWith(MockitoExtension.class)
class DbConnectionsRestServiceTest {

    @Mock
    private DbConnectionsFactory factory;

    @Mock
    private DbConnectionRepository repository;

    private DbConnectionsRestConverter converter = spy(new DbConnectionsRestConverter());
    private DbConnectionsRestService service;

    @Captor
    ArgumentCaptor<PostgresDbConnectionDetails> postgresDetailsCaptor;
    @Captor
    ArgumentCaptor<MySqlDbConnectionDetails> mysqlDetailsCaptor;
    @Captor
    ArgumentCaptor<OracleDbConnectionDetails> oracleDetailsCaptor;

    public String dbConnectionid = UUID.randomUUID().toString();
    public String name = UUID.randomUUID().toString();
    public String host = UUID.randomUUID().toString();
    public int port = 1233;
    public String user = UUID.randomUUID().toString();
    public String password = UUID.randomUUID().toString();
    public String dbName = UUID.randomUUID().toString();
    public String sid = UUID.randomUUID().toString();

    public String dbConnectionid2 = UUID.randomUUID().toString();
    public String name2 = UUID.randomUUID().toString();
    public String host2 = UUID.randomUUID().toString();
    public int port2 = 1234;
    public String user2 = UUID.randomUUID().toString();
    public String password2 = UUID.randomUUID().toString();
    public String dbName2 = UUID.randomUUID().toString();
    public String sid2 = UUID.randomUUID().toString();


    @BeforeEach
    public void inti() {
        service = new DbConnectionsRestService(factory, converter);
    }


    @Test
    public void addUnknownDbConnection() {
        PostgresDbConnectionRequest request = new PostgresDbConnectionRequest();
        request.setName(name);
        request.setType("Some type");
        request.setHost(host);
        request.setPort(port);
        request.setUser(user);
        request.setPassword(password);
        request.setDbName(dbName);

        assertThrows(IllegalArgumentException.class, () ->
                service.add(request)
        );

    }

    @Test
    public void mapFromUnknownDbConnectionType() {

        PostgresDbConnectionDetails details = new PostgresDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(null);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setDbName(dbName);

        DbConnection connection = new PostgresDbConnection(details, repository);

        when(factory.createNew(any()))
                .thenReturn(connection);

        PostgresDbConnectionRequest request = new PostgresDbConnectionRequest();
        request.setName(name);
        request.setHost(host);
        request.setPort(port);
        request.setUser(user);
        request.setPassword(password);
        request.setDbName(dbName);

        assertThrows(IllegalArgumentException.class, () ->
                service.add(request)
        );

    }

    @Test
    public void addNewPostgresDbConnection() {

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

        when(factory.createNew(any()))
                .thenReturn(connection);

        PostgresDbConnectionRequest request = new PostgresDbConnectionRequest();
        request.setName(name);
        request.setHost(host);
        request.setPort(port);
        request.setUser(user);
        request.setPassword(password);
        request.setDbName(dbName);

        PostgresDbConnectionDTO apiDTO = (PostgresDbConnectionDTO) service.add(request);
        assertEquals(dbConnectionid, apiDTO.getId());
        assertEquals(name, apiDTO.getName());
        assertEquals(host, apiDTO.getHost());
        assertEquals(port, apiDTO.getPort());
        assertEquals(user, apiDTO.getUser());
        assertEquals(password, apiDTO.getPassword());
        assertEquals(dbName, apiDTO.getDbName());
        assertEquals(DbConnectionType.POSTGRES.name(), apiDTO.getType());

        verify(factory, times(1)).createNew(postgresDetailsCaptor.capture());
        PostgresDbConnectionDetails convertedDetails = postgresDetailsCaptor.getValue();
        assertEquals(name, convertedDetails.getName());
        assertEquals(host, convertedDetails.getHost());
        assertEquals(port, convertedDetails.getPort());
        assertEquals(user, convertedDetails.getUser());
        assertEquals(password, convertedDetails.getPassword());
        assertEquals(dbName, convertedDetails.getDbName());
        assertEquals(DbConnectionType.POSTGRES, convertedDetails.getType());

    }

    @Test
    public void addNewMySqlDbConnection() {

        MySqlDbConnectionDetails details = new MySqlDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.MYSQL);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setDbName(dbName);

        DbConnection connection = new MySqlDbConnection(details, repository);

        when(factory.createNew(any()))
                .thenReturn(connection);

        MySqlDbConnectionRequest request = new MySqlDbConnectionRequest();
        request.setName(name);
        request.setHost(host);
        request.setPort(port);
        request.setUser(user);
        request.setPassword(password);
        request.setDbName(dbName);

        MySqlDbConnectionDTO apiDTO = (MySqlDbConnectionDTO) service.add(request);
        assertEquals(dbConnectionid, apiDTO.getId());
        assertEquals(name, apiDTO.getName());
        assertEquals(host, apiDTO.getHost());
        assertEquals(port, apiDTO.getPort());
        assertEquals(user, apiDTO.getUser());
        assertEquals(password, apiDTO.getPassword());
        assertEquals(dbName, apiDTO.getDbName());
        assertEquals(DbConnectionType.MYSQL.name(), apiDTO.getType());

        verify(factory, times(1)).createNew(mysqlDetailsCaptor.capture());
        MySqlDbConnectionDetails convertedDetails = mysqlDetailsCaptor.getValue();
        assertEquals(name, convertedDetails.getName());
        assertEquals(host, convertedDetails.getHost());
        assertEquals(port, convertedDetails.getPort());
        assertEquals(user, convertedDetails.getUser());
        assertEquals(password, convertedDetails.getPassword());
        assertEquals(dbName, convertedDetails.getDbName());
        assertEquals(DbConnectionType.MYSQL, convertedDetails.getType());

    }

    @Test
    public void addNewOracleDbConnection() {

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

        when(factory.createNew(any()))
                .thenReturn(connection);

        OracleDbConnectionRequest request = new OracleDbConnectionRequest();
        request.setName(name);
        request.setHost(host);
        request.setPort(port);
        request.setUser(user);
        request.setPassword(password);
        request.setSid(sid);

        OracleDbConnectionDTO apiDTO = (OracleDbConnectionDTO) service.add(request);
        assertEquals(dbConnectionid, apiDTO.getId());
        assertEquals(name, apiDTO.getName());
        assertEquals(host, apiDTO.getHost());
        assertEquals(port, apiDTO.getPort());
        assertEquals(user, apiDTO.getUser());
        assertEquals(password, apiDTO.getPassword());
        assertEquals(sid, apiDTO.getSid());
        assertEquals(DbConnectionType.ORACLE.name(), apiDTO.getType());

        verify(factory, times(1)).createNew(oracleDetailsCaptor.capture());
        OracleDbConnectionDetails convertedDetails = oracleDetailsCaptor.getValue();
        assertEquals(name, convertedDetails.getName());
        assertEquals(host, convertedDetails.getHost());
        assertEquals(port, convertedDetails.getPort());
        assertEquals(user, convertedDetails.getUser());
        assertEquals(password, convertedDetails.getPassword());
        assertEquals(sid, convertedDetails.getSid());
        assertEquals(DbConnectionType.ORACLE, convertedDetails.getType());

    }

    @Test
    public void editOracleDbConnection() {

        OracleDbConnectionDetails details = new OracleDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.ORACLE);
        details.setName(name2);
        details.setHost(host2);
        details.setPort(port2);
        details.setUser(user2);
        details.setPassword(password2);
        details.setSid(sid2);

        DbConnection connection = new OracleDbConnection(details, repository);

        when(factory.merge(eq(dbConnectionid), any()))
                .thenReturn(connection);

        OracleDbConnectionRequest request = new OracleDbConnectionRequest();
        request.setName(name2);
        request.setHost(host2);
        request.setPort(port2);
        request.setUser(user2);
        request.setPassword(password2);
        request.setSid(sid2);


        OracleDbConnectionDTO apiDTO = (OracleDbConnectionDTO) service.edit(dbConnectionid, request);
        assertEquals(dbConnectionid, apiDTO.getId());
        assertEquals(name2, apiDTO.getName());
        assertEquals(host2, apiDTO.getHost());
        assertEquals(port2, apiDTO.getPort());
        assertEquals(user2, apiDTO.getUser());
        assertEquals(password2, apiDTO.getPassword());
        assertEquals(sid2, apiDTO.getSid());
        assertEquals(DbConnectionType.ORACLE.name(), apiDTO.getType());

        verify(factory, times(1)).merge(eq(dbConnectionid), oracleDetailsCaptor.capture());
        OracleDbConnectionDetails convertedDetails = oracleDetailsCaptor.getValue();
        assertEquals(name2, convertedDetails.getName());
        assertEquals(host2, convertedDetails.getHost());
        assertEquals(port2, convertedDetails.getPort());
        assertEquals(user2, convertedDetails.getUser());
        assertEquals(password2, convertedDetails.getPassword());
        assertEquals(sid2, convertedDetails.getSid());
        assertEquals(DbConnectionType.ORACLE, convertedDetails.getType());

    }

    @Test
    public void editPostgresDbConnection() {

        PostgresDbConnectionDetails details = new PostgresDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.POSTGRES);
        details.setName(name2);
        details.setHost(host2);
        details.setPort(port2);
        details.setUser(user2);
        details.setPassword(password2);
        details.setDbName(dbName2);

        DbConnection connection = new PostgresDbConnection(details, repository);

        when(factory.merge(eq(dbConnectionid), any()))
                .thenReturn(connection);

        PostgresDbConnectionRequest request = new PostgresDbConnectionRequest();
        request.setName(name2);
        request.setHost(host2);
        request.setPort(port2);
        request.setUser(user2);
        request.setPassword(password2);
        request.setDbName(dbName2);


        PostgresDbConnectionDTO apiDTO = (PostgresDbConnectionDTO) service.edit(dbConnectionid, request);
        assertEquals(dbConnectionid, apiDTO.getId());
        assertEquals(name2, apiDTO.getName());
        assertEquals(host2, apiDTO.getHost());
        assertEquals(port2, apiDTO.getPort());
        assertEquals(user2, apiDTO.getUser());
        assertEquals(password2, apiDTO.getPassword());
        assertEquals(dbName2, apiDTO.getDbName());
        assertEquals(DbConnectionType.POSTGRES.name(), apiDTO.getType());

        verify(factory, times(1)).merge(eq(dbConnectionid), postgresDetailsCaptor.capture());
        PostgresDbConnectionDetails convertedDetails = postgresDetailsCaptor.getValue();
        assertEquals(name2, convertedDetails.getName());
        assertEquals(host2, convertedDetails.getHost());
        assertEquals(port2, convertedDetails.getPort());
        assertEquals(user2, convertedDetails.getUser());
        assertEquals(password2, convertedDetails.getPassword());
        assertEquals(dbName2, convertedDetails.getDbName());
        assertEquals(DbConnectionType.POSTGRES, convertedDetails.getType());

    }

    @Test
    public void editMySqlDbConnection() {

        MySqlDbConnectionDetails details = new MySqlDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.MYSQL);
        details.setName(name2);
        details.setHost(host2);
        details.setPort(port2);
        details.setUser(user2);
        details.setPassword(password2);
        details.setDbName(dbName2);

        DbConnection connection = new MySqlDbConnection(details, repository);

        when(factory.merge(eq(dbConnectionid), any()))
                .thenReturn(connection);

        MySqlDbConnectionRequest request = new MySqlDbConnectionRequest();
        request.setName(name2);
        request.setHost(host2);
        request.setPort(port2);
        request.setUser(user2);
        request.setPassword(password2);
        request.setDbName(dbName2);


        MySqlDbConnectionDTO apiDTO = (MySqlDbConnectionDTO) service.edit(dbConnectionid, request);
        assertEquals(dbConnectionid, apiDTO.getId());
        assertEquals(name2, apiDTO.getName());
        assertEquals(host2, apiDTO.getHost());
        assertEquals(port2, apiDTO.getPort());
        assertEquals(user2, apiDTO.getUser());
        assertEquals(password2, apiDTO.getPassword());
        assertEquals(dbName2, apiDTO.getDbName());
        assertEquals(DbConnectionType.MYSQL.name(), apiDTO.getType());

        verify(factory, times(1)).merge(eq(dbConnectionid), mysqlDetailsCaptor.capture());
        MySqlDbConnectionDetails convertedDetails = mysqlDetailsCaptor.getValue();
        assertEquals(name2, convertedDetails.getName());
        assertEquals(host2, convertedDetails.getHost());
        assertEquals(port2, convertedDetails.getPort());
        assertEquals(user2, convertedDetails.getUser());
        assertEquals(password2, convertedDetails.getPassword());
        assertEquals(dbName2, convertedDetails.getDbName());
        assertEquals(DbConnectionType.MYSQL, convertedDetails.getType());

    }

    @Test
    public void getMySqlDbConnection() {
        MySqlDbConnectionDetails details = new MySqlDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.MYSQL);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setDbName(dbName);

        DbConnection connection = new MySqlDbConnection(details, repository);

        when(factory.byId(eq(dbConnectionid)))
                .thenReturn(connection);

        MySqlDbConnectionDTO apiDTO = (MySqlDbConnectionDTO) service.get(dbConnectionid);
        assertEquals(dbConnectionid, apiDTO.getId());
        assertEquals(name, apiDTO.getName());
        assertEquals(host, apiDTO.getHost());
        assertEquals(port, apiDTO.getPort());
        assertEquals(user, apiDTO.getUser());
        assertEquals(password, apiDTO.getPassword());
        assertEquals(dbName, apiDTO.getDbName());
        assertEquals(DbConnectionType.MYSQL.name(), apiDTO.getType());
    }

    @Test
    public void getPostgresDbConnection() {
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

        when(factory.byId(eq(dbConnectionid)))
                .thenReturn(connection);

        PostgresDbConnectionDTO apiDTO = (PostgresDbConnectionDTO) service.get(dbConnectionid);
        assertEquals(dbConnectionid, apiDTO.getId());
        assertEquals(name, apiDTO.getName());
        assertEquals(host, apiDTO.getHost());
        assertEquals(port, apiDTO.getPort());
        assertEquals(user, apiDTO.getUser());
        assertEquals(password, apiDTO.getPassword());
        assertEquals(dbName, apiDTO.getDbName());
        assertEquals(DbConnectionType.POSTGRES.name(), apiDTO.getType());
    }

    @Test
    public void getOracleDbConnection() {
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

        when(factory.byId(eq(dbConnectionid)))
                .thenReturn(connection);

        OracleDbConnectionDTO apiDTO = (OracleDbConnectionDTO) service.get(dbConnectionid);
        assertEquals(dbConnectionid, apiDTO.getId());
        assertEquals(name, apiDTO.getName());
        assertEquals(host, apiDTO.getHost());
        assertEquals(port, apiDTO.getPort());
        assertEquals(user, apiDTO.getUser());
        assertEquals(password, apiDTO.getPassword());
        assertEquals(sid, apiDTO.getSid());
        assertEquals(DbConnectionType.ORACLE.name(), apiDTO.getType());
    }


    @Test
    public void deleteDbConnection() {
        DbConnection dbConnection = Mockito.mock(DbConnection.class);
        when(factory.byId(eq(dbConnectionid)))
                .thenReturn(dbConnection);

        service.delete(dbConnectionid);
        verify(dbConnection, timeout(1)).delete();
    }

    @Test
    public void getAllDbConnection() {

        OracleDbConnectionDetails details = new OracleDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.ORACLE);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setSid(sid);

        DbConnection connection1 = new OracleDbConnection(details, repository);

        PostgresDbConnectionDetails details2 = new PostgresDbConnectionDetails();
        details2.setId(dbConnectionid);
        details2.setType(DbConnectionType.POSTGRES);
        details2.setName(name);
        details2.setHost(host);
        details2.setPort(port);
        details2.setUser(user);
        details2.setPassword(password);
        details2.setDbName(dbName);

        DbConnection connection2 = new PostgresDbConnection(details2, repository);


        List<DbConnection<?>> c = new ArrayList();
        c.add(connection1);
        c.add(connection2);

        when(factory.getAll())
                .thenReturn(c);

        List<DbConnectionDTO> list = service.list();

        OracleDbConnectionDTO apiDTO1 = (OracleDbConnectionDTO) list.get(0);
        assertEquals(dbConnectionid, apiDTO1.getId());
        assertEquals(name, apiDTO1.getName());
        assertEquals(host, apiDTO1.getHost());
        assertEquals(port, apiDTO1.getPort());
        assertEquals(user, apiDTO1.getUser());
        assertEquals(password, apiDTO1.getPassword());
        assertEquals(sid, apiDTO1.getSid());
        assertEquals(DbConnectionType.ORACLE.name(), apiDTO1.getType());

        PostgresDbConnectionDTO apiDTO2 = (PostgresDbConnectionDTO) list.get(1);
        assertEquals(dbConnectionid, apiDTO2.getId());
        assertEquals(name, apiDTO2.getName());
        assertEquals(host, apiDTO2.getHost());
        assertEquals(port, apiDTO2.getPort());
        assertEquals(user, apiDTO2.getUser());
        assertEquals(password, apiDTO2.getPassword());
        assertEquals(dbName, apiDTO2.getDbName());
        assertEquals(DbConnectionType.POSTGRES.name(), apiDTO2.getType());

    }

    @Test
    public void getTypes() {
        List<DbConnectionTypeDTO> types = service.types();
        assertEquals(3, types.size());
        assertEquals(DbConnectionType.POSTGRES.name(), types.get(0).getType());
        assertEquals(DbConnectionType.POSTGRES.getLabel(), types.get(0).getLabel());
        assertEquals(DbConnectionType.ORACLE.name(), types.get(1).getType());
        assertEquals(DbConnectionType.ORACLE.getLabel(), types.get(1).getLabel());
        assertEquals(DbConnectionType.MYSQL.name(), types.get(2).getType());
        assertEquals(DbConnectionType.MYSQL.getLabel(), types.get(2).getLabel());
    }
}