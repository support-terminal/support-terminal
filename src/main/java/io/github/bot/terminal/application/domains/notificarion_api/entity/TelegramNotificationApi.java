package io.github.bot.terminal.application.domains.notificarion_api.entity;


import io.github.bot.terminal.application.domains.integrations.telegram.TelegramApiClient;
import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository;

import java.util.List;


public final class TelegramNotificationApi implements NotificationApi<TelegramNotificationApiDetails> {

    private final TelegramNotificationApiDetails details;
    private final NotificationApiRepository repository;
    private final TelegramApiClient telegramApiClient;
   public TelegramNotificationApi(TelegramNotificationApiDetails details,
                                  NotificationApiRepository repository,
                                  TelegramApiClient telegramApiClient) {
        this.details = details;
        this.repository = repository;
        this.telegramApiClient = telegramApiClient;

   }
    public TelegramNotificationApiDetails getDetails() {
        return details;
    }

    @Override
    public void delete() {
        repository.deleteById(details.id);
    }

    @Override
    public List<Message> getLastMessages() {

        //TODO не пустые

        //  if (message.getText().toLowerCase().contains(JOIN)) {
        //                        //регистрация запроса на добавление в список одобренных пользователей
        //                        joinRequestHandle(slackBot, message.getUser());
        //                        return;
        //                    }
        //
        //                    if (!isPermited(slackBot, message)) {
        //                        return;
        //                    }


        //todo help and join special btoCommands
        return null;
    }

    @Override
    public void sendMessage(Message message) {

    }
}
