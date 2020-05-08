package io.github.bot.terminal.application.domains.events.services;


import io.github.bot.terminal.application.domains.events.models.ApplicationEvent;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@RequiredArgsConstructor
public class ApplicationEventsService {

   private final SimpMessagingTemplate template;


   public void notify(String text){
        this.template.convertAndSend("/topic/ui/events", new ApplicationEvent().setText(text).setDate(new Date()));
   }


    public void notifyUi(String text){
       this.template.convertAndSend("/topic/ui/events", new ApplicationEvent().setText(text).setDate(new Date()));
   }

}
