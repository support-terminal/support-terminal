package io.github.bot.terminal.application.domains.monitoring.entity

import io.github.bot.terminal.application.domains.common.action.entity.Action
import io.github.bot.terminal.application.domains.common.conditions.entity.Condition
import io.github.bot.terminal.application.domains.common.notify.entity.Notify
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskDetails

class MonitoringTask(
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

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as MonitoringTask

        if (details != other.details) return false
        if (action != other.action) return false
        if (conditions != other.conditions) return false
        if (notifyList != other.notifyList) return false

        return true
    }

    override fun hashCode(): Int {
        var result = details.hashCode()
        result = 31 * result + action.hashCode()
        result = 31 * result + conditions.hashCode()
        result = 31 * result + notifyList.hashCode()
        return result
    }


}