package io.github.bot.terminal.application.domains.common.conditions.entity

import io.github.bot.terminal.application.domains.common.conditions.values.ConditionType

data class ConditionDetails(
        var conditionType: ConditionType,
        var expectedValue: Double
)