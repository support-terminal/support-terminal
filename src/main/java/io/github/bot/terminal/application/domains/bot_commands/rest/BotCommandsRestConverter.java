package io.github.bot.terminal.application.domains.bot_commands.rest;


import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommandDetails;
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandDTO;
import io.github.bot.terminal.application.domains.bot_commands.rest.requests.BotCommandRequest;
import io.github.bot.terminal.application.domains.bot_commands.values.BotCommandState;
import io.github.bot.terminal.application.domains.common.action.ActionRestConverter;
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApiDetails;
import io.github.bot.terminal.application.domains.notificarion_api.entity.SlackNotificationApiDetails;
import io.github.bot.terminal.application.domains.notificarion_api.entity.TelegramNotificationApiDetails;
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.NotificationApiDTO;
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.SlackNotificationApiDTO;
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.TelegramNotificationApiDTO;
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.SlackNotificationApiRequest;
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.TelegramNotificationApiRequest;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiState;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType;
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
        details.setState(BotCommandState.valueOf(request.getState()));
        details.setBotIds(request.getBotIds());
        details.setActionDetails(actionRestConverter.mapToDetails(request.getAction()));
        return details;
    }


    BotCommandDTO mapToDto(BotCommandDetails details) {
        BotCommandDTO dto = new BotCommandDTO();
        dto.setId(details.getId());
        dto.setName(details.getName());
        dto.setCmd(details.getCmd());
        dto.setState(details.getState().name());
        dto.setBotIds(details.getBotIds());
        dto.setAction(actionRestConverter.mapToDto(details.getActionDetails()));
        return dto;
    }

}
