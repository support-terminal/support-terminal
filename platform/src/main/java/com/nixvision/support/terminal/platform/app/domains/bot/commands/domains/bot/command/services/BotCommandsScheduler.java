package com.nixvision.support.terminal.platform.app.domains.bot.commands.domains.bot.command.services;


import com.nixvision.support.terminal.platform.app.domains.bot.commands.domains.bot.command.values.BotsJmsQueues;
import com.nixvision.support.terminal.platform.app.domains.core.bots.entities.Bot;
import com.nixvision.support.terminal.platform.app.domains.core.bots.services.BotsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Slf4j
@Service
@RequiredArgsConstructor
class BotCommandsScheduler {

    private final BotCommandsApiService commandsApiService;
    private final BotsService botsService;
    private final JmsTemplate jmsTemplate;

    @Scheduled(fixedRate = 7_000)
    public void botScheduler() {
        Collection<Bot> bots = botsService.getAllEnabledBots();
        bots.forEach(bot-> {
            String botId = bot.getId();
            if(commandsApiService.getEnabledByBotId(botId).size() == 0){
                log.debug("Not found commands for that bot");
                return;
            }
            jmsTemplate.convertAndSend(BotsJmsQueues.BOT_COMMANDS_MODULE_HANDLE_BOTS_QUEUE+bot.getType(), bot);
        });
    }

}
