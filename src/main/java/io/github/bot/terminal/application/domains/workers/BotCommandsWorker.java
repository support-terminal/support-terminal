package io.github.bot.terminal.application.domains.workers;


import io.github.bot.terminal.application.domains.bot_commands.entity.BotCommand;
import io.github.bot.terminal.application.domains.bot_commands.entity.Cmd;
import io.github.bot.terminal.application.domains.bot_commands.factory.BotCommandsFactory;
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi;
import io.github.bot.terminal.application.domains.notificarion_api.factory.NotificationApiFactory;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
class BotCommandsWorker {

    private final NotificationApiFactory notificationApiFactory;
    private final BotCommandsFactory botCommandsFactory;
    private final ExecutorService executorService;

    @Scheduled(fixedDelay = 7_000)
    public void scheduler() throws InterruptedException {
        List<Callable<Object>> callables = new ArrayList<>();
        for (NotificationApi notificationApi : notificationApiFactory.getAll()) {
            callables.add(Executors.callable(() -> handle(notificationApi)));
        }
        executorService.invokeAll(callables);
    }

    private void handle(NotificationApi notificationApi) {
        Set<Cmd> lastCommands = notificationApi.getLastMessages()
                .stream().map(m -> new Cmd(m.getText()))
                .filter(c -> !Cmd.EMPTY.equals(c.getCmd()))
                .collect(Collectors.toSet());

        Map<Cmd, List<BotCommand>> cmdMap
                = botCommandsFactory.byNotificationApiId(notificationApi.getId())
                .stream()
                .collect(Collectors.groupingBy(BotCommand::getCmd));

        for (Cmd cmd : lastCommands) {
            cmdMap.get(cmd).forEach(botCommand -> {
                botCommand.process(notificationApi);
            });
        }

    }

}
