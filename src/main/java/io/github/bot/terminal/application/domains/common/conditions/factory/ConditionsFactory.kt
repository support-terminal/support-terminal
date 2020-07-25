package io.github.bot.terminal.application.domains.common.conditions.factory

import io.github.bot.terminal.application.domains.common.conditions.entity.Condition
import io.github.bot.terminal.application.domains.common.conditions.entity.ConditionDetails
import org.springframework.stereotype.Service

@Service
class ConditionsFactory {
    fun build(details: ConditionDetails): Condition =
            Condition(
                    conditionType = details.conditionType,
                    expectedValue = details.expectedValue
            )
}