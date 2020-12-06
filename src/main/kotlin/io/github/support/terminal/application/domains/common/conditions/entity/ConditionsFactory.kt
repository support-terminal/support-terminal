package io.github.support.terminal.application.domains.common.conditions.entity

import io.github.support.terminal.application.domains.common.conditions.entity.Condition
import io.github.support.terminal.application.domains.common.conditions.entity.ConditionDetails
import org.springframework.stereotype.Service

@Service
class ConditionsFactory {
    fun build(details: ConditionDetails): Condition =
            Condition(
                    conditionType = details.conditionType,
                    expectedValue = details.expectedValue
            )
}