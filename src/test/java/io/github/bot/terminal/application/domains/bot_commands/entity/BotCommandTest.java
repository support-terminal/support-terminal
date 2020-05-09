package io.github.bot.terminal.application.domains.bot_commands.entity;

import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandRepository;
import io.github.bot.terminal.application.domains.bot_commands.values.BotCommandState;
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsTextActionDetails;
import io.github.bot.terminal.application.domains.common.action.values.ActionType;
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi;
import io.github.bot.terminal.application.domains.notificarion_api.entity.SlackNotificationApi;
import io.github.bot.terminal.application.domains.notificarion_api.entity.SlackNotificationApiDetails;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collections;
import java.util.List;
import java.util.UUID;

import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class BotCommandTest {


    @Mock
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

    @Test
    public void delete() {

        BotCommandDetails details = new BotCommandDetails();
        details.setId(id);
        details.setCmd(cmd);
        details.setName(name);
        details.setBotIds(botIds);
        details.setState(state);

        BotCommand command = new BotCommand(details, repository);

        command.delete();
        verify(repository, times(1)).deleteById(eq(id));

    }

}