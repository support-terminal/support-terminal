package io.github.bot.terminal.application.domains.monitoring.repository

import io.github.bot.terminal.application.domains.monitoring.MonitoringTaskDataSet
import io.github.bot.terminal.application.domains.monitoring.MonitoringTaskRepositoryTestConfig
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Import
import org.springframework.test.context.junit.jupiter.SpringExtension


@ExtendWith(SpringExtension::class)
@Import(MonitoringTaskRepositoryTestConfig::class)
class NotificationApiRepositoryTest {

    @Autowired
    private lateinit var repository: MonitoringTaskRepository;

    @BeforeEach
    fun inti() {
        repository.findAll().forEach { d -> repository.deleteById(d.id) }
    }

    @Test
    fun `add monitoring task details`() {
        repository.add(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.details())
        val byId = repository.findById(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.id)
        Assertions.assertEquals(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.details(), byId)
    }

    @Test
    fun `edit monitoring task details`() {
        repository.add(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.details())
        val byId = repository.findById(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.details().id)
        byId!!.merge(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_2.details())
        repository.update(byId)
        Assertions.assertEquals(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1_UPDATE.details(), byId)
    }

    @Test
    fun `find all monitoring tasks`() {
        repository.add(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.details())
        repository.add(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_2.details())

        val expectedResult = listOf(
                MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.details(),
                MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_2.details()
        )

        Assertions.assertEquals(expectedResult, repository.findAll())
    }

    @Test
    fun deleteById() {
        repository.add(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.details())
        val byId = repository.findById(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.id)
        Assertions.assertEquals(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.details(), byId)
        repository.deleteById(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.id())
        Assertions.assertNull(repository.findById(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.id()))
    }

}