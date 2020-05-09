package io.github.bot.terminal.application.domains.bot_commands.factory;

import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommand;
import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommandDetails;
import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandRepository;
import io.github.bot.terminal.application.domains.bot_commands.values.BotCommandState;
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsTextActionDetails;
import io.github.bot.terminal.application.domains.common.action.values.ActionType;
import io.github.bot.terminal.application.domains.db_connection.entity.MySqlDbConnectionDetails;
import io.github.bot.terminal.application.domains.db_connection.entity.OracleDbConnectionDetails;
import io.github.bot.terminal.application.domains.db_connection.entity.PostgresDbConnection;
import io.github.bot.terminal.application.domains.db_connection.entity.PostgresDbConnectionDetails;
import io.github.bot.terminal.application.domains.db_connection.factory.DbConnectionsFactory;
import io.github.bot.terminal.application.domains.db_connection.repository.DbConnectionRepository;
import io.github.bot.terminal.application.domains.db_connection.values.DbConnectionType;
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

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class BotCommandsFactoryTest {

    @Mock
    private BotCommandRepository repository;

    private BotCommandsFactory factory;

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
        assertEquals(BotCommandState.valueOf(state), createdDetails.getState());
        assertEquals(botIds.get(0), createdDetails.getBotIds().stream().findFirst().get());
        assertEquals(name, createdDetails.getName());

        SqlSelectAsTextActionDetails actionDetailsCreated = (SqlSelectAsTextActionDetails) createdDetails.getActionDetails();
        assertEquals(ActionType.valueOf(type), actionDetailsCreated.getType());
        assertEquals(dbConnectionId, actionDetailsCreated.getDbConnectionId());
        assertEquals(select, actionDetailsCreated.getSelect());
        assertEquals(resultTemplate, actionDetailsCreated.getResultTemplate());

        verify(repository, times(1)).add(botCommandDetailsCaptor.capture());
        BotCommandDetails passedDetails = botCommandDetailsCaptor.getValue();
        assertNotNull(passedDetails.getId());


        assertEquals(name, passedDetails.getName());
        assertEquals(cmd, passedDetails.getCmd());
        assertEquals(BotCommandState.valueOf(state), passedDetails.getState());
        assertEquals(botIds.get(0), passedDetails.getBotIds().stream().findFirst().get());
        assertEquals(name, passedDetails.getName());

        SqlSelectAsTextActionDetails actionDetailsPassed = (SqlSelectAsTextActionDetails) passedDetails.getActionDetails();
        assertEquals(ActionType.valueOf(type), actionDetailsPassed.getType());
        assertEquals(dbConnectionId, actionDetailsPassed.getDbConnectionId());
        assertEquals(select, actionDetailsPassed.getSelect());
        assertEquals(resultTemplate, actionDetailsPassed.getResultTemplate());


    }


}