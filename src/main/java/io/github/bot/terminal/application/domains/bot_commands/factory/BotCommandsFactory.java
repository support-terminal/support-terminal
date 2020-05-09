package io.github.bot.terminal.application.domains.bot_commands.factory;


import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommand;
import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommandDetails;
import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BotCommandsFactory {

    private final BotCommandRepository repository;

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
        return new BotCommand(details, repository);
    }

    public List<BotCommand> getAll() {
        return repository.findAll().stream()
                .map(this::build).collect(Collectors.toList());
    }
}
