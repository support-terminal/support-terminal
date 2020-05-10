package io.github.bot.terminal.application.domains.events.services;


import io.github.bot.terminal.application.domains.events.models.ApplicationEvent;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.Date;

@Slf4j
@Service
@RequiredArgsConstructor
public class ApplicationEventsService {

    private final SimpMessagingTemplate template;

    public void notifyInfo(String message) {
        log.info(message);
        this.template.convertAndSend("/topic/ui/events",
                new ApplicationEvent()
                        .setLevel(ApplicationEvent.Level.INFO)
                        .setMessage(message)
                        .setDate(new Date()));
    }

    public void notifyError(String message) {
        this.template.convertAndSend("/topic/ui/events",
                new ApplicationEvent()
                        .setLevel(ApplicationEvent.Level.ERROR)
                        .setMessage(message)
                        .setDate(new Date()));
    }

}
