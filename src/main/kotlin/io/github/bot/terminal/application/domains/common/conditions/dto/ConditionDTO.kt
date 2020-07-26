package io.github.bot.terminal.application.domains.common.conditions.dto

import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotNull

data class ConditionDTO(
        val type: @NotBlank String,
        val expectedValue: @NotNull Double
)