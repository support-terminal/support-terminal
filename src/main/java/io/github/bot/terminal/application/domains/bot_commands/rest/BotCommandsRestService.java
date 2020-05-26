package io.github.bot.terminal.application.domains.bot_commands.rest;


import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandDetails;
import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandRepository;
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandDTO;
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandTypeDTO;
import io.github.bot.terminal.application.domains.bot_commands.rest.requests.BotCommandRequest;
import io.github.bot.terminal.application.domains.common.action.values.ActionType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@Service
@RequiredArgsConstructor
public class BotCommandsRestService {

    private final BotCommandRepository repository;
    private final BotCommandsRestConverter converter;

    public BotCommandDTO add(BotCommandRequest request) {
        BotCommandDetails details = converter.mapToDetails(request);
        repository.add(details);
        return converter.mapToDto(details);
    }

    public BotCommandDTO edit(String id, BotCommandRequest request) {
        BotCommandDetails detailsUpdate = converter.mapToDetails(request);
        BotCommandDetails details = getById(id);
        detailsUpdate.setId(details.getId());
        repository.update(detailsUpdate);
        return converter.mapToDto(detailsUpdate);
    }

    public BotCommandDTO get(String id) {
        return converter.mapToDto(getById(id));
    }

    public List<BotCommandDTO> list() {
        return repository.findAll()
                .stream().map(converter::mapToDto)
                .collect(Collectors.toList());
    }

    public void delete(String id) {
        repository.deleteById(id);
    }

    public List<BotCommandTypeDTO> types() {
        return Stream.of(ActionType.SQL_SELECT_AS_TEXT)
                .map(t -> new BotCommandTypeDTO().setLabel(t.getLabel()).setType(t.name()))
                .collect(Collectors.toList());
    }

    private BotCommandDetails getById(String id) {
        return repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Bot command not found: id=" + id));
    }
}
