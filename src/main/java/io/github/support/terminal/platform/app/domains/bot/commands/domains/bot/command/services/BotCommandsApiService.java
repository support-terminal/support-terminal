package io.github.support.terminal.platform.app.domains.bot.commands.domains.bot.command.services;


import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.support.terminal.platform.app.domains.bot.commands.domains.bot.command.dto.BotCommandDTO;
import io.github.support.terminal.platform.app.domains.bot.commands.domains.bot.command.entities.BotCommand;
import io.github.support.terminal.platform.app.domains.bot.commands.domains.bot.command.requests.BotCommandRequest;
import io.github.support.terminal.platform.app.domains.bot.commands.domains.bot.command.values.CommandStates;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class BotCommandsApiService {

    private final BotCommandsService commandsService;
    private final ObjectMapper objectMapper;

    public BotCommandDTO add(BotCommandRequest addCommandRequest) {
        BotCommand command = objectMapper.convertValue(addCommandRequest, BotCommand.class);
        command.setId(UUID.randomUUID().toString());
        command.setState(CommandStates.ENABLED);
        return getCommandDTO(commandsService.add(command));
    }

    public Collection<BotCommandDTO> getList() {
        return commandsService.getAll()
                .stream().map(c -> getCommandDTO(c))
                .collect(Collectors.toList());
    }


    public Collection<BotCommandDTO> getEnabledByBotId(String botId) {
        return commandsService.getEnabledByBotId(botId)
                .stream().map(c -> getCommandDTO(c))
                .collect(Collectors.toList());
    }

    public BotCommandDTO getById(String id) {
        BotCommand command = commandsService.getById(id);
        return getCommandDTO(command);
    }

    public BotCommandDTO update(String id, BotCommandRequest request) throws Exception {
        if(commandsService.getById(id) == null){
            throw new Exception("Command not found");
        }
        BotCommand command = objectMapper.convertValue(request, BotCommand.class);
        command.setId(id);
        return getCommandDTO(commandsService.update(command));
    }

    public void delete(String id) {
        commandsService.delete(id);
    }

    private BotCommandDTO getCommandDTO(BotCommand command) {
        BotCommandDTO dto = objectMapper.convertValue(command, BotCommandDTO.class);
        return dto;
    }

}
