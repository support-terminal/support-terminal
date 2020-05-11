package io.github.bot.terminal.application.domains.bot_commands.worker;


import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommand;
import io.github.bot.terminal.application.domains.bot_commands.factory.BotCommandsFactory;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutorService;

@Slf4j
@Service
@RequiredArgsConstructor
class BotCommandsWorker {

    private final BotCommandsFactory factory;
    private final ExecutorService executorService;

    @Scheduled(fixedDelay = 7_000)
    public void botCommandsScheduler() {
        for (BotCommand botCommand : factory.getAll()) {
            if (!botCommand.isEnabled()) {
                continue;
            }
            executorService.execute(() -> botCommand.proceed());
        }
    }

}
