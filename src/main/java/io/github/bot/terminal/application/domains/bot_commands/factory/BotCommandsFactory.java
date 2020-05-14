package io.github.bot.terminal.application.domains.bot_commands.factory;


import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommand;
import io.github.bot.terminal.application.domains.bot_commands.entity.Cmd;
import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandDetails;
import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandRepository;
import io.github.bot.terminal.application.domains.bot_commands.values.BotCommandState;
import io.github.bot.terminal.application.domains.common.action.entity.Action;
import io.github.bot.terminal.application.domains.common.action.factory.ActionsFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BotCommandsFactory {

    private final BotCommandRepository repository;
    private final ActionsFactory actionsFactory;

    public BotCommand build(BotCommandDetails details) {
        Action action = actionsFactory.build(details.getActionDetails());
        Cmd cmd = new Cmd(details.getCmd());
        boolean isEnabled = BotCommandState.ENABLED.equals(details.getState());
        return new BotCommand(action, cmd, isEnabled);
    }

    public List<BotCommand> byNotificationApiId(String notificationApi) {
        return repository
                .findAll().stream().filter(d -> d.getBotIds().contains(notificationApi))
                .map(this::build).collect(Collectors.toList());
    }
}
