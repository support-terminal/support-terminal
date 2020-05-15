package io.github.bot.terminal.application.domains.bot_commands.repository;

import io.github.bot.terminal.application.domains.bot_commands.BotCommandsRepositoryTestConfig;
import io.github.bot.terminal.application.domains.bot_commands.BotCommandsTestHelper;
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
class BotCommandRepositoryTest extends BotCommandsTestHelper {

    @Autowired
    private BotCommandRepository repository;

    @AfterEach
    public void clean(){
        repository.findAll().stream().forEach(d -> repository.deleteById(d.getId()));
    }


    @Test
    public void addSqlAsSelectBotCommandDetails() {
        BotCommandDetails details = getSqlAsSelectBotCommandDetails1();
        repository.add(details);

        BotCommandDetails byId = repository.findById(details.getId()).get();
        assertEquals(details.getId(), byId.getId());
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
        BotCommandDetails details = getSqlAsSelectBotCommandDetails1();
        repository.add(details);

        BotCommandDetails details2 = getSqlAsSelectBotCommandDetails2();
        details2.setId(details.getId());
        repository.update(details2);

        BotCommandDetails byId = repository.findById(details2.getId()).get();

        assertEquals(details.getId(), byId.getId());
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

        BotCommandDetails details = getSqlAsSelectBotCommandDetails1();

        repository.add(details);

        assertTrue(repository.findById(details.getId()).isPresent());

        repository.deleteById(details.getId());

        assertFalse(repository.findById(details.getId()).isPresent());

    }


    @Test
    public void findAllBotCommandDetails() {
        BotCommandDetails details = getSqlAsSelectBotCommandDetails1();
        details.setId(null);
        repository.add(details);

        BotCommandDetails botCommandDetails = repository.findAll().get(0);

        assertEquals(details.getId(), botCommandDetails.getId());
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