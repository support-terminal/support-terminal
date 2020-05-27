package io.github.bot.terminal.application.domains.bot_commands.entity;

import io.github.bot.terminal.application.domains.common.action.entity.Action;
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi;

public class BotCommand {

    private final Action action;
    private final boolean isEnabled;
    private final Cmd cmd;

    public BotCommand(Action action,
                      Cmd cmd,
                      boolean isEnabled) {
        this.action = action;
        this.cmd = cmd;
        this.isEnabled = isEnabled;
    }

    public Cmd getCmd() {
        return cmd;
    }

    public void process(NotificationApi<?> notificationApi) {
        if (!isEnabled) {
            return;
        }
        action.execute().notify(notificationApi);
    }

}
