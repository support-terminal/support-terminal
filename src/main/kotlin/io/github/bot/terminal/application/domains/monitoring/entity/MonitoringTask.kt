package io.github.bot.terminal.application.domains.monitoring.entity

import io.github.bot.terminal.application.domains.common.action.entity.Action
import io.github.bot.terminal.application.domains.common.conditions.entity.Condition
import io.github.bot.terminal.application.domains.common.notify.entity.Notify
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskDetails

class MonitoringTask(
        val details: MonitoringTaskDetails,
        val action: Action,
        val isEnabled: Boolean,
        val conditions: List<Condition>,
        private val notifyList: List<Notify>
) : Runnable {

    override fun run() {
        if (!isEnabled) {
            return
        }
        val result = action.execute()
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