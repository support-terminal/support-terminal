package io.github.bot.terminal.application.domains.notificarion_api.entity;


import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository;


public final class SlackNotificationApi implements NotificationApi<SlackNotificationApiDetails> {



    private SlackNotificationApiDetails details;
    private NotificationApiRepository repository;

   public SlackNotificationApi(SlackNotificationApiDetails details,
                               NotificationApiRepository repository) {
        this.details = details;
        this.repository = repository;

   }
    public SlackNotificationApiDetails getDetails() {
        return details;
    }

}
