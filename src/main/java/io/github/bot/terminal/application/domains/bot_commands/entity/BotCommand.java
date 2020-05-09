package io.github.bot.terminal.application.domains.bot_commands.entity;

import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandRepository;
import io.github.bot.terminal.application.domains.common.Persistable;
import io.github.bot.terminal.application.domains.common.action.entity.Action;

public class BotCommand implements Persistable {

    private BotCommandRepository repository;
    private BotCommandDetails details;
    private Action action;

    public BotCommand(BotCommandDetails details,
                      BotCommandRepository repository) {
        this.details = details;
        this.repository = repository;
    }

    public BotCommandDetails getDetails() {
        return details;
    }

    @Override
    public void delete() {
        repository.deleteById(details.getId());
    }
}
