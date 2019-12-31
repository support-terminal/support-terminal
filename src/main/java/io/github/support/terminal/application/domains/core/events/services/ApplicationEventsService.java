package io.github.support.terminal.application.domains.core.events.services;


import io.github.support.terminal.application.domains.core.events.models.ApplicationEvent;
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