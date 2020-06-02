package io.github.bot.terminal.application.domains.bot_commands.rest;


import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandDetails;
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandDTO;
import io.github.bot.terminal.application.domains.bot_commands.rest.requests.BotCommandRequest;
import io.github.bot.terminal.application.domains.bot_commands.values.BotCommandState;
import io.github.bot.terminal.application.domains.common.action.ActionRestConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class BotCommandsRestConverter {

    private final ActionRestConverter actionRestConverter;

    BotCommandDetails mapToDetails(BotCommandRequest request) {
        BotCommandDetails details = new BotCommandDetails();
        details.setName(request.getName());
        details.setCmd(request.getCmd());
        details.setState(BotCommandState.resolve(request.isEnabled()));
        details.setBotIds(request.getBotIds());
        details.setActionDetails(actionRestConverter.mapToDetails(request.getAction()));
        return details;
    }


    BotCommandDTO mapToDto(BotCommandDetails details) {
        BotCommandDTO dto = new BotCommandDTO();
        dto.setId(details.getId());
        dto.setName(details.getName());
        dto.setCmd(details.getCmd());
        dto.setEnabled(details.getState().isEnabled());
        dto.setBotIds(details.getBotIds());
        dto.setAction(actionRestConverter.mapToDto(details.getActionDetails()));
        return dto;
    }

}
