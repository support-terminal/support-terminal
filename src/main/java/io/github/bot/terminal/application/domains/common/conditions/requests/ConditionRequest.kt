package io.github.bot.terminal.application.domains.common.conditions.requests

import javax.validation.constraints.NotNull

data class ConditionRequest(
        val type: @NotNull String,
        val expectedValue: @NotNull Double
)
