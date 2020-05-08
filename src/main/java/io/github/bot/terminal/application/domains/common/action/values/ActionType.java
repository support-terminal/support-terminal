package io.github.bot.terminal.application.domains.common.action.values;


public enum ActionType {

    SQL_SELECT_AS_TEXT("Sql select as text");

    private String label;

    ActionType(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }

    public interface Constants {
        String SQL_SELECT_AS_TEXT = "SQL_SELECT_AS_TEXT";
    }

}
