package io.github.bot.terminal.application.domains.bot_commands.rest;


import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApiDetails;
import io.github.bot.terminal.application.domains.notificarion_api.entity.SlackNotificationApiDetails;
import io.github.bot.terminal.application.domains.notificarion_api.entity.TelegramNotificationApiDetails;
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.NotificationApiDTO;
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.SlackNotificationApiDTO;
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.TelegramNotificationApiDTO;
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.NotificationApiRequest;
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.SlackNotificationApiRequest;
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.TelegramNotificationApiRequest;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiState;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class BotCommandsRestConverter {


    NotificationApiDetails mapToDetails(NotificationApiRequest request) {
        if (NotificationApiType.SLACK_BOT.name().equals(request.getType())) {
            return mapToDetails((SlackNotificationApiRequest) request);
        } else if (NotificationApiType.TELEGRAM_BOT.name().equals(request.getType())) {
            return mapToDetails((TelegramNotificationApiRequest) request);
        }
        throw new IllegalArgumentException("Unknown notification api type");
    }

    SlackNotificationApiDetails mapToDetails(SlackNotificationApiRequest request) {
        SlackNotificationApiDetails details = new SlackNotificationApiDetails();
        details.setToken(request.getToken());
        details.setLabel(request.getLabel());
        details.setType(NotificationApiType.SLACK_BOT);
        details.setState(NotificationApiState.valueOf(request.getState()));
        details.setChanel(request.getChanel());
        return details;
    }

    TelegramNotificationApiDetails mapToDetails(TelegramNotificationApiRequest request) {
        TelegramNotificationApiDetails details = new TelegramNotificationApiDetails();
        details.setToken(request.getToken());
        details.setLabel(request.getLabel());
        details.setType(NotificationApiType.TELEGRAM_BOT);
        details.setState(NotificationApiState.valueOf(request.getState()));
        details.setBotFatherName(request.getBotFatherName());
        return details;
    }


    NotificationApiDTO mapToDto(NotificationApiDetails details) {
        if (NotificationApiType.SLACK_BOT.equals(details.getType())) {
            return mapToDto((SlackNotificationApiDetails) details);
        } else if (NotificationApiType.TELEGRAM_BOT.equals(details.getType())) {
            return mapToDto((TelegramNotificationApiDetails) details);
        }
        throw new IllegalArgumentException("Unknown notification api type");
    }

    SlackNotificationApiDTO mapToDto(SlackNotificationApiDetails details) {
        SlackNotificationApiDTO dto = new SlackNotificationApiDTO();
        dto.setId(details.getId());
        dto.setToken(details.getToken());
        dto.setLabel(details.getLabel());
        dto.setType(details.getType().name());
        dto.setState(details.getState().name());
        dto.setChanel(details.getChanel());
        return dto;
    }

    TelegramNotificationApiDTO mapToDto(TelegramNotificationApiDetails details) {
        TelegramNotificationApiDTO dto = new TelegramNotificationApiDTO();
        dto.setId(details.getId());
        dto.setToken(details.getToken());
        dto.setLabel(details.getLabel());
        dto.setType(details.getType().name());
        dto.setState(details.getState().name());
        dto.setBotFatherName(details.getBotFatherName());
        return dto;
    }

}
