package io.github.bot.terminal.application.domains.monitoring.rest.requests

import io.github.bot.terminal.application.domains.common.action.requests.ActionRequest
import io.github.bot.terminal.application.domains.common.conditions.requests.ConditionRequest
import io.github.bot.terminal.application.domains.common.notify.requests.NotifyRequest
import java.util.*
import javax.validation.Valid
import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotNull

data class MonitoringTaskRequest(
        val name: @NotBlank String,
        val enabled: Boolean,
        val cron: @NotBlank String,
        val action: @NotNull @Valid ActionRequest,
        val conditions: List<ConditionRequest> = ArrayList(),
        val notifyList: List<NotifyRequest> = ArrayList()
)