package io.github.bot.terminal.application.domains.db_connection.factory;

import io.github.bot.terminal.application.domains.db_connection.entity.*;
import io.github.bot.terminal.application.domains.db_connection.repository.DbConnectionRepository;
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class DbConnectionsFactoryTest {

    @Mock
    private DbConnectionRepository repository;

    private DbConnectionsFactory factory;

    @Captor
    ArgumentCaptor<PostgresDbConnectionDetails> postgresCaptor;

    @Captor
    ArgumentCaptor<MySqlDbConnectionDetails> mysqlCaptor;

    @Captor
    ArgumentCaptor<OracleDbConnectionDetails> oracleCaptor;


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
    void init() {
        factory = new DbConnectionsFactory(repository);
    }


    @Test
    void createPostgresDbConnection() {

        PostgresDbConnectionDetails details = new PostgresDbConnectionDetails();
        details.setType(DbConnectionType.POSTGRES);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setDbName(dbName);

        PostgresDbConnection connection = (PostgresDbConnection) factory.createNew(details);

        assertNotNull(connection.getDetails().getId());
        assertEquals(name, connection.getDetails().getName());
        assertEquals(host, connection.getDetails().getHost());
        assertEquals(port, connection.getDetails().getPort());
        assertEquals(user, connection.getDetails().getUser());
        assertEquals(password, connection.getDetails().getPassword());
        assertEquals(DbConnectionType.POSTGRES, connection.getDetails().getType());

        verify(repository, times(1)).add(postgresCaptor.capture());
        PostgresDbConnectionDetails passedDetails = postgresCaptor.getValue();
        assertEquals(name, passedDetails.getName());
        assertEquals(host, passedDetails.getHost());
        assertEquals(port, passedDetails.getPort());
        assertEquals(user, passedDetails.getUser());
        assertEquals(password, passedDetails.getPassword());
        assertEquals(DbConnectionType.POSTGRES, passedDetails.getType());
    }

    @Test
    void createMySqlDbConnection() {

        MySqlDbConnectionDetails details = new MySqlDbConnectionDetails();
        details.setType(DbConnectionType.MYSQL);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setDbName(dbName);

        MySqlDbConnection connection = (MySqlDbConnection) factory.createNew(details);

        assertNotNull(connection.getDetails().getId());
        assertEquals(name, connection.getDetails().getName());
        assertEquals(host, connection.getDetails().getHost());
        assertEquals(port, connection.getDetails().getPort());
        assertEquals(user, connection.getDetails().getUser());
        assertEquals(password, connection.getDetails().getPassword());
        assertEquals(DbConnectionType.MYSQL, connection.getDetails().getType());

        verify(repository, times(1)).add(mysqlCaptor.capture());
        MySqlDbConnectionDetails passedDetails = mysqlCaptor.getValue();
        assertEquals(name, passedDetails.getName());
        assertEquals(host, passedDetails.getHost());
        assertEquals(port, passedDetails.getPort());
        assertEquals(user, passedDetails.getUser());
        assertEquals(password, passedDetails.getPassword());
        assertEquals(DbConnectionType.MYSQL, passedDetails.getType());
    }

    @Test
    void createOracleDbConnection() {

        OracleDbConnectionDetails details = new OracleDbConnectionDetails();
        details.setType(DbConnectionType.ORACLE);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setSid(dbName);

        OracleDbConnection connection = (OracleDbConnection) factory.createNew(details);

        assertNotNull(connection.getDetails().getId());
        assertEquals(name, connection.getDetails().getName());
        assertEquals(host, connection.getDetails().getHost());
        assertEquals(port, connection.getDetails().getPort());
        assertEquals(user, connection.getDetails().getUser());
        assertEquals(password, connection.getDetails().getPassword());
        assertEquals(DbConnectionType.ORACLE, connection.getDetails().getType());

        verify(repository, times(1)).add(oracleCaptor.capture());
        OracleDbConnectionDetails passedDetails = oracleCaptor.getValue();
        assertEquals(name, passedDetails.getName());
        assertEquals(host, passedDetails.getHost());
        assertEquals(port, passedDetails.getPort());
        assertEquals(user, passedDetails.getUser());
        assertEquals(password, passedDetails.getPassword());
        assertEquals(DbConnectionType.ORACLE, passedDetails.getType());
    }

    @Test
    void mergeOracleDbConnection() {

        OracleDbConnectionDetails details = new OracleDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.ORACLE);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setSid(sid);

        when(repository.findById(eq(dbConnectionid))).thenReturn(Optional.of(details));

        OracleDbConnectionDetails detailsUpdate = new OracleDbConnectionDetails();
        detailsUpdate.setId(dbConnectionid);
        detailsUpdate.setType(DbConnectionType.ORACLE);
        detailsUpdate.setName(name2);
        detailsUpdate.setHost(host2);
        detailsUpdate.setPort(port2);
        detailsUpdate.setUser(user2);
        detailsUpdate.setPassword(password2);
        detailsUpdate.setSid(sid2);

        OracleDbConnection connection = (OracleDbConnection) factory.merge(dbConnectionid, detailsUpdate);
        assertEquals(dbConnectionid, connection.getDetails().getId());
        assertEquals(name2, connection.getDetails().getName());
        assertEquals(host2, connection.getDetails().getHost());
        assertEquals(port2, connection.getDetails().getPort());
        assertEquals(user2, connection.getDetails().getUser());
        assertEquals(password2, connection.getDetails().getPassword());
        assertEquals(sid2, connection.getDetails().getSid());
        assertEquals(DbConnectionType.ORACLE, connection.getDetails().getType());

        verify(repository, times(1)).update(oracleCaptor.capture());
        OracleDbConnectionDetails passedDetails = oracleCaptor.getValue();
        assertEquals(dbConnectionid, passedDetails.getId());
        assertEquals(name2, passedDetails.getName());
        assertEquals(host2, passedDetails.getHost());
        assertEquals(port2, passedDetails.getPort());
        assertEquals(user2, passedDetails.getUser());
        assertEquals(password2, passedDetails.getPassword());
        assertEquals(sid2, passedDetails.getSid());
        assertEquals(DbConnectionType.ORACLE, passedDetails.getType());

    }

    @Test
    void mergeMySqlDbConnection() {

        MySqlDbConnectionDetails details = new MySqlDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.MYSQL);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setDbName(dbName);

        when(repository.findById(eq(dbConnectionid))).thenReturn(Optional.of(details));

        MySqlDbConnectionDetails detailsUpdate = new MySqlDbConnectionDetails();
        detailsUpdate.setId(dbConnectionid);
        detailsUpdate.setType(DbConnectionType.MYSQL);
        detailsUpdate.setName(name2);
        detailsUpdate.setHost(host2);
        detailsUpdate.setPort(port2);
        detailsUpdate.setUser(user2);
        detailsUpdate.setPassword(password2);
        detailsUpdate.setDbName(dbName2);

        MySqlDbConnection connection = (MySqlDbConnection) factory.merge(dbConnectionid, detailsUpdate);
        assertEquals(dbConnectionid, connection.getDetails().getId());
        assertEquals(name2, connection.getDetails().getName());
        assertEquals(host2, connection.getDetails().getHost());
        assertEquals(port2, connection.getDetails().getPort());
        assertEquals(user2, connection.getDetails().getUser());
        assertEquals(password2, connection.getDetails().getPassword());
        assertEquals(dbName2, connection.getDetails().getDbName());
        assertEquals(DbConnectionType.MYSQL, connection.getDetails().getType());

        verify(repository, times(1)).update(mysqlCaptor.capture());
        MySqlDbConnectionDetails passedDetails = mysqlCaptor.getValue();
        assertEquals(dbConnectionid, passedDetails.getId());
        assertEquals(name2, passedDetails.getName());
        assertEquals(host2, passedDetails.getHost());
        assertEquals(port2, passedDetails.getPort());
        assertEquals(user2, passedDetails.getUser());
        assertEquals(password2, passedDetails.getPassword());
        assertEquals(dbName2, passedDetails.getDbName());
        assertEquals(DbConnectionType.MYSQL, passedDetails.getType());

    }

    @Test
    void mergePostgresDbConnection() {

        PostgresDbConnectionDetails details = new PostgresDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.POSTGRES);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setDbName(dbName);

        when(repository.findById(eq(dbConnectionid))).thenReturn(Optional.of(details));

        PostgresDbConnectionDetails detailsUpdate = new PostgresDbConnectionDetails();
        detailsUpdate.setId(dbConnectionid);
        detailsUpdate.setType(DbConnectionType.POSTGRES);
        detailsUpdate.setName(name2);
        detailsUpdate.setHost(host2);
        detailsUpdate.setPort(port2);
        detailsUpdate.setUser(user2);
        detailsUpdate.setPassword(password2);
        detailsUpdate.setDbName(dbName2);

        PostgresDbConnection connection = (PostgresDbConnection) factory.merge(dbConnectionid, detailsUpdate);
        assertEquals(dbConnectionid, connection.getDetails().getId());
        assertEquals(name2, connection.getDetails().getName());
        assertEquals(host2, connection.getDetails().getHost());
        assertEquals(port2, connection.getDetails().getPort());
        assertEquals(user2, connection.getDetails().getUser());
        assertEquals(password2, connection.getDetails().getPassword());
        assertEquals(dbName2, connection.getDetails().getDbName());
        assertEquals(DbConnectionType.POSTGRES, connection.getDetails().getType());

        verify(repository, times(1)).update(postgresCaptor.capture());
        PostgresDbConnectionDetails passedDetails = postgresCaptor.getValue();
        assertEquals(dbConnectionid, passedDetails.getId());
        assertEquals(name2, passedDetails.getName());
        assertEquals(host2, passedDetails.getHost());
        assertEquals(port2, passedDetails.getPort());
        assertEquals(user2, passedDetails.getUser());
        assertEquals(password2, passedDetails.getPassword());
        assertEquals(dbName2, passedDetails.getDbName());
        assertEquals(DbConnectionType.POSTGRES, passedDetails.getType());

    }



    @Test
    public void getAll() {
        PostgresDbConnectionDetails details = new PostgresDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.POSTGRES);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setDbName(dbName);


        OracleDbConnectionDetails details2 = new OracleDbConnectionDetails();
        details2.setId(dbConnectionid2);
        details2.setType(DbConnectionType.ORACLE);
        details2.setName(name2);
        details2.setHost(host2);
        details2.setPort(port2);
        details2.setUser(user2);
        details2.setPassword(password2);
        details2.setSid(sid2);


        List<DbConnectionDetails> c = new ArrayList();
        c.add(details);
        c.add(details2);

        when(repository.findAll())
                .thenReturn(c);

        List<DbConnection<?>> list = factory.getAll();

        PostgresDbConnectionDetails byId = (PostgresDbConnectionDetails) list.get(0).getDetails();
        assertEquals(dbConnectionid, byId.getId());
        assertEquals(name, byId.getName());
        assertEquals(host, byId.getHost());
        assertEquals(port, byId.getPort());
        assertEquals(user, byId.getUser());
        assertEquals(password, byId.getPassword());
        assertEquals(dbName, byId.getDbName());
        assertEquals(DbConnectionType.POSTGRES, byId.getType());

        OracleDbConnectionDetails byId2 = (OracleDbConnectionDetails) list.get(1).getDetails();
        assertEquals(dbConnectionid2, byId2.getId());
        assertEquals(name2, byId2.getName());
        assertEquals(host2, byId2.getHost());
        assertEquals(port2, byId2.getPort());
        assertEquals(user2, byId2.getUser());
        assertEquals(password2, byId2.getPassword());
        assertEquals(sid2, byId2.getSid());
        assertEquals(DbConnectionType.ORACLE, byId2.getType());

    }


    @Test
    void byIdDbConnection() {

        PostgresDbConnectionDetails details = new PostgresDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.POSTGRES);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setDbName(dbName);

        when(repository.findById(eq(dbConnectionid))).thenReturn(Optional.of(details));


        OracleDbConnectionDetails details2 = new OracleDbConnectionDetails();
        details2.setId(dbConnectionid2);
        details2.setType(DbConnectionType.ORACLE);
        details2.setName(name2);
        details2.setHost(host2);
        details2.setPort(port2);
        details2.setUser(user2);
        details2.setPassword(password2);
        details2.setSid(sid2);

        when(repository.findById(eq(dbConnectionid2))).thenReturn(Optional.of(details2));

        PostgresDbConnectionDetails byId = (PostgresDbConnectionDetails) factory.byId(dbConnectionid).getDetails();
        assertEquals(dbConnectionid, byId.getId());
        assertEquals(name, byId.getName());
        assertEquals(host, byId.getHost());
        assertEquals(port, byId.getPort());
        assertEquals(user, byId.getUser());
        assertEquals(password, byId.getPassword());
        assertEquals(dbName, byId.getDbName());
        assertEquals(DbConnectionType.POSTGRES, byId.getType());

        OracleDbConnectionDetails byId2 = (OracleDbConnectionDetails) factory.byId(dbConnectionid2).getDetails();
        assertEquals(dbConnectionid2, byId2.getId());
        assertEquals(name2, byId2.getName());
        assertEquals(host2, byId2.getHost());
        assertEquals(port2, byId2.getPort());
        assertEquals(user2, byId2.getUser());
        assertEquals(password2, byId2.getPassword());
        assertEquals(sid2, byId2.getSid());
        assertEquals(DbConnectionType.ORACLE, byId2.getType());

    }


    @Test
    void byIdNotFound() {
        when(repository.findById(eq(dbConnectionid))).thenReturn(Optional.empty());
        assertThrows(IllegalArgumentException.class, () -> {
            factory.byId(dbConnectionid);
        });
    }


    @Test
    void createUnknownType() {
        PostgresDbConnectionDetails details = new PostgresDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(null);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setDbName(dbName);

        when(repository.findById(eq(dbConnectionid))).thenReturn(Optional.of(details));
        assertThrows(IllegalArgumentException.class, () -> {
            factory.byId(dbConnectionid);
        });

    }



}