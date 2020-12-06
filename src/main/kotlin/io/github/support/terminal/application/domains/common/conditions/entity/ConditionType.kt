package io.github.support.terminal.application.domains.common.conditions.entity

enum class ConditionType(val label: String) {

    NUMERIC_MORE_THAN("Number more than") {
        override fun check(value: Double, expectedValue: Double?): Boolean {
            return value > expectedValue!!
        }
    },
    NUMERIC_EQUAL("Number equal") {
        override fun check(value: Double, expectedValue: Double?): Boolean {
            return value == expectedValue
        }
    },
    NUMERIC_LESS_THAN("Number less than") {
        override fun check(value: Double, expectedValue: Double?): Boolean {
            return value < expectedValue!!
        }
    };

    abstract fun check(value: Double, expectedValue: Double?): Boolean
    interface Constants {
        companion object {
            const val NUMERIC_MORE_THAN = "NUMERIC_MORE_THAN"
            const val NUMERIC_EQUAL = "NUMERIC_EQUAL"
            const val NUMERIC_LESS_THAN = "NUMERIC_LESS_THAN"
        }
    }

}