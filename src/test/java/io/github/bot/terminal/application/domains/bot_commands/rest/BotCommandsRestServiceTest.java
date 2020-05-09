package io.github.bot.terminal.application.domains.bot_commands.rest;

import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommand;
import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommandDetails;
import io.github.bot.terminal.application.domains.bot_commands.factory.BotCommandsFactory;
import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandRepository;
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandDTO;
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandTypeDTO;
import io.github.bot.terminal.application.domains.bot_commands.rest.requests.BotCommandRequest;
import io.github.bot.terminal.application.domains.bot_commands.values.BotCommandState;
import io.github.bot.terminal.application.domains.common.action.ActionRestConverter;
import io.github.bot.terminal.application.domains.common.action.dto.SqlSelectAsTextActionDTO;
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsTextActionDetails;
import io.github.bot.terminal.application.domains.common.action.requests.SqlSelectAsTextActionRequest;
import io.github.bot.terminal.application.domains.common.action.values.ActionType;
import io.github.bot.terminal.application.domains.db_connection.entity.DbConnection;
import io.github.bot.terminal.application.domains.db_connection.entity.MySqlDbConnection;
import io.github.bot.terminal.application.domains.db_connection.entity.MySqlDbConnectionDetails;
import io.github.bot.terminal.application.domains.db_connection.rest.dto.DbConnectionTypeDTO;
import io.github.bot.terminal.application.domains.db_connection.rest.dto.MySqlDbConnectionDTO;
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collections;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class BotCommandsRestServiceTest {

    @Mock
    private BotCommandsFactory factory;

    @Mock
    private BotCommandRepository repository;

    private ActionRestConverter actionConverter = new ActionRestConverter();
    private BotCommandsRestConverter converter = spy(new BotCommandsRestConverter(actionConverter));

    private BotCommandsRestService service;

    @Captor
    ArgumentCaptor<BotCommandDetails> botCommandDetailsCaptor;

    private ActionType type = ActionType.SQL_SELECT_AS_TEXT;
    private String select = UUID.randomUUID().toString();
    private String dbConnectionId = UUID.randomUUID().toString();
    private String resultTemplate = UUID.randomUUID().toString();
    private String id = UUID.randomUUID().toString();
    private String name = UUID.randomUUID().toString();
    private String cmd = UUID.randomUUID().toString();
    private List<String> botIds = Collections.singletonList(UUID.randomUUID().toString());
    private BotCommandState state = BotCommandState.ENABLED;

    private String select2 = UUID.randomUUID().toString();
    private String dbConnectionId2 = UUID.randomUUID().toString();
    private String resultTemplate2 = UUID.randomUUID().toString();
    private String id2 = UUID.randomUUID().toString();
    private String name2 = UUID.randomUUID().toString();
    private String cmd2 = UUID.randomUUID().toString();
    private List<String> botIds2 = Collections.singletonList(UUID.randomUUID().toString());
    private BotCommandState state2 = BotCommandState.DISABLED;


    @BeforeEach
    public void inti() {
        service = new BotCommandsRestService(factory, converter);
    }


    @Test
    public void addSqlSelectAsTextBotCommand() {
        SqlSelectAsTextActionDetails actionDetails = new SqlSelectAsTextActionDetails();
        actionDetails.setType(ActionType.SQL_SELECT_AS_TEXT);
        actionDetails.setDbConnectionId(dbConnectionId);
        actionDetails.setSelect(select);
        actionDetails.setResultTemplate(resultTemplate);

        BotCommandDetails details = new BotCommandDetails();
        details.setId(id);
        details.setCmd(cmd);
        details.setName(name);
        details.setBotIds(botIds);
        details.setState(BotCommandState.ENABLED);
        details.setActionDetails(actionDetails);

        BotCommand command = new BotCommand(details, repository);

        when(factory.createNew(any()))
                .thenReturn(command);

        SqlSelectAsTextActionRequest action = new SqlSelectAsTextActionRequest();
        action.setType(ActionType.SQL_SELECT_AS_TEXT.name());
        action.setDbConnectionId(dbConnectionId);
        action.setSelect(select);
        action.setResultTemplate(resultTemplate);

        BotCommandRequest request = new BotCommandRequest();
        request.setCmd(cmd);
        request.setName(name);
        request.setBotIds(botIds);
        request.setState(state.name());
        request.setAction(action);

        BotCommandDTO apiDTO = service.add(request);
        assertEquals(id, apiDTO.getId());
        assertEquals(name, apiDTO.getName());
        assertEquals(cmd, apiDTO.getCmd());
        assertEquals(state.name(), apiDTO.getState());
        assertEquals(botIds.get(0), apiDTO.getBotIds().stream().findFirst().get());

        SqlSelectAsTextActionDTO actionRequest = (SqlSelectAsTextActionDTO) apiDTO.getAction();
        assertEquals(type.name(), actionRequest.getType());
        assertEquals(dbConnectionId, actionRequest.getDbConnectionId());
        assertEquals(select, actionRequest.getSelect());
        assertEquals(resultTemplate, actionRequest.getResultTemplate());

        verify(factory, times(1)).createNew(botCommandDetailsCaptor.capture());
        BotCommandDetails convertedDetails = botCommandDetailsCaptor.getValue();
        assertEquals(name, convertedDetails.getName());
        assertEquals(cmd, convertedDetails.getCmd());
        assertEquals(state, convertedDetails.getState());
        assertEquals(botIds.get(0), convertedDetails.getBotIds().stream().findFirst().get());

        SqlSelectAsTextActionDetails actionDetailsConverted = (SqlSelectAsTextActionDetails) convertedDetails.getActionDetails();
        assertEquals(type, actionDetailsConverted.getType());
        assertEquals(dbConnectionId, actionDetailsConverted.getDbConnectionId());
        assertEquals(select, actionDetailsConverted.getSelect());
        assertEquals(resultTemplate, actionDetailsConverted.getResultTemplate());

    }

    @Test
    public void editSqlSelectAsTextBotCommand() {

        SqlSelectAsTextActionDetails actionDetails = new SqlSelectAsTextActionDetails();
        actionDetails.setType(ActionType.SQL_SELECT_AS_TEXT);
        actionDetails.setDbConnectionId(dbConnectionId2);
        actionDetails.setSelect(select2);
        actionDetails.setResultTemplate(resultTemplate2);

        BotCommandDetails details = new BotCommandDetails();
        details.setId(id);
        details.setCmd(cmd2);
        details.setName(name2);
        details.setBotIds(botIds2);
        details.setState(state2);
        details.setActionDetails(actionDetails);

        BotCommand command = new BotCommand(details, repository);

        when(factory.merge(eq(id), any()))
                .thenReturn(command);

        SqlSelectAsTextActionRequest action = new SqlSelectAsTextActionRequest();
        action.setType(ActionType.SQL_SELECT_AS_TEXT.name());
        action.setDbConnectionId(dbConnectionId2);
        action.setSelect(select2);
        action.setResultTemplate(resultTemplate2);

        BotCommandRequest request = new BotCommandRequest();
        request.setCmd(cmd2);
        request.setName(name2);
        request.setBotIds(botIds2);
        request.setState(state2.name());
        request.setAction(action);

        BotCommandDTO apiDTO = service.edit(id, request);
        assertEquals(id, apiDTO.getId());
        assertEquals(name2, apiDTO.getName());
        assertEquals(cmd2, apiDTO.getCmd());
        assertEquals(state2.name(), apiDTO.getState());
        assertEquals(botIds2.get(0), apiDTO.getBotIds().stream().findFirst().get());

        SqlSelectAsTextActionDTO actionRequest = (SqlSelectAsTextActionDTO) apiDTO.getAction();
        assertEquals(type.name(), actionRequest.getType());
        assertEquals(dbConnectionId2, actionRequest.getDbConnectionId());
        assertEquals(select2, actionRequest.getSelect());
        assertEquals(resultTemplate2, actionRequest.getResultTemplate());

        verify(factory, times(1)).merge(eq(id),botCommandDetailsCaptor.capture());
        BotCommandDetails convertedDetails = botCommandDetailsCaptor.getValue();
        assertEquals(name2, convertedDetails.getName());
        assertEquals(cmd2, convertedDetails.getCmd());
        assertEquals(state2, convertedDetails.getState());
        assertEquals(botIds2.get(0), convertedDetails.getBotIds().stream().findFirst().get());

        SqlSelectAsTextActionDetails actionDetailsConverted = (SqlSelectAsTextActionDetails) convertedDetails.getActionDetails();
        assertEquals(type, actionDetailsConverted.getType());
        assertEquals(dbConnectionId2, actionDetailsConverted.getDbConnectionId());
        assertEquals(select2, actionDetailsConverted.getSelect());
        assertEquals(resultTemplate2, actionDetailsConverted.getResultTemplate());

    }


    @Test
    public void getSqlSelectAsTextBotCommand() {

        SqlSelectAsTextActionDetails actionDetails = new SqlSelectAsTextActionDetails();
        actionDetails.setType(ActionType.SQL_SELECT_AS_TEXT);
        actionDetails.setDbConnectionId(dbConnectionId2);
        actionDetails.setSelect(select2);
        actionDetails.setResultTemplate(resultTemplate2);

        BotCommandDetails details = new BotCommandDetails();
        details.setId(id);
        details.setCmd(cmd2);
        details.setName(name2);
        details.setBotIds(botIds2);
        details.setState(state2);
        details.setActionDetails(actionDetails);

        BotCommand command = new BotCommand(details, repository);

        when(factory.byId(eq(id)))
                .thenReturn(command);

        BotCommandDTO apiDTO = service.get(id);
        assertEquals(id, apiDTO.getId());
        assertEquals(name2, apiDTO.getName());
        assertEquals(cmd2, apiDTO.getCmd());
        assertEquals(state2.name(), apiDTO.getState());
        assertEquals(botIds2.get(0), apiDTO.getBotIds().stream().findFirst().get());

        SqlSelectAsTextActionDTO actionRequest = (SqlSelectAsTextActionDTO) apiDTO.getAction();
        assertEquals(type.name(), actionRequest.getType());
        assertEquals(dbConnectionId2, actionRequest.getDbConnectionId());
        assertEquals(select2, actionRequest.getSelect());
        assertEquals(resultTemplate2, actionRequest.getResultTemplate());
    }

    @Test
    void getAll() {

        SqlSelectAsTextActionDetails actionDetails = new SqlSelectAsTextActionDetails();
        actionDetails.setType(ActionType.SQL_SELECT_AS_TEXT);
        actionDetails.setDbConnectionId(dbConnectionId);
        actionDetails.setSelect(select);
        actionDetails.setResultTemplate(resultTemplate);

        BotCommandDetails details = new BotCommandDetails();
        details.setId(id);
        details.setCmd(cmd);
        details.setName(name);
        details.setBotIds(botIds);
        details.setState(state);
        details.setActionDetails(actionDetails);

        BotCommand command = new BotCommand(details, repository);
        when(factory.getAll()).thenReturn(Collections.singletonList(command));


        BotCommandDTO apiDTO = service.list().get(0);
        assertEquals(id, apiDTO.getId());
        assertEquals(name, apiDTO.getName());
        assertEquals(cmd, apiDTO.getCmd());
        assertEquals(state.name(), apiDTO.getState());
        assertEquals(botIds.get(0), apiDTO.getBotIds().stream().findFirst().get());

        SqlSelectAsTextActionDTO actionRequest = (SqlSelectAsTextActionDTO) apiDTO.getAction();
        assertEquals(type.name(), actionRequest.getType());
        assertEquals(dbConnectionId, actionRequest.getDbConnectionId());
        assertEquals(select, actionRequest.getSelect());
        assertEquals(resultTemplate, actionRequest.getResultTemplate());

    }



    @Test
    public void deleteBotCommand() {
        BotCommand command = Mockito.mock(BotCommand.class);
        when(factory.byId(eq(id)))
                .thenReturn(command);

        service.delete(id);
        verify(command, timeout(1)).delete();
    }

    @Test
    public void getTypes() {
        List<BotCommandTypeDTO> types = service.types();
        assertEquals(1, types.size());
        assertEquals(ActionType.SQL_SELECT_AS_TEXT.name(), types.get(0).getType());
        assertEquals(ActionType.SQL_SELECT_AS_TEXT.getLabel(), types.get(0).getLabel());
    }
}