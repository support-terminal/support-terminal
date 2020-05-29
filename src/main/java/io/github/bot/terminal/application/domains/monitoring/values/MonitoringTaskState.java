package io.github.bot.terminal.application.domains.monitoring.values;

public enum MonitoringTaskState {
    ENABLED(){
        public boolean isEnabled(){
            return true;
        }
    },
    DISABLED(){
        public boolean isEnabled(){
            return false;
        }
    };

    public abstract boolean isEnabled();

    public static MonitoringTaskState resolve(boolean enabled){
        if (enabled)
            return MonitoringTaskState.ENABLED;
        else
            return MonitoringTaskState.DISABLED;
    }
}