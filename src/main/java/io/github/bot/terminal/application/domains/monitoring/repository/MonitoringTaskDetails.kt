package io.github.bot.terminal.application.domains.monitoring.repository

import io.github.bot.terminal.application.domains.common.action.entity.ActionDetails
import io.github.bot.terminal.application.domains.common.conditions.entity.ConditionDetails
import io.github.bot.terminal.application.domains.common.notify.entity.NotifyDetails
import org.dizitart.no2.objects.Id
import java.util.*

data class MonitoringTaskDetails(
        @Id val id: String = UUID.randomUUID().toString(),
        var name: String,
        var isEnabled: Boolean,
        var actionDetails: ActionDetails,
        var cron: String,
        var conditions: List<ConditionDetails>,
        var notifyList: List<NotifyDetails>
) {
    open fun merge(update: MonitoringTaskDetails) {
        this.name = update.name
        this.isEnabled = update.isEnabled
        this.actionDetails = update.actionDetails
        this.cron = update.cron
        this.conditions = update.conditions
        this.notifyList = update.notifyList
    }
}