package io.github.support.terminal.application.domains.monitoring.entity

import io.github.support.terminal.application.domains.common.action.entity.Action
import io.github.support.terminal.application.domains.common.conditions.entity.Condition
import io.github.support.terminal.application.domains.common.notify.entity.Notify
import io.github.support.terminal.application.domains.monitoring.repository.MonitoringTaskDetails

data class MonitoringTask(
        val details: MonitoringTaskDetails,
        val action: Action,
        val conditions: List<Condition>,
        val notifyList: List<Notify>
) : Runnable {

    override fun run() {
        if (!details.isEnabled) {
            return
        }
        val result = action.execute(emptyMap())
        for (c in conditions) {
            //todo проверки сами реализуют логику примениму они к такому типу данных или нет
            //если не применимы то скипают - но нужна хотя бы одна проверка не на число - типа статус HTTP запроса
            if (c.check(result.result as Double)) {
                continue
            }
            checkNotPassed()
        }
    }

    private fun checkNotPassed() {
        for (notify in notifyList) {
            notify.execute()
        }
    }
}
