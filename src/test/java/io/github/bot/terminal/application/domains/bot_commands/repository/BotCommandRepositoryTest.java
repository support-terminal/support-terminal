package io.github.bot.terminal.application.domains.bot_commands.repository;

import io.github.bot.terminal.application.domains.bot_commands.BotCommandsRepositoryTestConfig;
import io.github.bot.terminal.application.domains.bot_commands.values.BotCommandState;
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsTextActionDetails;
import io.github.bot.terminal.application.domains.common.action.values.ActionType;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Collections;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@Import(BotCommandsRepositoryTestConfig.class)
class BotCommandRepositoryTest {

    @Autowired
    private BotCommandRepository repository;

    private ActionType type = ActionType.SQL_SELECT_AS_TEXT;
    private String id = UUID.randomUUID().toString();
    private String select = UUID.randomUUID().toString();
    private String dbConnectionId = UUID.randomUUID().toString();
    private String resultTemplate = UUID.randomUUID().toString();
    private String name = UUID.randomUUID().toString();
    private String cmd = UUID.randomUUID().toString();
    private List<String> botIds = Collections.singletonList(UUID.randomUUID().toString());
    private BotCommandState state = BotCommandState.ENABLED;

    private String id2 = UUID.randomUUID().toString();
    private String select2 = UUID.randomUUID().toString();
    private String dbConnectionId2 = UUID.randomUUID().toString();
    private String resultTemplate2 = UUID.randomUUID().toString();
    private String name2 = UUID.randomUUID().toString();
    private String cmd2 = UUID.randomUUID().toString();
    private List<String> botIds2 = Collections.singletonList(UUID.randomUUID().toString());
    private BotCommandState state2 = BotCommandState.DISABLED;


    @AfterEach
    public void clean(){
        repository.deleteById(id);
    }


    @Test
    public void addSqlAsSelectBotCommandDetails() {

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

        repository.add(details);

        BotCommandDetails byId = repository.findById(id).get();

        assertEquals(id, byId.getId());
        assertEquals(name, byId.getName());
        assertEquals(cmd, byId.getCmd());
        assertEquals(state, byId.getState());
        assertEquals(botIds.get(0), byId.getBotIds().stream().findFirst().get());
        assertEquals(name, byId.getName());

        SqlSelectAsTextActionDetails actionDetailsCreated = (SqlSelectAsTextActionDetails) byId.getActionDetails();
        assertEquals(ActionType.SQL_SELECT_AS_TEXT, actionDetailsCreated.getType());
        assertEquals(dbConnectionId, actionDetailsCreated.getDbConnectionId());
        assertEquals(select, actionDetailsCreated.getSelect());
        assertEquals(resultTemplate, actionDetailsCreated.getResultTemplate());


    }

    @Test
    public void editSqlAsSelectBotCommandDetails() {

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

        repository.add(details);

        SqlSelectAsTextActionDetails actionDetails2 = new SqlSelectAsTextActionDetails();
        actionDetails2.setType(ActionType.SQL_SELECT_AS_TEXT);
        actionDetails2.setDbConnectionId(dbConnectionId2);
        actionDetails2.setSelect(select2);
        actionDetails2.setResultTemplate(resultTemplate2);

        BotCommandDetails details2 = new BotCommandDetails();
        details2.setId(id);
        details2.setCmd(cmd2);
        details2.setName(name2);
        details2.setBotIds(botIds2);
        details2.setState(state2);
        details2.setActionDetails(actionDetails2);

        repository.update(details2);

        BotCommandDetails byId = repository.findById(id).get();

        assertEquals(id, byId.getId());
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

    }


    @Test
    public void deleteSqlAsSelectBotCommandDetails() {

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

        repository.add(details);

        assertTrue(repository.findById(id).isPresent());

        repository.deleteById(id);

        assertFalse(repository.findById(id).isPresent());

    }


    @Test
    public void findAllBotCommandDetails() {

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

        repository.add(details);


        BotCommandDetails botCommandDetails = repository.findAll().get(0);

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


}