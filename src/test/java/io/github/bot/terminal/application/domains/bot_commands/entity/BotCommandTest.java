package io.github.bot.terminal.application.domains.bot_commands.entity;

import io.github.bot.terminal.application.domains.common.action.entity.Action;
import io.github.bot.terminal.application.domains.common.action.entity.ActionResult;
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class BotCommandTest {

    @Test
    public void process() {
        NotificationApi<?> notificationApi = Mockito.mock(NotificationApi.class);
        Action action = Mockito.mock(Action.class);
        ActionResult actionResult = Mockito.mock(ActionResult.class);
        when(action.execute()).thenReturn(actionResult);
        Cmd cmd = Mockito.mock(Cmd.class);
        BotCommand command = new BotCommand(action, cmd, true);
        command.process(notificationApi);
        verify(action, times(1)).execute();
        verify(actionResult, times(1)).notify(eq(notificationApi));
    }

    @Test
    public void isDisabled() {
        NotificationApi<?> notificationApi = Mockito.mock(NotificationApi.class);
        Action action = Mockito.mock(Action.class);
        Cmd cmd = Mockito.mock(Cmd.class);
        BotCommand command = new BotCommand(action, cmd, false);
        command.process(notificationApi);
        verify(action, times(0)).execute();
    }

}