package io.github.bot.terminal.application.domains.common.conditions

import io.github.bot.terminal.application.domains.common.conditions.dto.ConditionDTO
import io.github.bot.terminal.application.domains.common.conditions.entity.ConditionDetails
import io.github.bot.terminal.application.domains.common.conditions.requests.ConditionRequest
import io.github.bot.terminal.application.domains.common.conditions.values.ConditionType
import org.springframework.stereotype.Service

@Service
class ConditionRestConverter {

    fun mapToDetails(request: ConditionRequest): ConditionDetails =
            ConditionDetails(
                    conditionType = ConditionType.valueOf(request.type),
                    expectedValue = request.expectedValue
            )

    fun mapToDto(details: ConditionDetails): ConditionDTO =
            ConditionDTO(
                    type = details.conditionType.name,
                    expectedValue = details.expectedValue
            )
}