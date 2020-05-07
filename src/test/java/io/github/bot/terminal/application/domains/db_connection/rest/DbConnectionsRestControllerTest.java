package io.github.bot.terminal.application.domains.db_connection.rest;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.bot.terminal.application.domains.db_connection.rest.dto.*;
import io.github.bot.terminal.application.domains.db_connection.rest.requests.MySqlDbConnectionRequest;
import io.github.bot.terminal.application.domains.db_connection.rest.requests.OracleDbConnectionRequest;
import io.github.bot.terminal.application.domains.db_connection.rest.requests.PostgresDbConnectionRequest;
import io.github.bot.terminal.application.domains.db_connection.rest.values.DbConnectionType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.UUID;

import static org.hamcrest.core.Is.is;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
class DbConnectionsRestControllerTest {

    @Mock
    private DbConnectionsRestService restService;

    @InjectMocks
    private DbConnectionsRestController controller;

    @Captor
    ArgumentCaptor<PostgresDbConnectionRequest> postgresRequestArgumentCaptor;

    @Captor
    ArgumentCaptor<MySqlDbConnectionRequest> mysqlRequestArgumentCaptor;

    @Captor
    ArgumentCaptor<OracleDbConnectionRequest> oracleRequestArgumentCaptor;

    private ObjectMapper mapper = new ObjectMapper();

    private MockMvc mockMvc;

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
    void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }

    @Test
    public void getAvailableDbConnectionTypes() throws Exception {
        DbConnectionTypeDTO dto = new DbConnectionTypeDTO();
        dto.setType(DbConnectionType.POSTGRES.name());
        dto.setLabel(DbConnectionType.POSTGRES.getLabel());
        when(restService.types()).thenReturn(Collections.singletonList(dto));

        this.mockMvc.perform(get("/api/db-connections/types")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].type", is(DbConnectionType.POSTGRES.name())))
                .andExpect(jsonPath("$[0].label", is(DbConnectionType.POSTGRES.getLabel())));
    }

    @Test
    public void addPostgresDataBaseConnection() throws Exception {

        PostgresDbConnectionDTO dto = new PostgresDbConnectionDTO();
        dto.setId(dbConnectionid);
        dto.setType(DbConnectionType.POSTGRES.name());
        dto.setName(name);
        dto.setHost(host);
        dto.setPort(port);
        dto.setUser(user);
        dto.setPassword(password);
        dto.setDbName(dbName);
        when(restService.add(any())).thenReturn(dto);

        PostgresDbConnectionRequest request = new PostgresDbConnectionRequest();
        request.setName(name);
        request.setHost(host);
        request.setPort(port);
        request.setUser(user);
        request.setPassword(password);
        request.setDbName(dbName);

        this.mockMvc.perform(post("/api/db-connections")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())

                .andExpect(jsonPath("$.id", is(dbConnectionid)))
                .andExpect(jsonPath("$.type", is(DbConnectionType.Constants.POSTGRES)))
                .andExpect(jsonPath("$.name", is(name)))
                .andExpect(jsonPath("$.host", is(host)))
                .andExpect(jsonPath("$.port", is(port)))
                .andExpect(jsonPath("$.user", is(user)))
                .andExpect(jsonPath("$.password", is(password)))
                .andExpect(jsonPath("$.dbName", is(dbName)));

        verify(restService, times(1))
                .add(postgresRequestArgumentCaptor.capture());
        PostgresDbConnectionRequest value = postgresRequestArgumentCaptor.getValue();

        assertEquals(name, value.getName());
        assertEquals(host, value.getHost());
        assertEquals(port, value.getPort());
        assertEquals(user, value.getUser());
        assertEquals(password, value.getPassword());
        assertEquals(dbName, value.getDbName());
    }

    @Test
    public void addMySqlDataBaseConnection() throws Exception {

        MySqlDbConnectionDTO dto = new MySqlDbConnectionDTO();
        dto.setId(dbConnectionid);
        dto.setType(DbConnectionType.MYSQL.name());
        dto.setName(name);
        dto.setHost(host);
        dto.setPort(port);
        dto.setUser(user);
        dto.setPassword(password);
        dto.setDbName(dbName);
        when(restService.add(any())).thenReturn(dto);

        MySqlDbConnectionRequest request = new MySqlDbConnectionRequest();
        request.setName(name);
        request.setHost(host);
        request.setPort(port);
        request.setUser(user);
        request.setPassword(password);
        request.setDbName(dbName);

        this.mockMvc.perform(post("/api/db-connections")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())

                .andExpect(jsonPath("$.id", is(dbConnectionid)))
                .andExpect(jsonPath("$.type", is(DbConnectionType.Constants.MYSQL)))
                .andExpect(jsonPath("$.name", is(name)))
                .andExpect(jsonPath("$.host", is(host)))
                .andExpect(jsonPath("$.port", is(port)))
                .andExpect(jsonPath("$.user", is(user)))
                .andExpect(jsonPath("$.password", is(password)))
                .andExpect(jsonPath("$.dbName", is(dbName)));

        verify(restService, times(1))
                .add(mysqlRequestArgumentCaptor.capture());
        MySqlDbConnectionRequest value = mysqlRequestArgumentCaptor.getValue();

        assertEquals(name, value.getName());
        assertEquals(host, value.getHost());
        assertEquals(port, value.getPort());
        assertEquals(user, value.getUser());
        assertEquals(password, value.getPassword());
        assertEquals(dbName, value.getDbName());
    }

    @Test
    public void addOracleDataBaseConnection() throws Exception {

        OracleDbConnectionDTO dto = new OracleDbConnectionDTO();
        dto.setId(dbConnectionid);
        dto.setType(DbConnectionType.ORACLE.name());
        dto.setName(name);
        dto.setHost(host);
        dto.setPort(port);
        dto.setUser(user);
        dto.setPassword(password);
        dto.setSid(sid);
        when(restService.add(any())).thenReturn(dto);

        OracleDbConnectionRequest request = new OracleDbConnectionRequest();
        request.setName(name);
        request.setHost(host);
        request.setPort(port);
        request.setUser(user);
        request.setPassword(password);
        request.setSid(sid);

        this.mockMvc.perform(post("/api/db-connections")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())

                .andExpect(jsonPath("$.id", is(dbConnectionid)))
                .andExpect(jsonPath("$.type", is(DbConnectionType.Constants.ORACLE)))
                .andExpect(jsonPath("$.name", is(name)))
                .andExpect(jsonPath("$.host", is(host)))
                .andExpect(jsonPath("$.port", is(port)))
                .andExpect(jsonPath("$.user", is(user)))
                .andExpect(jsonPath("$.password", is(password)))
                .andExpect(jsonPath("$.sid", is(sid)));

        verify(restService, times(1))
                .add(oracleRequestArgumentCaptor.capture());
        OracleDbConnectionRequest value = oracleRequestArgumentCaptor.getValue();

        assertEquals(name, value.getName());
        assertEquals(host, value.getHost());
        assertEquals(port, value.getPort());
        assertEquals(user, value.getUser());
        assertEquals(password, value.getPassword());
        assertEquals(sid, value.getSid());
    }

    @Test
    public void editPostgresDataBaseConnection() throws Exception {

        PostgresDbConnectionDTO dto = new PostgresDbConnectionDTO();
        dto.setId(dbConnectionid);
        dto.setType(DbConnectionType.POSTGRES.name());
        dto.setName(name);
        dto.setHost(host);
        dto.setPort(port);
        dto.setUser(user);
        dto.setPassword(password);
        dto.setDbName(dbName);
        when(restService.edit(any(), any())).thenReturn(dto);

        PostgresDbConnectionRequest request = new PostgresDbConnectionRequest();
        request.setName(name);
        request.setHost(host);
        request.setPort(port);
        request.setUser(user);
        request.setPassword(password);
        request.setDbName(dbName);

        this.mockMvc.perform(put("/api/db-connections/" + dbConnectionid)
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())

                .andExpect(jsonPath("$.id", is(dbConnectionid)))
                .andExpect(jsonPath("$.type", is(DbConnectionType.Constants.POSTGRES)))
                .andExpect(jsonPath("$.name", is(name)))
                .andExpect(jsonPath("$.host", is(host)))
                .andExpect(jsonPath("$.port", is(port)))
                .andExpect(jsonPath("$.user", is(user)))
                .andExpect(jsonPath("$.password", is(password)))
                .andExpect(jsonPath("$.dbName", is(dbName)));

        verify(restService, times(1))
                .edit(eq(dbConnectionid), postgresRequestArgumentCaptor.capture());
        PostgresDbConnectionRequest value = postgresRequestArgumentCaptor.getValue();

        assertEquals(name, value.getName());
        assertEquals(host, value.getHost());
        assertEquals(port, value.getPort());
        assertEquals(user, value.getUser());
        assertEquals(password, value.getPassword());
        assertEquals(dbName, value.getDbName());
    }

    @Test
    public void editMySqlDataBaseConnection() throws Exception {

        MySqlDbConnectionDTO dto = new MySqlDbConnectionDTO();
        dto.setId(dbConnectionid);
        dto.setType(DbConnectionType.MYSQL.name());
        dto.setName(name);
        dto.setHost(host);
        dto.setPort(port);
        dto.setUser(user);
        dto.setPassword(password);
        dto.setDbName(dbName);
        when(restService.edit(any(), any())).thenReturn(dto);

        MySqlDbConnectionRequest request = new MySqlDbConnectionRequest();
        request.setName(name);
        request.setHost(host);
        request.setPort(port);
        request.setUser(user);
        request.setPassword(password);
        request.setDbName(dbName);

        this.mockMvc.perform(put("/api/db-connections/" + dbConnectionid)
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())

                .andExpect(jsonPath("$.id", is(dbConnectionid)))
                .andExpect(jsonPath("$.type", is(DbConnectionType.Constants.MYSQL)))
                .andExpect(jsonPath("$.name", is(name)))
                .andExpect(jsonPath("$.host", is(host)))
                .andExpect(jsonPath("$.port", is(port)))
                .andExpect(jsonPath("$.user", is(user)))
                .andExpect(jsonPath("$.password", is(password)))
                .andExpect(jsonPath("$.dbName", is(dbName)));

        verify(restService, times(1))
                .edit(eq(dbConnectionid), mysqlRequestArgumentCaptor.capture());
        MySqlDbConnectionRequest value = mysqlRequestArgumentCaptor.getValue();

        assertEquals(name, value.getName());
        assertEquals(host, value.getHost());
        assertEquals(port, value.getPort());
        assertEquals(user, value.getUser());
        assertEquals(password, value.getPassword());
        assertEquals(dbName, value.getDbName());
    }

    @Test
    public void editOracleDataBaseConnection() throws Exception {

        OracleDbConnectionDTO dto = new OracleDbConnectionDTO();
        dto.setId(dbConnectionid);
        dto.setType(DbConnectionType.ORACLE.name());
        dto.setName(name);
        dto.setHost(host);
        dto.setPort(port);
        dto.setUser(user);
        dto.setPassword(password);
        dto.setSid(sid);
        when(restService.edit(any(), any())).thenReturn(dto);

        OracleDbConnectionRequest request = new OracleDbConnectionRequest();
        request.setName(name);
        request.setHost(host);
        request.setPort(port);
        request.setUser(user);
        request.setPassword(password);
        request.setSid(sid);

        this.mockMvc.perform(put("/api/db-connections/" + dbConnectionid)
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())

                .andExpect(jsonPath("$.id", is(dbConnectionid)))
                .andExpect(jsonPath("$.type", is(DbConnectionType.Constants.ORACLE)))
                .andExpect(jsonPath("$.name", is(name)))
                .andExpect(jsonPath("$.host", is(host)))
                .andExpect(jsonPath("$.port", is(port)))
                .andExpect(jsonPath("$.user", is(user)))
                .andExpect(jsonPath("$.password", is(password)))
                .andExpect(jsonPath("$.sid", is(sid)));

        verify(restService, times(1))
                .edit(eq(dbConnectionid), oracleRequestArgumentCaptor.capture());
        OracleDbConnectionRequest value = oracleRequestArgumentCaptor.getValue();

        assertEquals(name, value.getName());
        assertEquals(host, value.getHost());
        assertEquals(port, value.getPort());
        assertEquals(user, value.getUser());
        assertEquals(password, value.getPassword());
        assertEquals(sid, value.getSid());
    }

    @Test
    public void getPostgresDataBaseConnection() throws Exception {

        PostgresDbConnectionDTO dto = new PostgresDbConnectionDTO();
        dto.setId(dbConnectionid);
        dto.setType(DbConnectionType.POSTGRES.name());
        dto.setName(name);
        dto.setHost(host);
        dto.setPort(port);
        dto.setUser(user);
        dto.setPassword(password);
        dto.setDbName(dbName);
        when(restService.get(any())).thenReturn(dto);

        this.mockMvc.perform(get("/api/db-connections/" + dbConnectionid)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())

                .andExpect(jsonPath("$.id", is(dbConnectionid)))
                .andExpect(jsonPath("$.type", is(DbConnectionType.Constants.POSTGRES)))
                .andExpect(jsonPath("$.name", is(name)))
                .andExpect(jsonPath("$.host", is(host)))
                .andExpect(jsonPath("$.port", is(port)))
                .andExpect(jsonPath("$.user", is(user)))
                .andExpect(jsonPath("$.password", is(password)))
                .andExpect(jsonPath("$.dbName", is(dbName)));

        verify(restService, times(1))
                .get(eq(dbConnectionid));
    }

    @Test
    public void getMySqlDataBaseConnection() throws Exception {

        MySqlDbConnectionDTO dto = new MySqlDbConnectionDTO();
        dto.setId(dbConnectionid);
        dto.setType(DbConnectionType.MYSQL.name());
        dto.setName(name);
        dto.setHost(host);
        dto.setPort(port);
        dto.setUser(user);
        dto.setPassword(password);
        dto.setDbName(dbName);
        when(restService.get(any())).thenReturn(dto);

        this.mockMvc.perform(get("/api/db-connections/" + dbConnectionid)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())

                .andExpect(jsonPath("$.id", is(dbConnectionid)))
                .andExpect(jsonPath("$.type", is(DbConnectionType.Constants.MYSQL)))
                .andExpect(jsonPath("$.name", is(name)))
                .andExpect(jsonPath("$.host", is(host)))
                .andExpect(jsonPath("$.port", is(port)))
                .andExpect(jsonPath("$.user", is(user)))
                .andExpect(jsonPath("$.password", is(password)))
                .andExpect(jsonPath("$.dbName", is(dbName)));

        verify(restService, times(1))
                .get(eq(dbConnectionid));
    }

    @Test
    public void getOracleDataBaseConnection() throws Exception {
        OracleDbConnectionDTO dto = new OracleDbConnectionDTO();
        dto.setId(dbConnectionid);
        dto.setType(DbConnectionType.ORACLE.name());
        dto.setName(name);
        dto.setHost(host);
        dto.setPort(port);
        dto.setUser(user);
        dto.setPassword(password);
        dto.setSid(sid);
        when(restService.get(any())).thenReturn(dto);

        this.mockMvc.perform(get("/api/db-connections/" + dbConnectionid)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())

                .andExpect(jsonPath("$.id", is(dbConnectionid)))
                .andExpect(jsonPath("$.type", is(DbConnectionType.Constants.ORACLE)))
                .andExpect(jsonPath("$.name", is(name)))
                .andExpect(jsonPath("$.host", is(host)))
                .andExpect(jsonPath("$.port", is(port)))
                .andExpect(jsonPath("$.user", is(user)))
                .andExpect(jsonPath("$.password", is(password)))
                .andExpect(jsonPath("$.sid", is(sid)));

        verify(restService, times(1))
                .get(eq(dbConnectionid));
    }

    @Test
    public void getList() throws Exception {

        OracleDbConnectionDTO dto1 = new OracleDbConnectionDTO();
        dto1.setId(dbConnectionid);
        dto1.setType(DbConnectionType.ORACLE.name());
        dto1.setName(name);
        dto1.setHost(host);
        dto1.setPort(port);
        dto1.setUser(user);
        dto1.setPassword(password);
        dto1.setSid(sid);

        MySqlDbConnectionDTO dto2 = new MySqlDbConnectionDTO();
        dto2.setId(dbConnectionid2);
        dto2.setType(DbConnectionType.MYSQL.name());
        dto2.setName(name2);
        dto2.setHost(host2);
        dto2.setPort(port2);
        dto2.setUser(user2);
        dto2.setPassword(password2);
        dto2.setDbName(dbName2);

        List<DbConnectionDTO> c = new ArrayList<>();
        c.add(dto1);
        c.add(dto2);

        when(restService.list()).thenReturn(c);

        this.mockMvc.perform(get("/api/db-connections")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())

                .andExpect(jsonPath("$[0].id", is(dbConnectionid)))
                .andExpect(jsonPath("$[0].type", is(DbConnectionType.Constants.ORACLE)))
                .andExpect(jsonPath("$[0].name", is(name)))
                .andExpect(jsonPath("$[0].host", is(host)))
                .andExpect(jsonPath("$[0].port", is(port)))
                .andExpect(jsonPath("$[0].user", is(user)))
                .andExpect(jsonPath("$[0].password", is(password)))
                .andExpect(jsonPath("$[0].sid", is(sid)))

                .andExpect(jsonPath("$[1].id", is(dbConnectionid2)))
                .andExpect(jsonPath("$[1].type", is(DbConnectionType.Constants.MYSQL)))
                .andExpect(jsonPath("$[1].name", is(name2)))
                .andExpect(jsonPath("$[1].host", is(host2)))
                .andExpect(jsonPath("$[1].port", is(port2)))
                .andExpect(jsonPath("$[1].user", is(user2)))
                .andExpect(jsonPath("$[1].password", is(password2)))
                .andExpect(jsonPath("$[1].dbName", is(dbName2)));

    }

    @Test
    public void deleteNotificationApi() throws Exception {
        this.mockMvc.perform(delete("/api/db-connections/" + dbConnectionid)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNoContent());

        verify(restService, times(1))
                .delete(eq(dbConnectionid));


    }

}