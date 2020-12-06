package io.github.support.terminal.application.domains.monitoring.rest

import com.fasterxml.jackson.databind.ObjectMapper
import com.nhaarman.mockitokotlin2.*
import io.github.support.terminal.application.domains.monitoring.MonitoringTaskDataSet
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.ArgumentCaptor
import org.mockito.Captor
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.junit.jupiter.MockitoExtension
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.*
import org.springframework.test.web.servlet.setup.MockMvcBuilders

@ExtendWith(MockitoExtension::class)
class MonitoringTaskRestControllerTest {

    @Mock
    private lateinit var restService: MonitoringTasksRestService

    @InjectMocks
    private lateinit var controller: MonitoringTasksRestController

    @Captor
    private lateinit var requestArgumentCaptor: ArgumentCaptor<MonitoringTaskRequest>

    private val mapper = ObjectMapper()
    private val API_PATH = "/api/monitoring/tasks"
    private lateinit var mockMvc: MockMvc

    @BeforeEach
    fun setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(controller).build()
    }

    @Test
    fun `available monitoring tasks types`() {
        whenever(restService.types()).thenReturn(MonitoringTaskDataSet.typeDtos)
        mockMvc.get("${API_PATH}/types") {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
        }.andExpect {
            status { isOk }
            content { contentType(MediaType.APPLICATION_JSON) }
            content { json(mapper.writeValueAsString(MonitoringTaskDataSet.typeDtos)) }
        }
    }

    @Test
    fun `add monitoring task`() {
        whenever(restService.add(any())).thenReturn(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.dto())
        mockMvc.post(API_PATH) {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
            content = mapper.writeValueAsString(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.request())
        }.andExpect {
            status { isCreated }
            content { contentType(MediaType.APPLICATION_JSON) }
            content { json(mapper.writeValueAsString(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.dto())) }
        }
        verify(restService, times(1)).add(capture(requestArgumentCaptor))
        assertEquals(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.request(), requestArgumentCaptor.value)
    }

    @Test
    fun `edit monitoring task`() {
        whenever(restService.edit(any(), any())).thenReturn(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1_UPDATE.dto())
        mockMvc.put("${API_PATH}/${MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.id()}") {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
            content = mapper.writeValueAsString(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_2.request())
        }.andExpect {
            status { isOk }
            content { contentType(MediaType.APPLICATION_JSON) }
            content { json(mapper.writeValueAsString(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1_UPDATE.dto())) }
        }
        verify(restService, times(1))
                .edit(eq(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.id()), capture(requestArgumentCaptor))
        assertEquals(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_2.request(), requestArgumentCaptor.value)
    }

    @Test
    fun `get monitoring task`() {
        whenever(restService.get(eq(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.id())))
                .thenReturn(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.dto())
        mockMvc.get("${API_PATH}/${MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.id()}") {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
        }.andExpect {
            status { isOk }
            content { contentType(MediaType.APPLICATION_JSON) }
            content { json(mapper.writeValueAsString(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.dto())) }
        }
        verify(restService, times(1)).get(eq(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.id()))
    }

    @Test
    fun `get list monitoring tasks`() {
        val listApis = listOf(
                MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.dto(),
                MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_2.dto()
        )
        whenever(restService.list()).thenReturn(listApis)

        mockMvc.get("${API_PATH}") {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
        }.andExpect {
            status { isOk }
            content { contentType(MediaType.APPLICATION_JSON) }
            content { json(mapper.writeValueAsString(listApis)) }
        }
        verify(restService, times(1)).list()
    }

    @Test
    fun `delete mobitoring task`() {
        mockMvc.delete("${API_PATH}/${MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.id}") {
            contentType = MediaType.APPLICATION_JSON
            accept = MediaType.APPLICATION_JSON
        }.andExpect {
            status { isNoContent }
        }
        verify(restService, times(1))
                .delete(eq(MonitoringTaskDataSet.MonitoringTasks.MONITORING_TASK_1.id))
    }

}
