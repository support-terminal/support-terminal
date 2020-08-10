package io.github.bot.terminal.application.domains.common.conditions.entity

import io.github.bot.terminal.application.domains.common.conditions.values.ConditionType

class Condition(
        val conditionType: ConditionType,
        val expectedValue: Double
) {

    fun check(value: Double): Boolean {
        return conditionType.check(value, expectedValue)
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Condition

        if (conditionType != other.conditionType) return false
        if (expectedValue != other.expectedValue) return false

        return true
    }

    override fun hashCode(): Int {
        var result = conditionType.hashCode()
        result = 31 * result + expectedValue.hashCode()
        return result
    }
}