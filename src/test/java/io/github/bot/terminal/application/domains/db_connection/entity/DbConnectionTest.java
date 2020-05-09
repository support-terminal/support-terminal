package io.github.bot.terminal.application.domains.db_connection.entity;

import io.github.bot.terminal.application.domains.db_connection.repository.DbConnectionRepository;
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class DbConnectionTest {

    @Mock
    private DbConnectionRepository repository;

    public String dbConnectionid = UUID.randomUUID().toString();
    public String name = UUID.randomUUID().toString();
    public String host = UUID.randomUUID().toString();
    public int port = 1233;
    public String user = UUID.randomUUID().toString();
    public String password = UUID.randomUUID().toString();
    public String dbName = UUID.randomUUID().toString();

    private DbConnection connection;

    @BeforeEach
    void init() {
        PostgresDbConnectionDetails details = new PostgresDbConnectionDetails();
        details.setId(dbConnectionid);
        details.setType(DbConnectionType.POSTGRES);
        details.setName(name);
        details.setHost(host);
        details.setPort(port);
        details.setUser(user);
        details.setPassword(password);
        details.setDbName(dbName);

        connection = spy(new PostgresDbConnection(details, repository));
    }

    @Test
    public void check() {
        JdbcTemplate templateMock = Mockito.mock(JdbcTemplate.class);
        doAnswer(invocation -> templateMock)
                .when(connection).createJdbcTemplate();

        connection.check();

        verify(templateMock, times(1)).execute(eq(connection.getCheckSelect()));
    }

    @Test
    public void createJdbcTemplate() {
        DataSource dataSource = Mockito.mock(DataSource.class);
        doAnswer(invocation -> Optional.of(dataSource))
                .when(connection).getDataSource();


        JdbcTemplate template = connection.createJdbcTemplate();
        assertEquals(dataSource, template.getDataSource());

    }

    @Test
    public void getDataSource() {
        String mockClassName = "java.lang.Class";
        connection.getDataSource();

        when(connection.getClassName()).thenReturn(mockClassName);
        DriverManagerDataSource dataSource = (DriverManagerDataSource)connection.getDataSource().get();

        assertEquals(connection.getUrl(), dataSource.getUrl() );
        assertEquals(connection.getDetails().getUser(), dataSource.getUsername() );
        assertEquals(connection.getDetails().getPassword(), dataSource.getPassword() );
        assertEquals(connection.getDetails().getPassword(), dataSource.getPassword() );
    }
}