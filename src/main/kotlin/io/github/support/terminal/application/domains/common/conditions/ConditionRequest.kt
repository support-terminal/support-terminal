package io.github.support.terminal.application.domains.common.conditions

import javax.validation.constraints.NotNull

data class ConditionRequest(
        val type: @NotNull String,
        val expectedValue: @NotNull Double
)
