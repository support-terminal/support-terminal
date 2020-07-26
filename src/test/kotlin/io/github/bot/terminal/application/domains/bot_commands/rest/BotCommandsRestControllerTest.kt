package io.github.bot.terminal.application.domains.bot_commands.rest;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.bot.terminal.application.domains.bot_commands.BotCommandsTestHelper;
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandDTO;
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandTypeDTO;
import io.github.bot.terminal.application.domains.bot_commands.rest.requests.BotCommandRequest;
import io.github.bot.terminal.application.domains.common.action.requests.SqlSelectAsTextActionRequest;
import io.github.bot.terminal.application.domains.common.action.values.ActionType;
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

import static org.hamcrest.core.Is.is;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
class BotCommandsRestControllerTest extends BotCommandsTestHelper {
    @Mock
    private BotCommandsRestService service;

    @InjectMocks
    private BotCommandsRestController controller;

    @Captor
    ArgumentCaptor<BotCommandRequest> botCommandRequestCaptor;

    private ObjectMapper mapper = new ObjectMapper();

    private MockMvc mockMvc;


    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }

    @Test
    public void addSqlSelectAsStringBotCommand() throws Exception {

        BotCommandDTO dto = getSqlAsSelectBotCommandDto1();
        when(service.add(any())).thenReturn(dto);

        BotCommandRequest request = getSqlAsSelectBotCommandRequest1();

        this.mockMvc.perform(post("/api/bot-commands")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())

                .andExpect(jsonPath("$.id", is(id)))
                .andExpect(jsonPath("$.name", is(name)))
                .andExpect(jsonPath("$.cmd", is(cmd)))
                .andExpect(jsonPath("$.state", is(state.name())))
                .andExpect(jsonPath("$.botIds[0]", is(botIds.get(0))))
                .andExpect(jsonPath("$.action.type", is(type.name())))
                .andExpect(jsonPath("$.action.dbConnectionId", is(dbConnectionId)))
                .andExpect(jsonPath("$.action.select", is(select)))
                .andExpect(jsonPath("$.action.resultTemplate", is(resultTemplate)));

        verify(service, times(1))
                .add(botCommandRequestCaptor.capture());
        BotCommandRequest botReqPassed = botCommandRequestCaptor.getValue();

        assertEquals(name, botReqPassed.getName());
        assertEquals(cmd, botReqPassed.getCmd());
        assertEquals(state.name(), botReqPassed.getState());
        assertEquals(botIds.get(0), botReqPassed.getBotIds().stream().findFirst().get());
        assertEquals(name, botReqPassed.getName());

        SqlSelectAsTextActionRequest actionRequest = (SqlSelectAsTextActionRequest) botReqPassed.getAction();

        assertEquals(type.name(), actionRequest.getType());
        assertEquals(dbConnectionId, actionRequest.getDbConnectionId());
        assertEquals(select, actionRequest.getSelect());
        assertEquals(resultTemplate, actionRequest.getResultTemplate());
    }

    @Test
    public void editSqlSelectAsStringBotCommand() throws Exception {

        BotCommandDTO dto = getSqlAsSelectBotCommandDto1();
        when(service.edit(eq(id), any())).thenReturn(dto);

        BotCommandRequest request = getSqlAsSelectBotCommandRequest1();
        this.mockMvc.perform(put("/api/bot-commands/" + id)
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())

                .andExpect(jsonPath("$.id", is(id)))
                .andExpect(jsonPath("$.name", is(name)))
                .andExpect(jsonPath("$.cmd", is(cmd)))
                .andExpect(jsonPath("$.state", is(state.name())))
                .andExpect(jsonPath("$.botIds[0]", is(botIds.get(0))))
                .andExpect(jsonPath("$.action.type", is(type.name())))
                .andExpect(jsonPath("$.action.dbConnectionId", is(dbConnectionId)))
                .andExpect(jsonPath("$.action.select", is(select)))
                .andExpect(jsonPath("$.action.resultTemplate", is(resultTemplate)));

        verify(service, times(1))
                .edit(eq(id), botCommandRequestCaptor.capture());
        BotCommandRequest botReqPassed = botCommandRequestCaptor.getValue();

        assertEquals(name, botReqPassed.getName());
        assertEquals(cmd, botReqPassed.getCmd());
        assertEquals(state.name(), botReqPassed.getState());
        assertEquals(botIds.get(0), botReqPassed.getBotIds().stream().findFirst().get());
        assertEquals(name, botReqPassed.getName());

        SqlSelectAsTextActionRequest actionRequest = (SqlSelectAsTextActionRequest) botReqPassed.getAction();

        assertEquals(type.name(), actionRequest.getType());
        assertEquals(dbConnectionId, actionRequest.getDbConnectionId());
        assertEquals(select, actionRequest.getSelect());
        assertEquals(resultTemplate, actionRequest.getResultTemplate());
    }

    @Test
    public void getSqlSelectAsStringBotCommand() throws Exception {

        BotCommandDTO dto = getSqlAsSelectBotCommandDto1();

        when(service.get(eq(id))).thenReturn(dto);

        this.mockMvc.perform(get("/api/bot-commands/" + id)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())

                .andExpect(jsonPath("$.id", is(id)))
                .andExpect(jsonPath("$.name", is(name)))
                .andExpect(jsonPath("$.cmd", is(cmd)))
                .andExpect(jsonPath("$.state", is(state.name())))
                .andExpect(jsonPath("$.botIds[0]", is(botIds.get(0))))
                .andExpect(jsonPath("$.action.type", is(type.name())))
                .andExpect(jsonPath("$.action.dbConnectionId", is(dbConnectionId)))
                .andExpect(jsonPath("$.action.select", is(select)))
                .andExpect(jsonPath("$.action.resultTemplate", is(resultTemplate)));

        verify(service, times(1))
                .get(eq(id));
    }

    @Test
    public void getList() throws Exception {
        BotCommandDTO dto1 = getSqlAsSelectBotCommandDto1();
        BotCommandDTO dto2 = getSqlAsSelectBotCommandDto2();
        List<BotCommandDTO> c = new ArrayList<>();
        c.add(dto1);
        c.add(dto2);

        when(service.list()).thenReturn(c);

        this.mockMvc.perform(get("/api/bot-commands")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())

                .andExpect(jsonPath("$[0].id", is(id)))
                .andExpect(jsonPath("$[0].name", is(name)))
                .andExpect(jsonPath("$[0].cmd", is(cmd)))
                .andExpect(jsonPath("$[0].state", is(state.name())))
                .andExpect(jsonPath("$[0].botIds[0]", is(botIds.get(0))))
                .andExpect(jsonPath("$[0].action.type", is(type.name())))
                .andExpect(jsonPath("$[0].action.dbConnectionId", is(dbConnectionId)))
                .andExpect(jsonPath("$[0].action.select", is(select)))
                .andExpect(jsonPath("$[0].action.resultTemplate", is(resultTemplate)))


                .andExpect(jsonPath("$[1].id", is(id2)))
                .andExpect(jsonPath("$[1].name", is(name2)))
                .andExpect(jsonPath("$[1].cmd", is(cmd2)))
                .andExpect(jsonPath("$[1].state", is(state2.name())))
                .andExpect(jsonPath("$[1].botIds[0]", is(botIds2.get(0))))
                .andExpect(jsonPath("$[1].action.type", is(type2.name())))
                .andExpect(jsonPath("$[1].action.dbConnectionId", is(dbConnectionId2)))
                .andExpect(jsonPath("$[1].action.select", is(select2)))
                .andExpect(jsonPath("$[1].action.resultTemplate", is(resultTemplate2)));

    }

    @Test
    public void deleteNotificationApi() throws Exception {
        this.mockMvc.perform(delete("/api/bot-commands/" + id)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNoContent());

        verify(service, times(1))
                .delete(eq(id));
    }

    @Test
    public void getTypes() throws Exception {
        BotCommandTypeDTO dto = new BotCommandTypeDTO();
        dto.setType(ActionType.SQL_SELECT_AS_TEXT.name());
        dto.setLabel(ActionType.SQL_SELECT_AS_TEXT.getLabel());
        when(service.types()).thenReturn(Collections.singletonList(dto));

        this.mockMvc.perform(get("/api/bot-commands/types")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].type", is(ActionType.SQL_SELECT_AS_TEXT.name())))
                .andExpect(jsonPath("$[0].label", is(ActionType.SQL_SELECT_AS_TEXT.getLabel())));
    }
}