package io.github.support.terminal.application.domains.bot_commands.services;


import io.github.support.terminal.application.domains.core.bots.entities.Bot;
import io.github.support.terminal.application.domains.core.bots.services.BotsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Slf4j
@Service
@RequiredArgsConstructor
class BotCommandsScheduler {

    private final BotCommandsApiService commandsApiService;
    private final BotsService botsService;
    private final ApplicationEventPublisher eventPublisher;

    @Scheduled(fixedRate = 7_000)
    public void botScheduler() {
        Collection<Bot> bots = botsService.getAllEnabledBots();
        bots.forEach(bot-> {
            String botId = bot.getId();
            if(commandsApiService.getEnabledByBotId(botId).size() == 0){
                log.debug("Not found commands for that bot");
                return;
            }
            eventPublisher.publishEvent(bot);
        });
    }

}
