package io.github.bot.terminal.application.domains.common.action.values;


public enum ActionType {

    SQL_SELECT_AS_TEXT("Sql select as text"),
    SQL_SELECT_AS_ONE_NUMBER("Sql select as one number value");

    private String label;

    ActionType(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }

    public interface Constants {
        String SQL_SELECT_AS_TEXT = "SQL_SELECT_AS_TEXT";
        String SQL_SELECT_AS_ONE_NUMBER = "SQL_SELECT_AS_ONE_NUMBER";
    }

}
