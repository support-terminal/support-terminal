/*
package io.github.bot.terminal.application.domains.monitoring.repository

import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsOneNumberValueActionDetails
import io.github.bot.terminal.application.domains.monitoring.MonitoringTasksRepositoryTestConfig
import io.github.bot.terminal.application.domains.monitoring.MonitoringTasksTestHelper
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Import
import org.springframework.test.context.junit.jupiter.SpringExtension

@ExtendWith(SpringExtension::class)
@Import(MonitoringTasksRepositoryTestConfig::class)
internal class MonitoringTaskRepositoryTest : MonitoringTasksTestHelper() {
    @Autowired
    private val repository: MonitoringTaskRepository? = null

    @AfterEach
    fun clean() {
        repository!!.findAll().stream().forEach { (id) -> repository.deleteById(id) }
    }

    @Test
    fun addMonitoringTaskSqlSelectAsOneNumberValueDetails() {
        val details = monitoringTaskSqlSelectAsOneNumberValueDetails1
        repository!!.add(details!!)
        val byId: MonitoringTaskDetails = repository.findById(details.id).get()
        Assertions.assertEquals(details.id, byId.id)
        Assertions.assertEquals(name1, byId.name)
        assertEquals(state1, byId.getState())
        Assertions.assertEquals(cron1.cron, byId.cron)
        val actionDetails = byId.actionDetails as SqlSelectAsOneNumberValueActionDetails
        Assertions.assertEquals(actionType1, actionDetails.type)
        Assertions.assertEquals(select1, actionDetails.select)
        Assertions.assertEquals(dbConnectionId1, actionDetails.dbConnectionId)
        Assertions.assertEquals(conditionType1, byId.conditions[0].conditionType)
        Assertions.assertEquals(expectedValue1, byId.conditions[0].expectedValue)
        Assertions.assertEquals(notificationApiId1, byId.notifyList[0].notificationApiId)
        Assertions.assertEquals(messageTemplate1, byId.notifyList[0].messageTemplate)
    }
}*/
