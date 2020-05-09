package io.github.bot.terminal.application.domains.bot_commands.rest;

import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommand;
import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommandDetails;
import io.github.bot.terminal.application.domains.bot_commands.factory.BotCommandsFactory;
import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandRepository;
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandDTO;
import io.github.bot.terminal.application.domains.bot_commands.rest.requests.BotCommandRequest;
import io.github.bot.terminal.application.domains.bot_commands.values.BotCommandState;
import io.github.bot.terminal.application.domains.common.action.ActionRestConverter;
import io.github.bot.terminal.application.domains.common.action.dto.SqlSelectAsTextActionDTO;
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsTextActionDetails;
import io.github.bot.terminal.application.domains.common.action.requests.SqlSelectAsTextActionRequest;
import io.github.bot.terminal.application.domains.common.action.values.ActionType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.Mock;
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

    private String type = ActionType.SQL_SELECT_AS_TEXT.name();
    private String select = UUID.randomUUID().toString();
    private String dbConnectionId = UUID.randomUUID().toString();
    private String resultTemplate = UUID.randomUUID().toString();
    private String id = UUID.randomUUID().toString();
    private String name = UUID.randomUUID().toString();
    private String cmd = UUID.randomUUID().toString();
    private List<String> botIds = Collections.singletonList(UUID.randomUUID().toString());
    private String state = BotCommandState.ENABLED.name();


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
        request.setState(state);
        request.setAction(action);

        BotCommandDTO apiDTO = service.add(request);
        assertEquals(name, apiDTO.getName());
        assertEquals(cmd, apiDTO.getCmd());
        assertEquals(state, apiDTO.getState());
        assertEquals(botIds.get(0), apiDTO.getBotIds().stream().findFirst().get());
        assertEquals(name, apiDTO.getName());

        SqlSelectAsTextActionDTO actionRequest = (SqlSelectAsTextActionDTO) apiDTO.getAction();
        assertEquals(type, actionRequest.getType());
        assertEquals(dbConnectionId, actionRequest.getDbConnectionId());
        assertEquals(select, actionRequest.getSelect());
        assertEquals(resultTemplate, actionRequest.getResultTemplate());

        verify(factory, times(1)).createNew(botCommandDetailsCaptor.capture());
        BotCommandDetails convertedDetails = botCommandDetailsCaptor.getValue();
        assertEquals(name, convertedDetails.getName());
        assertEquals(cmd, convertedDetails.getCmd());
        assertEquals(BotCommandState.valueOf(state), convertedDetails.getState());
        assertEquals(botIds.get(0), convertedDetails.getBotIds().stream().findFirst().get());
        assertEquals(name, convertedDetails.getName());

        SqlSelectAsTextActionDetails actionDetailsConverted = (SqlSelectAsTextActionDetails) convertedDetails.getActionDetails();
        assertEquals(ActionType.valueOf(type), actionDetailsConverted.getType());
        assertEquals(dbConnectionId, actionDetailsConverted.getDbConnectionId());
        assertEquals(select, actionDetailsConverted.getSelect());
        assertEquals(resultTemplate, actionDetailsConverted.getResultTemplate());

    }

}