/*
package io.github.bot.terminal.application.domains.monitoring.rest

import io.github.bot.terminal.application.domains.common.action.ActionRestConverter
import io.github.bot.terminal.application.domains.common.action.dto.SqlSelectAsOneNumberValueActionDTO
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsOneNumberValueActionDetails
import io.github.bot.terminal.application.domains.common.conditions.ConditionRestConverter
import io.github.bot.terminal.application.domains.common.notify.NotifyRestConverter
import io.github.bot.terminal.application.domains.monitoring.MonitoringTasksTestHelper
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskDetails
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskRepository
import io.github.bot.terminal.application.domains.workers.MonitoringTasksWorker
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.*
import org.mockito.invocation.InvocationOnMock
import org.mockito.junit.jupiter.MockitoExtension

@ExtendWith(MockitoExtension::class)
internal class MonitoringTasksRestServiceTest : MonitoringTasksTestHelper() {
    private val actionConverter = ActionRestConverter()
    private val conditionRestConverter = ConditionRestConverter()
    private val notifyRestConverter = NotifyRestConverter()
    private val converter = Mockito.spy(MonitoringTasksRestConverter(actionConverter,
            conditionRestConverter, notifyRestConverter))

    @Mock
    private val repository: MonitoringTaskRepository? = null

    @Mock
    private val worker: MonitoringTasksWorker? = null
    private var service: MonitoringTasksRestService? = null

    @Captor
    var monitoringTaskDetailsCaptor: ArgumentCaptor<MonitoringTaskDetails>? = null

    @BeforeEach
    fun inti() {
        service = MonitoringTasksRestService(repository!!, converter, worker!!)
    }

    @Test
    fun addMonitoringTaskSqlSelectAsOneNumberValue() {
        val request = monitoringTaskRequestSqlAsSelectOneNumber1
        Mockito.doAnswer { invocation: InvocationOnMock -> (invocation.getArgument<Any>(0) as MonitoringTaskDetails).setId(id1) }.`when`(repository)!!.add(ArgumentMatchers.any())
        val dto1 = service!!.add(request!!)
        Assertions.assertEquals(id1, dto1.id)
        Assertions.assertEquals(name1, dto1.name)
        assertEquals(state1.name(), dto1.getState())
        Assertions.assertEquals(cron1.cron, dto1.cron)
        val actionDto = dto1.action as SqlSelectAsOneNumberValueActionDTO
        Assertions.assertEquals(actionType1.name, actionDto.type)
        Assertions.assertEquals(select1, actionDto.select)
        Assertions.assertEquals(dbConnectionId1, actionDto.dbConnectionId)
        Assertions.assertEquals(conditionType1.name, dto1.conditions[0].type)
        Assertions.assertEquals(expectedValue1, dto1.conditions[0].expectedValue)
        Assertions.assertEquals(notificationApiId1, dto1.notifyList[0].notificationApiId)
        Assertions.assertEquals(messageTemplate1, dto1.notifyList[0].messageTemplate)
        Mockito.verify(repository, Mockito.times(1))!!.add(monitoringTaskDetailsCaptor!!.capture())
        val details = monitoringTaskDetailsCaptor!!.value
        Assertions.assertEquals(id1, details.id)
        Assertions.assertEquals(name1, details.name)
        assertEquals(state1, details.getState())
        Assertions.assertEquals(cron1.cron, details.cron)
        val actionDetails = details.actionDetails as SqlSelectAsOneNumberValueActionDetails
        Assertions.assertEquals(actionType1, actionDetails.type)
        Assertions.assertEquals(select1, actionDetails.select)
        Assertions.assertEquals(dbConnectionId1, actionDetails.dbConnectionId)
        Assertions.assertEquals(conditionType1, details.conditions[0].conditionType)
        Assertions.assertEquals(expectedValue1, details.conditions[0].expectedValue)
        Assertions.assertEquals(notificationApiId1, details.notifyList[0].notificationApiId)
        Assertions.assertEquals(messageTemplate1, details.notifyList[0].messageTemplate)
        Mockito.verify(worker, Mockito.times(1))!!.runRefreshSchedulers()
    }
}*/
