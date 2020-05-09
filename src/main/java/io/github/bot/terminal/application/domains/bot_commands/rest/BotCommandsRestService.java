package io.github.bot.terminal.application.domains.bot_commands.rest;


import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommand;
import io.github.bot.terminal.application.domains.bot_commands.factory.BotCommandsFactory;
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandDTO;
import io.github.bot.terminal.application.domains.bot_commands.rest.requests.BotCommandRequest;
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


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
/*
    public BotCommandDTO edit(String id, NotificationApiRequest request) {
        NotificationApi notificationApi
                = factory.merge(id, converter.mapToDetails(request));
        return converter.mapToDto(notificationApi.getDetails());
    }

    public BotCommandDTO get(String id) {
        NotificationApi notificationApi
                = factory.byId(id);
        return converter.mapToDto(notificationApi.getDetails());
    }

    public Collection<BotCommandDTO> list() {
        return factory.getAll()
                .stream().map(api -> converter.mapToDto(api.getDetails()))
                .collect(Collectors.toList());
    }

    public List<BotCommandTypeDTO> types() {
        return Arrays.stream(BotCommandType.values())
                .map(e -> new BotCommandTypeDTO().setType(e.name()).setLabel(e.getLabel()))
                .collect(Collectors.toList());
    }

    public void delete(String id) {
        NotificationApi notificationApi
                = factory.byId(id);
        notificationApi.delete();
    }*/
}
