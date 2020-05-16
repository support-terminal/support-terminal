package io.github.bot.terminal.application.domains.common.notify.values;


public enum NotifyTypes {

    SLACK_BOT_API("Slack Api");

    private String label;

    NotifyTypes(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }

    public interface Constants {
        String SLACK_BOT_API = "SLACK_BOT_API";
    }

}
