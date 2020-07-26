package io.github.bot.terminal.application.domains.monitoring.rest.dto

import io.github.bot.terminal.application.domains.common.action.dto.ActionDTO
import io.github.bot.terminal.application.domains.common.conditions.dto.ConditionDTO
import io.github.bot.terminal.application.domains.common.notify.dto.NotifyDTO


data class MonitoringTaskDTO(
        val id: String,
        val name: String,
        val enabled: Boolean,
        val action: ActionDTO,
        val cron: String,
        val conditions: List<ConditionDTO>,
        val notifyList: List<NotifyDTO>
)