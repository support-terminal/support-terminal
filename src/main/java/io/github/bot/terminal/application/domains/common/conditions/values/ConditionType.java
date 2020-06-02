package io.github.bot.terminal.application.domains.common.conditions.values;


public enum ConditionType {

    NUMERIC_MORE_THAN("Number more than") {
        @Override
        public boolean check(Double value, Double expectedValue) {
            return value > expectedValue;
        }
    },
    NUMERIC_EQUAL("Number equal") {
        @Override
        public boolean check(Double value, Double expectedValue) {
            return value.equals(expectedValue);
        }
    },
    NUMERIC_LESS_THAN("Number less than") {
        @Override
        public boolean check(Double value, Double expectedValue) {
            return value < expectedValue;
        }
    };

    private String label;

    ConditionType(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }

    public abstract boolean check(Double value, Double expectedValue);

    public interface Constants {
        String NUMERIC_MORE_THAN = "NUMERIC_MORE_THAN";
        String NUMERIC_EQUAL = "NUMERIC_EQUAL";
        String NUMERIC_LESS_THAN = "NUMERIC_LESS_THAN";
    }

}
