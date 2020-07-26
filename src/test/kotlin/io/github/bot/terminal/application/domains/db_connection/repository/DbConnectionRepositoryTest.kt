package io.github.bot.terminal.application.domains.db_connection.repository;

import io.github.bot.terminal.application.domains.db_connection.DbConnectionsRepositoryTestConfig;
import io.github.bot.terminal.application.domains.db_connection.entity.DbConnectionDetails;
import io.github.bot.terminal.application.domains.db_connection.entity.MySqlDbConnectionDetails;
import io.github.bot.terminal.application.domains.db_connection.entity.OracleDbConnectionDetails;
import io.github.bot.terminal.application.domains.db_connection.entity.PostgresDbConnectionDetails;
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;


@ExtendWith(SpringExtension.class)
@Import(DbConnectionsRepositoryTestConfig.class)
class DbConnectionRepositoryTest {

    @Autowired
    DbConnectionRepository repository;

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

    @AfterEach
    public void clean(){
        repository.deleteById(dbConnectionid);
        repository.deleteById(dbConnectionid2);
    }

    @Test
    public void addPostgresDetails() {
        PostgresDbConnectionDetails details = new PostgresDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.POSTGRES);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setDbName(dbName);

        repository.add(details);

        PostgresDbConnectionDetails byId = (PostgresDbConnectionDetails) repository.findById(dbConnectionid).get();
        assertEquals(name, byId.getName());
        assertEquals(host, byId.getHost());
        assertEquals(port, byId.getPort());
        assertEquals(user, byId.getUser());
        assertEquals(password, byId.getPassword());
        assertEquals(dbName, byId.getDbName());
        assertEquals(DbConnectionType.POSTGRES, byId.getType());

    }

    @Test
    public void addMySqlDetails() {
        MySqlDbConnectionDetails details = new MySqlDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.MYSQL);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setDbName(dbName);

        repository.add(details);

        MySqlDbConnectionDetails byId = (MySqlDbConnectionDetails) repository.findById(dbConnectionid).get();
        assertEquals(name, byId.getName());
        assertEquals(host, byId.getHost());
        assertEquals(port, byId.getPort());
        assertEquals(user, byId.getUser());
        assertEquals(password, byId.getPassword());
        assertEquals(dbName, byId.getDbName());
        assertEquals(DbConnectionType.MYSQL, byId.getType());

    }

    @Test
    public void addOracleDetails() {
        OracleDbConnectionDetails details = new OracleDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.ORACLE);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setSid(sid);

        repository.add(details);

        OracleDbConnectionDetails byId = (OracleDbConnectionDetails) repository.findById(dbConnectionid).get();
        assertEquals(name, byId.getName());
        assertEquals(host, byId.getHost());
        assertEquals(port, byId.getPort());
        assertEquals(user, byId.getUser());
        assertEquals(password, byId.getPassword());
        assertEquals(sid, byId.getSid());
        assertEquals(DbConnectionType.ORACLE, byId.getType());

    }


    @Test
    public void editOracleDetails() {
        OracleDbConnectionDetails details = new OracleDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.ORACLE);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setSid(sid);

        repository.add(details);

        details.setName(name2);
        details.setHost(host2);
        details.setPort(port2);
        details.setUser(user2);
        details.setPassword(password2);
        details.setSid(sid2);

        repository.update(details);

        OracleDbConnectionDetails byId = (OracleDbConnectionDetails) repository.findById(dbConnectionid).get();
        assertEquals(name2, byId.getName());
        assertEquals(host2, byId.getHost());
        assertEquals(port2, byId.getPort());
        assertEquals(user2, byId.getUser());
        assertEquals(password2, byId.getPassword());
        assertEquals(sid2, byId.getSid());
        assertEquals(DbConnectionType.ORACLE, byId.getType());

    }

    @Test
    public void editMySqlDetails() {
        MySqlDbConnectionDetails details = new MySqlDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.MYSQL);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setDbName(dbName);

        repository.add(details);

        details.setName(name2);
        details.setHost(host2);
        details.setPort(port2);
        details.setUser(user2);
        details.setPassword(password2);
        details.setDbName(dbName2);

        repository.update(details);

        MySqlDbConnectionDetails byId = (MySqlDbConnectionDetails) repository.findById(dbConnectionid).get();
        assertEquals(name2, byId.getName());
        assertEquals(host2, byId.getHost());
        assertEquals(port2, byId.getPort());
        assertEquals(user2, byId.getUser());
        assertEquals(password2, byId.getPassword());
        assertEquals(dbName2, byId.getDbName());
        assertEquals(DbConnectionType.MYSQL, byId.getType());

    }

    @Test
    public void editPostgresDetails() {
        PostgresDbConnectionDetails details = new PostgresDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.POSTGRES);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setDbName(dbName);

        repository.add(details);

        details.setName(name2);
        details.setHost(host2);
        details.setPort(port2);
        details.setUser(user2);
        details.setPassword(password2);
        details.setDbName(dbName2);

        repository.update(details);

        PostgresDbConnectionDetails byId = (PostgresDbConnectionDetails) repository.findById(dbConnectionid).get();
        assertEquals(name2, byId.getName());
        assertEquals(host2, byId.getHost());
        assertEquals(port2, byId.getPort());
        assertEquals(user2, byId.getUser());
        assertEquals(password2, byId.getPassword());
        assertEquals(dbName2, byId.getDbName());
        assertEquals(DbConnectionType.POSTGRES, byId.getType());

    }

    @Test
    public void findAll() {
        PostgresDbConnectionDetails details = new PostgresDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.POSTGRES);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setDbName(dbName);

        repository.add(details);

        OracleDbConnectionDetails details2 = new OracleDbConnectionDetails();
        details2.setId(dbConnectionid2);
        details2.setType(DbConnectionType.ORACLE);
        details2.setName(name2);
        details2.setHost(host2);
        details2.setPort(port2);
        details2.setUser(user2);
        details2.setPassword(password2);
        details2.setSid(sid2);

        repository.add(details2);

        List<DbConnectionDetails> all = repository.findAll();

        PostgresDbConnectionDetails byId = (PostgresDbConnectionDetails) all.get(0);
        assertEquals(name, byId.getName());
        assertEquals(host, byId.getHost());
        assertEquals(port, byId.getPort());
        assertEquals(user, byId.getUser());
        assertEquals(password, byId.getPassword());
        assertEquals(dbName, byId.getDbName());
        assertEquals(DbConnectionType.POSTGRES, byId.getType());

        OracleDbConnectionDetails byId2 = (OracleDbConnectionDetails) all.get(1);
        assertEquals(name2, byId2.getName());
        assertEquals(host2, byId2.getHost());
        assertEquals(port2, byId2.getPort());
        assertEquals(user2, byId2.getUser());
        assertEquals(password2, byId2.getPassword());
        assertEquals(sid2, byId2.getSid());
        assertEquals(DbConnectionType.ORACLE, byId2.getType());
   }

    @Test
    public void deleteById() {
        String id = UUID.randomUUID().toString();
        PostgresDbConnectionDetails details = new PostgresDbConnectionDetails();
        details.setId(id);
        details.setType(DbConnectionType.POSTGRES);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setDbName(dbName);

        repository.add(details);
        assertTrue(repository.findById(id).isPresent());

        repository.deleteById(id);
        assertFalse(repository.findById(id).isPresent());
    }

}