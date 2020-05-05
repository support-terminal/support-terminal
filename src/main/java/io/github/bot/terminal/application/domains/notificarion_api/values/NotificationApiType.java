package io.github.bot.terminal.application.domains.notificarion_api.values;

public enum NotificationApiType {

    TELEGRAM_BOT("Telegram Bot API"),
    SLACK_BOT("Slack Bot API");

    private String label;

    NotificationApiType(String label) {
        this.label = label;
    }
    public String getLabel() {
        return label;
    }
    public interface Constants {
        String TELEGRAM_BOT = "TELEGRAM_BOT";
        String SLACK_BOT = "SLACK_BOT";
    }
}
