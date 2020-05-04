package io.github.bot.terminal.application.domains.notificarion_api.rest;


import io.github.bot.terminal.application.domains.notificarion_api.entity.AbstractNotificationApiDetails;
import io.github.bot.terminal.application.domains.notificarion_api.entity.SlackNotificationApiDetails;
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.AbstractNotificationApiDTO;
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.SlackNotificationApiDTO;
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.NotificationApiRequest;
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.SlackNotificationApiRequest;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiState;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class NotificationApiRestConverter {


    AbstractNotificationApiDetails mapToDetails(NotificationApiRequest request) {
        if (NotificationApiType.SLACK_BOT.name().equals(request.getType())) {
            return mapToDetails((SlackNotificationApiRequest) request);
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


    AbstractNotificationApiDTO mapToDto(AbstractNotificationApiDetails details) {
        if (NotificationApiType.SLACK_BOT.equals(details.getType())) {
            return mapToDto((SlackNotificationApiDetails) details);
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

}
