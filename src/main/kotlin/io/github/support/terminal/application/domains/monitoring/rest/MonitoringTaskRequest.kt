package io.github.support.terminal.application.domains.monitoring.rest

import io.github.support.terminal.application.domains.common.action.ActionRequest
import io.github.support.terminal.application.domains.common.conditions.ConditionRequest
import io.github.support.terminal.application.domains.common.notify.NotifyRequest
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