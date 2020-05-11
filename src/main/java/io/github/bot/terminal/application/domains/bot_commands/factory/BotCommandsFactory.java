package io.github.bot.terminal.application.domains.bot_commands.factory;


import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommand;
import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommandDetails;
import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandRepository;
import io.github.bot.terminal.application.domains.common.action.entity.Action;
import io.github.bot.terminal.application.domains.common.action.factory.ActionsFactory;
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi;
import io.github.bot.terminal.application.domains.notificarion_api.factory.NotificationApiFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BotCommandsFactory {

    private final BotCommandRepository repository;
    private final ActionsFactory actionsFactory;
    private final NotificationApiFactory notificationApiFactory;

    public BotCommand createNew(BotCommandDetails details) {
        details.setId(UUID.randomUUID().toString());
        repository.add(details);
        return build(details);
    }

    public BotCommand byId(String id) {
        BotCommandDetails details = getById(id);
        return build(details);
    }

    public BotCommand merge(String id, BotCommandDetails detailsUpdate) {
        BotCommandDetails details = getById(id);
        detailsUpdate.setId(details.getId());
        repository.update(detailsUpdate);
        return build(detailsUpdate);
    }

    private BotCommandDetails getById(String id) {
        return repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Bot command not found: id=" + id));
    }

    public BotCommand build(BotCommandDetails details) {
        List<NotificationApi> notificationApis = details.getBotIds().stream()
                .map(n -> notificationApiFactory.byId(n))
                .collect(Collectors.toList());
        Action action = actionsFactory.build(details.getActionDetails());
        return new BotCommand(details, repository, action, notificationApis);
    }

    public List<BotCommand> getAll() {
        return repository
                .findAll().stream()
                .map(this::build).collect(Collectors.toList());
    }
}
