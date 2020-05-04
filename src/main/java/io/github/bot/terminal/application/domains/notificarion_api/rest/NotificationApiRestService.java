package io.github.bot.terminal.application.domains.notificarion_api.rest;


import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi;
import io.github.bot.terminal.application.domains.notificarion_api.factory.NotificationApiFactory;
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.AbstractNotificationApiDTO;
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.NotificationApiTypeDTO;
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.NotificationApiRequest;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class NotificationApiRestService {

    private final NotificationApiFactory notificationApiFactory;
    private final NotificationApiRestConverter converter;

    public AbstractNotificationApiDTO add(NotificationApiRequest notificationApiRequest) {
        NotificationApi notificationApi = notificationApiFactory.createNew(
                converter.mapToDetails(notificationApiRequest)
        );
        return converter.mapToDto(notificationApi.getDetails());
    }

    public List<AbstractNotificationApiDTO> list() {
       return notificationApiFactory.getAll()
                .stream().map(api -> converter.mapToDto(api.getDetails()))
                .collect(Collectors.toList());
    }

    public List<NotificationApiTypeDTO> types() {
       return Arrays.stream(NotificationApiType.values())
                .map(e -> new NotificationApiTypeDTO().setType(e.name()).setLabel(e.getLabel()))
                .collect(Collectors.toList());
    }


}
