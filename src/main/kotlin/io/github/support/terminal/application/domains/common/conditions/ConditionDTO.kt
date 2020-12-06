package io.github.support.terminal.application.domains.common.conditions

import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotNull

data class ConditionDTO(
        val type: @NotBlank String,
        val expectedValue: @NotNull Double
)