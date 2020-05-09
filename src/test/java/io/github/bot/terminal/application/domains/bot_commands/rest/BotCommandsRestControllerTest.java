package io.github.bot.terminal.application.domains.bot_commands.rest;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandDTO;
import io.github.bot.terminal.application.domains.bot_commands.rest.requests.BotCommandRequest;
import io.github.bot.terminal.application.domains.common.action.dto.SqlSelectAsTextActionDTO;
import io.github.bot.terminal.application.domains.common.action.requests.SqlSelectAsTextActionRequest;
import io.github.bot.terminal.application.domains.common.action.values.ActionType;
import io.github.bot.terminal.application.domains.db_connection.rest.requests.PostgresDbConnectionRequest;
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType;
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

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.UUID;

import static org.hamcrest.core.Is.is;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
class BotCommandsRestControllerTest {
    @Mock
    private BotCommandsRestService service;

    @InjectMocks
    private BotCommandsRestController controller;

    @Captor
    ArgumentCaptor<BotCommandRequest> botCommandRequestCaptor;

    private ObjectMapper mapper = new ObjectMapper();

    private MockMvc mockMvc;

    private String type = ActionType.SQL_SELECT_AS_TEXT.name();
    private String select = UUID.randomUUID().toString();
    private String dbConnectionId = UUID.randomUUID().toString();
    private String resultTemplate = UUID.randomUUID().toString();
    private String id = UUID.randomUUID().toString();
    private String name = UUID.randomUUID().toString();
    private String cmd = UUID.randomUUID().toString();
    private List<String> botIds = Collections.singletonList(UUID.randomUUID().toString());
    private String state = UUID.randomUUID().toString();

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }

    @Test
    public void addSqlSelectAsStringBotCommand() throws Exception {

        SqlSelectAsTextActionDTO actionDTO = new SqlSelectAsTextActionDTO();
        actionDTO.setType(ActionType.SQL_SELECT_AS_TEXT.name());
        actionDTO.setDbConnectionId(dbConnectionId);
        actionDTO.setSelect(select);
        actionDTO.setResultTemplate(resultTemplate);

        BotCommandDTO dto = new BotCommandDTO();
        dto.setId(id);
        dto.setCmd(cmd);
        dto.setName(name);
        dto.setBotIds(botIds);
        dto.setState(state);
        dto.setAction(actionDTO);

        when(service.add(any())).thenReturn(dto);

        SqlSelectAsTextActionRequest action = new SqlSelectAsTextActionRequest();
        action.setType(ActionType.SQL_SELECT_AS_TEXT.name());
        action.setDbConnectionId(dbConnectionId);
        action.setSelect(select);
        action.setResultTemplate(resultTemplate);

        BotCommandRequest request = new BotCommandRequest();
        request.setCmd(cmd);
        request.setName(name);
        request.setBotIds(botIds);
        request.setState(state);
        request.setAction(action);

        this.mockMvc.perform(post("/api/bot-commands")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())

                .andExpect(jsonPath("$.id", is(id)))
                .andExpect(jsonPath("$.name", is(name)))
                .andExpect(jsonPath("$.cmd", is(cmd)))
                .andExpect(jsonPath("$.state", is(state)))
                .andExpect(jsonPath("$.botIds[0]", is(botIds.get(0))))
                .andExpect(jsonPath("$.action.type", is(type)))
                .andExpect(jsonPath("$.action.dbConnectionId", is(dbConnectionId)))
                .andExpect(jsonPath("$.action.select", is(select)))
                .andExpect(jsonPath("$.action.resultTemplate", is(resultTemplate)));

        verify(service, times(1))
                .add(botCommandRequestCaptor.capture());
        BotCommandRequest botReqPassed = botCommandRequestCaptor.getValue();

        assertEquals(name, botReqPassed.getName());
        assertEquals(cmd, botReqPassed.getCmd());
        assertEquals(state, botReqPassed.getState());
        assertEquals(botIds.get(0), botReqPassed.getBotIds().stream().findFirst().get());
        assertEquals(name, botReqPassed.getName());

        SqlSelectAsTextActionRequest actionRequest = (SqlSelectAsTextActionRequest)botReqPassed.getAction();

        assertEquals(type, actionRequest.getType());
        assertEquals(dbConnectionId, actionRequest.getDbConnectionId());
        assertEquals(select, actionRequest.getSelect());
        assertEquals(resultTemplate, actionRequest.getResultTemplate());
    }


}