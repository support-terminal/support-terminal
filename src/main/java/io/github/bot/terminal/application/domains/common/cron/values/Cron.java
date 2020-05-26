package io.github.bot.terminal.application.domains.common.cron.values;

public enum Cron {

    EVERY_1_MINUTE("0 * * ? * *"),
    EVERY_5_MINUTES("0 */5 * ? * *"),
    EVERY_15_MINUTES("0 */15 * ? * *"),
    EVERY_HOUR("0 0 * ? * *");

    private String cron;

    public String getCron() {
        return cron;
    }

    Cron(String cron) {
        this.cron = cron;
    }
}
