package com.nixvision.support.terminal.platform.app.domains.core.bots.services;


import com.nixvision.support.terminal.platform.app.domains.core.bots.entities.Bot;
import com.nixvision.support.terminal.platform.app.domains.core.bots.entities.JoinRequest;
import com.nixvision.support.terminal.platform.app.domains.core.bots.exceptions.BotNotFoundException;
import com.nixvision.support.terminal.platform.app.domains.core.bots.values.JoinRequestStates;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
@RequiredArgsConstructor
public class JoinRequestsApiService {

    private final JoinRequestsService joinRequestsService;
    private final BotsService botsService;

    public void denied(String botId, String joinId) throws Exception {
        JoinRequest joinRequest = joinRequestsService.getById(joinId);
        if(!joinRequest.getBotId().equals(botId)) {
            throw new BotNotFoundException();
        }


        Bot bot = botsService.getById(botId);
        bot.denied(joinRequest);
        botsService.update(bot);

        joinRequestsService.delete(joinId);
    }

    public void accept(String botId, String joinId) throws Exception {
        JoinRequest joinRequest = joinRequestsService.getById(joinId);
        if(!joinRequest.getBotId().equals(botId)) {
            throw new BotNotFoundException();
        }

        Bot bot = botsService.getById(botId);
        bot.accept(joinRequest);
        botsService.update(bot);

        joinRequest.setState(JoinRequestStates.APPROVED);
        joinRequestsService.update(joinRequest);
    }
}
