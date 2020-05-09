package io.github.bot.terminal.application.domains.bot_commands.rest;


import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommand;
import io.github.bot.terminal.application.domains.bot_commands.factory.BotCommandsFactory;
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandDTO;
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandTypeDTO;
import io.github.bot.terminal.application.domains.bot_commands.rest.requests.BotCommandRequest;
import io.github.bot.terminal.application.domains.common.action.values.ActionType;
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@Service
@RequiredArgsConstructor
public class BotCommandsRestService {

    private final BotCommandsFactory factory;
    private final BotCommandsRestConverter converter;

    public BotCommandDTO add(BotCommandRequest request) {
        BotCommand command = factory.createNew(
                converter.mapToDetails(request)
        );
        return converter.mapToDto(command.getDetails());
    }

    public BotCommandDTO edit(String id, BotCommandRequest request) {
        BotCommand command
                = factory.merge(id, converter.mapToDetails(request));
        return converter.mapToDto(command.getDetails());
    }

    public BotCommandDTO get(String id) {
        BotCommand command
                = factory.byId(id);
        return converter.mapToDto(command.getDetails());
    }

    public List<BotCommandDTO> list() {
        return factory.getAll()
                .stream().map(c -> converter.mapToDto(c.getDetails()))
                .collect(Collectors.toList());
    }


    public void delete(String id) {
        BotCommand command
                = factory.byId(id);
        command.delete();
    }

    public List<BotCommandTypeDTO> types() {
        return Stream.of(ActionType.SQL_SELECT_AS_TEXT)
                .map(t -> new BotCommandTypeDTO().setLabel(t.getLabel()).setType(t.name()))
                .collect(Collectors.toList());
    }
}
