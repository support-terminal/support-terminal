package io.github.support.terminal.application.domains.monitoring.rest

import io.github.support.terminal.application.domains.common.action.ActionDTO
import io.github.support.terminal.application.domains.common.conditions.ConditionDTO
import io.github.support.terminal.application.domains.common.notify.NotifyDTO


data class MonitoringTaskDTO(
        val id: String,
        val name: String,
        val enabled: Boolean,
        val action: ActionDTO,
        val cron: String,
        val conditions: List<ConditionDTO>,
        val notifyList: List<NotifyDTO>
)