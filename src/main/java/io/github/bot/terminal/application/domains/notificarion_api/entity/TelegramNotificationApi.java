package io.github.bot.terminal.application.domains.notificarion_api.entity;


import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository;


public final class TelegramNotificationApi implements NotificationApi<TelegramNotificationApiDetails> {

    private TelegramNotificationApiDetails details;
    
    private NotificationApiRepository repository;

   public TelegramNotificationApi(TelegramNotificationApiDetails details,
                                  NotificationApiRepository repository) {
        this.details = details;
        this.repository = repository;

   }
    public TelegramNotificationApiDetails getDetails() {
        return details;
    }

    @Override
    public void delete() {
        repository.deleteById(details.id);
    }
}
