package io.github.support.terminal.application.domains.monitoring.rest

import com.nhaarman.mockitokotlin2.*
import io.github.support.terminal.application.domains.common.action.ActionRestConverter
import io.github.support.terminal.application.domains.common.action.entity.ActionType
import io.github.support.terminal.application.domains.common.conditions.ConditionRestConverter
import io.github.support.terminal.application.domains.common.notify.NotifyRestConverter
import io.github.support.terminal.application.domains.monitoring.MonitoringTaskDataSet
import io.github.support.terminal.application.domains.monitoring.entity.MonitoringTasksFactory
import io.github.support.terminal.application.domains.monitoring.repository.MonitoringTaskDetails
import io.github.support.terminal.application.domains.workers.MonitoringTasksWorker
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.ArgumentCaptor
import org.mockito.Captor
import org.mockito.Mockito
import org.mockito.junit.jupiter.MockitoExtension
import java.util.*


@ExtendWith(MockitoExtension::class)
internal class MonitoringTaskRestServiceTest {

    private val factory: MonitoringTasksFactory = mock()

    @Captor
    private lateinit var detailsCaptor: ArgumentCaptor<MonitoringTaskDetails>
    private val actionRestConverter: ActionRestConverter = Mockito.spy(ActionRestConverter())
    private val conditionRestConverter: ConditionRestConverter = Mockito.spy(ConditionRestConverter())
    private val notifyRestConverter: NotifyRestConverter = Mockito.spy(NotifyRestConverter())

    private val converter = Mockito.spy(MonitoringTasksRestConverter(
            actionRestConverter, conditionRestConverter, notifyRestConverter
    ))

    private val worker: MonitoringTasksWorker = mock()

    private lateinit var restService: MonitoringTasksRestService

    @BeforeEach
    fun inti() {
        restService = MonitoringTasksRestService(factory, converter, worker)
    }

    @Test
    fun `add monitoring task`() {
        whenever(factory.createNew(any()))
                .thenReturn(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.task())
        val dto = restService.add(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.request())
        Assertions.assertEquals(dto, MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.dto())

        verify(factory, times(1)).createNew(capture(detailsCaptor))
        val details = MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.details()
        Assertions.assertNotNull(detailsCaptor.value.id)
        Assertions.assertEquals(details.name, detailsCaptor.value.name)
        Assertions.assertEquals(details.isEnabled, detailsCaptor.value.isEnabled)
        Assertions.assertEquals(details.actionDetails, detailsCaptor.value.actionDetails)
        Assertions.assertEquals(details.cron, detailsCaptor.value.cron)
        Assertions.assertEquals(details.conditions, detailsCaptor.value.conditions)
        Assertions.assertEquals(details.notifyList, detailsCaptor.value.notifyList)

    }

    @Test
    fun `edit monitoring task`() {
        whenever(factory.update(any(), any()))
                .thenReturn(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1_UPDATE.task())

        val dto = restService.edit(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.id(),
                MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_2.request())
        Assertions.assertEquals(dto, MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1_UPDATE.dto())


        verify(factory, times(1)).update(eq(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.id()),
                capture(detailsCaptor))
        val details = MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1_UPDATE.details()
        Assertions.assertNotNull(detailsCaptor.value.id)
        Assertions.assertEquals(details.name, detailsCaptor.value.name)
        Assertions.assertEquals(details.isEnabled, detailsCaptor.value.isEnabled)
        Assertions.assertEquals(details.actionDetails, detailsCaptor.value.actionDetails)
        Assertions.assertEquals(details.cron, detailsCaptor.value.cron)
        Assertions.assertEquals(details.conditions, detailsCaptor.value.conditions)
        Assertions.assertEquals(details.notifyList, detailsCaptor.value.notifyList)
    }

    @Test
    fun `delete monitoring task`() {
        val someId = UUID.randomUUID().toString()
        restService.delete(someId)
        verify(factory, Mockito.times(1)).delete(eq(someId))
    }

    @Test
    fun `get task types`() {
        val types = restService.types()
        Assertions.assertEquals(1, types.size)
        Assertions.assertEquals(ActionType.SQL_SELECT_AS_ONE_NUMBER.name, types[0].type)
        Assertions.assertEquals(ActionType.SQL_SELECT_AS_ONE_NUMBER.label, types[0].label)
    }

    @Test
    fun `get monitoring task`() {
        whenever(factory.byId(eq(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.id())))
                .thenReturn(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.task())
        val result = restService.get(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.id())
        Assertions.assertEquals(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.dto(), result)
    }

    @Test
    fun `get all monitoring task`() {
        val list = listOf(
                MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.task(),
                MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_2.task()
        )
        whenever(factory.all()).thenReturn(list)

        val dtoList = listOf(
                MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.dto(),
                MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_2.dto()
        )
        val resultList = restService.list()
        Assertions.assertEquals(dtoList, resultList)
    }

}