package io.github.support.terminal.application.domains.monitoring.repository

import io.github.support.terminal.application.domains.common.action.entity.ActionDetails
import io.github.support.terminal.application.domains.common.conditions.entity.ConditionDetails
import io.github.support.terminal.application.domains.common.notify.entity.NotifyDetails
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
     fun merge(update: MonitoringTaskDetails) = this.copy(
             name = update.name,
             isEnabled = update.isEnabled,
             actionDetails = update.actionDetails,
             cron = update.cron,
             conditions = update.conditions,
             notifyList = update.notifyList
     )

}