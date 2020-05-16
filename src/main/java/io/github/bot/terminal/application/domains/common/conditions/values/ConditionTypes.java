package io.github.bot.terminal.application.domains.common.conditions.values;


public enum ConditionTypes {

    NUMERIC_MORE_THAN("Number more than"),
    NUMERIC_EQUAL("Number equal"),
    NUMERIC_LESS_THAN("Number less than");

    private String label;

    ConditionTypes(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }

    public interface Constants {
        String NUMERIC_MORE_THAN = "NUMERIC_MORE_THAN";
        String NUMERIC_EQUAL = "NUMERIC_EQUAL";
        String NUMERIC_LESS_THAN = "NUMERIC_LESS_THAN";
    }

}
