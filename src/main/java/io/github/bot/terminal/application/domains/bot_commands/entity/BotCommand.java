package io.github.bot.terminal.application.domains.bot_commands.entity;

import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandRepository;
import io.github.bot.terminal.application.domains.bot_commands.values.BotCommandState;
import io.github.bot.terminal.application.domains.common.Persistable;
import io.github.bot.terminal.application.domains.common.action.entity.Action;
import io.github.bot.terminal.application.domains.notificarion_api.entity.Message;
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi;
import org.apache.commons.lang3.StringUtils;

import java.awt.*;
import java.time.Duration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class BotCommand implements Persistable {

    private BotCommandRepository repository;
    private BotCommandDetails details;
    private Action action;
    private List<NotificationApi> notificationApis;

    public BotCommand(BotCommandDetails details,
                      BotCommandRepository repository,
                      Action action,
                      List<NotificationApi> notificationApis) {
        this.details = details;
        this.repository = repository;
        this.action = action;
        this.notificationApis = notificationApis;
    }

    public BotCommandDetails getDetails() {
        return details;
    }

    @Override
    public void delete() {
        repository.transaction(details.getId(), (repository) -> {
           if(repository.findById(details.getId()).isPresent()){
               repository.deleteById(details.getId());
           }
        });
    }

    public boolean isEnabled(){
        return BotCommandState.ENABLED.equals(details.getState());
    }

    public void proceed(){
       for (NotificationApi<?> notificationApi : notificationApis){
           handleNotificationApi(notificationApi);
       }
    }

    private void handleNotificationApi(NotificationApi<?> notificationApi) {
        for (Message message : notificationApi.getLastMessages()) {
            if(isContainsCommand(message)){
                action.proceedAndNotify(notificationApi);
            }
        }
    }

    private boolean isContainsCommand(Message message) {
        return message.getText().contains(details.getCmd());
    }


}
