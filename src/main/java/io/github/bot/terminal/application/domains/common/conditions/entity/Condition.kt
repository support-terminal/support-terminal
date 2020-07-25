package io.github.bot.terminal.application.domains.common.conditions.entity

import io.github.bot.terminal.application.domains.common.conditions.values.ConditionType

class Condition(
        val conditionType: ConditionType,
        val expectedValue: Double
) {

    fun check(value: Double): Boolean {
        return conditionType.check(value, expectedValue)
    }
}