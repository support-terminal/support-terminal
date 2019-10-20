package io.github.support.terminal.application.domains.core.bots.services;


import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.support.terminal.application.domains.core.bots.entities.Bot;
import io.github.support.terminal.application.domains.core.bots.entities.JoinRequest;
import io.github.support.terminal.application.domains.core.bots.exceptions.BotNotFoundException;
import io.github.support.terminal.application.domains.core.bots.models.BotDTO;
import io.github.support.terminal.application.domains.core.bots.models.BotTypeDTO;
import io.github.support.terminal.application.domains.core.bots.models.JoinRequestDTO;
import io.github.support.terminal.application.domains.core.bots.requests.BotRequest;
import io.github.support.terminal.application.domains.core.bots.values.BotStates;
import io.github.support.terminal.application.domains.core.bots.values.BotType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

import static java.util.Optional.ofNullable;
import static java.util.stream.Collectors.groupingBy;

@Service
@Transactional
@RequiredArgsConstructor
public class BotsApiService {

    private final ObjectMapper objectMapper;
    private final BotsService botsService;
    private final JoinRequestsService joinRequestsService;


    public BotDTO add(BotRequest botRequest) {
        Bot bot = objectMapper.convertValue(botRequest, Bot.class);
        bot.setId(UUID.randomUUID().toString());
        bot.setState(BotStates.ENABLED);
        return objectMapper.convertValue(botsService.add(bot), BotDTO.class);
    }

    public Collection<BotDTO> getList() {

        Map<String, List<JoinRequest>> joinRequestsMap
                = joinRequestsService.getAll()
                .stream().collect(groupingBy(JoinRequest::getBotId));

        return botsService.getAll().stream()
                .map(t -> convert(t, joinRequestsMap.get(t.getId())))
                .collect(Collectors.toList());

    }

    public BotDTO getById(String id) throws Exception {
        Bot t = botsService.getById(id);
        if(t == null){
            throw new BotNotFoundException();
        }
        Collection<JoinRequest> joinRequests = joinRequestsService.getByTelegramBotId(id);
        return convert(t, joinRequests);
    }

    public BotDTO update(String id, BotRequest request) throws Exception {
        if(botsService.getById(id) == null){
            throw new BotNotFoundException();
        }
        Bot telegramBot = objectMapper.convertValue(request, Bot.class);
        telegramBot.setId(id);
        return objectMapper.convertValue(botsService.update(telegramBot), BotDTO.class);

    }
    public void delete(String id) {
        botsService.delete(id);
    }



    public Collection<BotTypeDTO> getBotTypes() {
        Collection types = new ArrayList();
        types.add(new BotTypeDTO().setName("Telegram").setType(BotType.TELEGRAM_BOT));
        types.add(new BotTypeDTO().setName("Slack").setType(BotType.SLACK_BOT));
        return types;
    }




    private BotDTO convert(Bot t, Collection<JoinRequest> joinRequests) {
        BotDTO dto = objectMapper.convertValue(t, BotDTO.class);
        dto.setJoinRequests(
                ofNullable(joinRequests)
                        .orElse(Collections.emptyList())
                        .stream()
                        .map(j -> objectMapper.convertValue(j, JoinRequestDTO.class))
                        .collect(Collectors.toList()));
        return dto;
    }

}
