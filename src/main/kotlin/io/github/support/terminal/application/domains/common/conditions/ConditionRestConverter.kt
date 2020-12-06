package io.github.support.terminal.application.domains.common.conditions

import io.github.support.terminal.application.domains.common.conditions.entity.ConditionDetails
import io.github.support.terminal.application.domains.common.conditions.entity.ConditionType
import org.springframework.stereotype.Service

@Service
class ConditionRestConverter {

    fun mapToDetails(request: ConditionRequest) =
            ConditionDetails(
                    conditionType = ConditionType.valueOf(request.type),
                    expectedValue = request.expectedValue
            )

    fun mapToDto(details: ConditionDetails) =
            ConditionDTO(
                    type = details.conditionType.name,
                    expectedValue = details.expectedValue
            )
}