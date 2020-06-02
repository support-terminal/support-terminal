package io.github.bot.terminal.application.domains.bot_commands.values;

public enum BotCommandState {
    ENABLED() {
        public boolean isEnabled() {
            return true;
        }
    },
    DISABLED() {
        public boolean isEnabled() {
            return false;
        }
    };

    public abstract boolean isEnabled();

    public static BotCommandState resolve(boolean enabled) {
        if (enabled)
            return BotCommandState.ENABLED;
        else
            return BotCommandState.DISABLED;
    }
}