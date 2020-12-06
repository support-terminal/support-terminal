package io.github.support.terminal.application.domains.monitoring.factory

import com.nhaarman.mockitokotlin2.*
import io.github.support.terminal.application.domains.monitoring.MonitoringTaskDataSet
import io.github.support.terminal.application.domains.monitoring.entity.MonitoringTasksFactory
import io.github.support.terminal.application.domains.monitoring.repository.MonitoringTaskDetails
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.ArgumentCaptor
import org.mockito.Captor
import org.mockito.junit.jupiter.MockitoExtension
import org.mockito.junit.jupiter.MockitoSettings
import org.mockito.quality.Strictness


@ExtendWith(MockitoExtension::class)
@MockitoSettings(strictness = Strictness.LENIENT)
internal class MonitoringTaskFactoryTest {

    private lateinit var factory: MonitoringTasksFactory

    @Captor
    private lateinit var detailsCaptor: ArgumentCaptor<MonitoringTaskDetails>

    @BeforeEach
    fun init() {
        whenever(MonitoringTaskDataSet.notifyFactory.build(eq(MonitoringTaskDataSet.Notifys.NOTIFY_1.details())))
                .thenReturn(MonitoringTaskDataSet.Notifys.NOTIFY_1.notify())

        whenever(MonitoringTaskDataSet.notifyFactory.build(eq(MonitoringTaskDataSet.Notifys.NOTIFY_2.details())))
                .thenReturn(MonitoringTaskDataSet.Notifys.NOTIFY_2.notify())

        whenever(MonitoringTaskDataSet.actionsFactory.build(eq(MonitoringTaskDataSet.Actions.ACTION_1.details())))
                .thenReturn(MonitoringTaskDataSet.Actions.ACTION_1.action())

        whenever(MonitoringTaskDataSet.actionsFactory.build(eq(MonitoringTaskDataSet.Actions.ACTION_2.details())))
                .thenReturn(MonitoringTaskDataSet.Actions.ACTION_2.action())

        whenever(MonitoringTaskDataSet.repository.findById(eq(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.id())))
                .thenReturn(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.details())

        whenever(MonitoringTaskDataSet.repository.findById(eq(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_2.id())))
                .thenReturn(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_2.details())

        factory = MonitoringTasksFactory(
                MonitoringTaskDataSet.repository,
                MonitoringTaskDataSet.actionsFactory,
                MonitoringTaskDataSet.notifyFactory,
                MonitoringTaskDataSet.conditionsFactory
        )
    }

    @Test
    fun `create monitoring task`() {
        val task = factory.createNew(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.details())

        Assertions.assertEquals(task, MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.task())

        verify(MonitoringTaskDataSet.repository, times(1)).add(capture(detailsCaptor))
        Assertions.assertEquals(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.details(), detailsCaptor.value)
    }

    @Test
    fun `update monitoring task`() {
        val updated = factory.update(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.id,
                MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_2.details())

        val ddd = MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1_UPDATE.task()
        Assertions.assertEquals(ddd, updated)

        verify(MonitoringTaskDataSet.repository, times(1))
                .update(capture(detailsCaptor))
        Assertions.assertEquals(
                MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1_UPDATE.details(),
                detailsCaptor.value
        )
    }

    @Test
    fun `get all monitoring tasks`() {
        val list = listOf(
                MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.details(),
                MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_2.details()
        )
        whenever(MonitoringTaskDataSet.repository.findAll()).thenReturn(list)

        val expectedList = listOf(
                MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.task(),
                MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_2.task()
        )
        Assertions.assertEquals(expectedList, factory.all())
    }

    @Test
    fun `get bot command by id`() {
        Assertions.assertEquals(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.task(),
                factory.byId(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.id()))
    }

    @Test
    fun byIdNotFound() {
        whenever(MonitoringTaskDataSet.repository.findById(any())).thenReturn(null)
        Assertions.assertThrows(IllegalArgumentException::class.java) { factory.byId("some-id") }
    }

}