package io.github.bot.terminal.application.domains.bot_commands.factory;

import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommandDetails;
import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandRepository;
import io.github.bot.terminal.application.domains.bot_commands.values.BotCommandState;
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
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class BotCommandsFactoryTest {

    @Mock
    private BotCommandRepository repository;

    private BotCommandsFactory factory;

    @Captor
    ArgumentCaptor<BotCommandDetails> botCommandDetailsCaptor;

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
    void init() {
        factory = new BotCommandsFactory(repository);
    }


    @Test
    void createPostgresDbConnection() {

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

        BotCommandDetails createdDetails = factory.createNew(details).getDetails();

        assertEquals(name, createdDetails.getName());
        assertEquals(cmd, createdDetails.getCmd());
        assertEquals(state, createdDetails.getState());
        assertEquals(botIds.get(0), createdDetails.getBotIds().stream().findFirst().get());
        assertEquals(name, createdDetails.getName());

        SqlSelectAsTextActionDetails actionDetailsCreated = (SqlSelectAsTextActionDetails) createdDetails.getActionDetails();
        assertEquals(ActionType.SQL_SELECT_AS_TEXT, actionDetailsCreated.getType());
        assertEquals(dbConnectionId, actionDetailsCreated.getDbConnectionId());
        assertEquals(select, actionDetailsCreated.getSelect());
        assertEquals(resultTemplate, actionDetailsCreated.getResultTemplate());

        verify(repository, times(1)).add(botCommandDetailsCaptor.capture());
        BotCommandDetails passedDetails = botCommandDetailsCaptor.getValue();
        assertNotNull(passedDetails.getId());


        assertEquals(name, passedDetails.getName());
        assertEquals(cmd, passedDetails.getCmd());
        assertEquals(state, passedDetails.getState());
        assertEquals(botIds.get(0), passedDetails.getBotIds().stream().findFirst().get());
        assertEquals(name, passedDetails.getName());

        SqlSelectAsTextActionDetails actionDetailsPassed = (SqlSelectAsTextActionDetails) passedDetails.getActionDetails();
        assertEquals(ActionType.SQL_SELECT_AS_TEXT, actionDetailsPassed.getType());
        assertEquals(dbConnectionId, actionDetailsPassed.getDbConnectionId());
        assertEquals(select, actionDetailsPassed.getSelect());
        assertEquals(resultTemplate, actionDetailsPassed.getResultTemplate());


    }



    @Test
    void mergeSqlSelectAsTextBotCommand() {

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

        when(repository.findById(eq(id))).thenReturn(Optional.of(details));

        SqlSelectAsTextActionDetails actionDetailsUpdate = new SqlSelectAsTextActionDetails();
        actionDetailsUpdate.setType(ActionType.SQL_SELECT_AS_TEXT);
        actionDetailsUpdate.setDbConnectionId(dbConnectionId2);
        actionDetailsUpdate.setSelect(select2);
        actionDetailsUpdate.setResultTemplate(resultTemplate2);

        BotCommandDetails detailsUpdate = new BotCommandDetails();
        detailsUpdate.setId(id);
        detailsUpdate.setCmd(cmd2);
        detailsUpdate.setName(name2);
        detailsUpdate.setBotIds(botIds2);
        detailsUpdate.setState(state2);
        detailsUpdate.setActionDetails(actionDetailsUpdate);

        BotCommandDetails commandDetails =  factory.merge(id, detailsUpdate).getDetails();
        assertEquals(id, commandDetails.getId());
        assertEquals(name2, commandDetails.getName());
        assertEquals(cmd2, commandDetails.getCmd());
        assertEquals(state2, commandDetails.getState());
        assertEquals(botIds2.get(0), commandDetails.getBotIds().stream().findFirst().get());
        assertEquals(name2, commandDetails.getName());

        SqlSelectAsTextActionDetails actionDetailsCreated = (SqlSelectAsTextActionDetails) commandDetails.getActionDetails();
        assertEquals(ActionType.SQL_SELECT_AS_TEXT, actionDetailsCreated.getType());
        assertEquals(dbConnectionId2, actionDetailsCreated.getDbConnectionId());
        assertEquals(select2, actionDetailsCreated.getSelect());
        assertEquals(resultTemplate2, actionDetailsCreated.getResultTemplate());


        verify(repository, times(1)).update(botCommandDetailsCaptor.capture());
        BotCommandDetails passedDetails = botCommandDetailsCaptor.getValue();
        assertEquals(id, passedDetails.getId());
        assertEquals(name2, passedDetails.getName());
        assertEquals(cmd2, passedDetails.getCmd());
        assertEquals(state2, passedDetails.getState());
        assertEquals(botIds2.get(0), passedDetails.getBotIds().stream().findFirst().get());
        assertEquals(name2, passedDetails.getName());

        SqlSelectAsTextActionDetails actionDetailsPassed = (SqlSelectAsTextActionDetails) passedDetails.getActionDetails();
        assertEquals(ActionType.SQL_SELECT_AS_TEXT, actionDetailsPassed.getType());
        assertEquals(dbConnectionId2, actionDetailsPassed.getDbConnectionId());
        assertEquals(select2, actionDetailsPassed.getSelect());
        assertEquals(resultTemplate2, actionDetailsPassed.getResultTemplate());

    }

    @Test
    void byIdBotCommand() {

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

        when(repository.findById(eq(id))).thenReturn(Optional.of(details));


        SqlSelectAsTextActionDetails actionDetails2 = new SqlSelectAsTextActionDetails();
        actionDetails2.setType(ActionType.SQL_SELECT_AS_TEXT);
        actionDetails2.setDbConnectionId(dbConnectionId2);
        actionDetails2.setSelect(select2);
        actionDetails2.setResultTemplate(resultTemplate2);

        BotCommandDetails details2 = new BotCommandDetails();
        details2.setId(id2);
        details2.setCmd(cmd2);
        details2.setName(name2);
        details2.setBotIds(botIds2);
        details2.setState(state2);
        details2.setActionDetails(actionDetails2);

        when(repository.findById(eq(id2))).thenReturn(Optional.of(details2));

        BotCommandDetails byId = factory.byId(id2).getDetails();

        assertEquals(id2, byId.getId());
        assertEquals(name2, byId.getName());
        assertEquals(cmd2, byId.getCmd());
        assertEquals(state2, byId.getState());
        assertEquals(botIds2.get(0), byId.getBotIds().stream().findFirst().get());
        assertEquals(name2, byId.getName());

        SqlSelectAsTextActionDetails actionDetailsCreated = (SqlSelectAsTextActionDetails) byId.getActionDetails();
        assertEquals(ActionType.SQL_SELECT_AS_TEXT, actionDetailsCreated.getType());
        assertEquals(dbConnectionId2, actionDetailsCreated.getDbConnectionId());
        assertEquals(select2, actionDetailsCreated.getSelect());
        assertEquals(resultTemplate2, actionDetailsCreated.getResultTemplate());

        BotCommandDetails byId2 = factory.byId(id).getDetails();

        assertEquals(id, byId2.getId());
        assertEquals(name, byId2.getName());
        assertEquals(cmd, byId2.getCmd());
        assertEquals(state, byId2.getState());
        assertEquals(botIds.get(0), byId2.getBotIds().stream().findFirst().get());
        assertEquals(name, byId2.getName());

        SqlSelectAsTextActionDetails actionDetailsCreated2 = (SqlSelectAsTextActionDetails) byId2.getActionDetails();
        assertEquals(ActionType.SQL_SELECT_AS_TEXT, actionDetailsCreated2.getType());
        assertEquals(dbConnectionId, actionDetailsCreated2.getDbConnectionId());
        assertEquals(select, actionDetailsCreated2.getSelect());
        assertEquals(resultTemplate, actionDetailsCreated2.getResultTemplate());

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

        when(repository.findAll()).thenReturn(Collections.singletonList(details));

        BotCommandDetails botCommandDetails = factory.getAll().get(0).getDetails();

        assertEquals(id, botCommandDetails.getId());
        assertEquals(name, botCommandDetails.getName());
        assertEquals(cmd, botCommandDetails.getCmd());
        assertEquals(state, botCommandDetails.getState());
        assertEquals(botIds.get(0), botCommandDetails.getBotIds().stream().findFirst().get());
        assertEquals(name, botCommandDetails.getName());

        SqlSelectAsTextActionDetails actionDetailsCreated = (SqlSelectAsTextActionDetails) botCommandDetails.getActionDetails();
        assertEquals(ActionType.SQL_SELECT_AS_TEXT, actionDetailsCreated.getType());
        assertEquals(dbConnectionId, actionDetailsCreated.getDbConnectionId());
        assertEquals(select, actionDetailsCreated.getSelect());
        assertEquals(resultTemplate, actionDetailsCreated.getResultTemplate());

    }



    @Test
    void byIdNotFound() {
        when(repository.findById(eq(id))).thenReturn(Optional.empty());
        assertThrows(IllegalArgumentException.class, () -> {
            factory.byId(id);
        });
    }


}