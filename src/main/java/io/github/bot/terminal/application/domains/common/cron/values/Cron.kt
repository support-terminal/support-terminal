package io.github.bot.terminal.application.domains.common.cron.values

enum class Cron(val label: String, val cron: String) {
    EVERY_1_MINUTE("Every minute", "0 * * ? * *"),
    EVERY_5_MINUTES("Every 5 minutes", "0 */5 * ? * *"),
    EVERY_15_MINUTES("Every 15 minutes", "0 */15 * ? * *"),
    EVERY_HOUR("Every hour", "0 0 * ? * *");
}