package io.github.bot.terminal.application.domains.bot_commands.repository;

import io.github.bot.terminal.application.domains.bot_commands.BotCommandsRepositoryTestConfig;
import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommandDetails;
import io.github.bot.terminal.application.domains.bot_commands.factory.BotCommandsFactory;
import io.github.bot.terminal.application.domains.bot_commands.values.BotCommandState;
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsTextActionDetails;
import io.github.bot.terminal.application.domains.common.action.values.ActionType;
import io.github.bot.terminal.application.domains.db_connection.entity.PostgresDbConnectionDetails;
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Collections;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(SpringExtension.class)
@Import(BotCommandsRepositoryTestConfig.class)
class BotCommandRepositoryTest {

    @Autowired
    private BotCommandRepository repository;

    private String type = ActionType.SQL_SELECT_AS_TEXT.name();
    private String id = UUID.randomUUID().toString();
    private String select = UUID.randomUUID().toString();
    private String dbConnectionId = UUID.randomUUID().toString();
    private String resultTemplate = UUID.randomUUID().toString();
    private String name = UUID.randomUUID().toString();
    private String cmd = UUID.randomUUID().toString();
    private List<String> botIds = Collections.singletonList(UUID.randomUUID().toString());
    private String state = BotCommandState.ENABLED.name();


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
        details.setState(BotCommandState.ENABLED);
        details.setActionDetails(actionDetails);

        repository.add(details);

        BotCommandDetails byId = repository.findById(id).get();

        assertEquals(id, byId.getId());
        assertEquals(name, byId.getName());
        assertEquals(cmd, byId.getCmd());
        assertEquals(BotCommandState.valueOf(state), byId.getState());
        assertEquals(botIds.get(0), byId.getBotIds().stream().findFirst().get());
        assertEquals(name, byId.getName());

        SqlSelectAsTextActionDetails actionDetailsCreated = (SqlSelectAsTextActionDetails) byId.getActionDetails();
        assertEquals(ActionType.valueOf(type), actionDetailsCreated.getType());
        assertEquals(dbConnectionId, actionDetailsCreated.getDbConnectionId());
        assertEquals(select, actionDetailsCreated.getSelect());
        assertEquals(resultTemplate, actionDetailsCreated.getResultTemplate());


    }


}