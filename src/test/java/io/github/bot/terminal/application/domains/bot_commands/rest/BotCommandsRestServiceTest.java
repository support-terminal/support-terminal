package io.github.bot.terminal.application.domains.bot_commands.rest;

import io.github.bot.terminal.application.domains.bot_commands.BotCommandsTestHelper;
import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandDetails;
import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandRepository;
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandDTO;
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandTypeDTO;
import io.github.bot.terminal.application.domains.bot_commands.rest.requests.BotCommandRequest;
import io.github.bot.terminal.application.domains.common.action.ActionRestConverter;
import io.github.bot.terminal.application.domains.common.action.dto.SqlSelectAsTextActionDTO;
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsTextActionDetails;
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
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class BotCommandsRestServiceTest extends BotCommandsTestHelper {

    private ActionRestConverter actionConverter = new ActionRestConverter();
    private BotCommandsRestConverter converter = spy(new BotCommandsRestConverter(actionConverter));
    @Mock
    private BotCommandRepository repository;
    private BotCommandsRestService service;

    @Captor
    ArgumentCaptor<BotCommandDetails> botCommandDetailsCaptor;


    @BeforeEach
    public void inti() {
        service = new BotCommandsRestService(repository, converter);
    }

    @Test
    public void addSqlSelectAsTextBotCommand() {

        BotCommandRequest request = getSqlAsSelectBotCommandRequest1();
        doAnswer(invocation ->
                ((BotCommandDetails) invocation.getArgument(0)).setId(id)
        ).when(repository).add(any());

        BotCommandDTO apiDTO = service.add(request);
        assertNotNull(id, apiDTO.getId());
        assertEquals(name, apiDTO.getName());
        assertEquals(cmd, apiDTO.getCmd());
        assertEquals(state.name(), apiDTO.getState());
        assertEquals(botIds.get(0), apiDTO.getBotIds().stream().findFirst().get());

        SqlSelectAsTextActionDTO actionDTO = (SqlSelectAsTextActionDTO) apiDTO.getAction();
        assertEquals(type.name(), actionDTO.getType());
        assertEquals(dbConnectionId, actionDTO.getDbConnectionId());
        assertEquals(select, actionDTO.getSelect());
        assertEquals(resultTemplate, actionDTO.getResultTemplate());

        verify(repository, times(1)).add(botCommandDetailsCaptor.capture());
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

        when(repository.findById(eq(id)))
                .thenReturn(Optional.of(getSqlAsSelectBotCommandDetails1()));

        BotCommandRequest request = getSqlAsSelectBotCommandRequest2();

        BotCommandDTO apiDTO = service.edit(id, request);
        assertEquals(id, apiDTO.getId());
        assertEquals(name2, apiDTO.getName());
        assertEquals(cmd2, apiDTO.getCmd());
        assertEquals(state2.name(), apiDTO.getState());
        assertEquals(botIds2.get(0), apiDTO.getBotIds().stream().findFirst().get());

        SqlSelectAsTextActionDTO actionDTO = (SqlSelectAsTextActionDTO) apiDTO.getAction();
        assertEquals(type.name(), actionDTO.getType());
        assertEquals(dbConnectionId2, actionDTO.getDbConnectionId());
        assertEquals(select2, actionDTO.getSelect());
        assertEquals(resultTemplate2, actionDTO.getResultTemplate());

        verify(repository, times(1)).update(botCommandDetailsCaptor.capture());
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

        when(repository.findById(eq(id)))
                .thenReturn(Optional.of(getSqlAsSelectBotCommandDetails1()));

        BotCommandDTO apiDTO = service.get(id);
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
    void getAll() {
        when(repository.findAll())
                .thenReturn(Collections.singletonList(getSqlAsSelectBotCommandDetails1()));

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
        service.delete(id);
        verify(repository, times(1)).deleteById(eq(id));
    }

    @Test
    public void getTypes() {
        List<BotCommandTypeDTO> types = service.types();
        assertEquals(1, types.size());
        assertEquals(ActionType.SQL_SELECT_AS_TEXT.name(), types.get(0).getType());
        assertEquals(ActionType.SQL_SELECT_AS_TEXT.getLabel(), types.get(0).getLabel());
    }
}