/*
package io.github.bot.terminal.application.domains.monitoring.rest

import com.fasterxml.jackson.databind.ObjectMapper
import io.github.bot.terminal.application.domains.common.action.requests.SqlSelectAsOneNumberValueActionRequest
import io.github.bot.terminal.application.domains.monitoring.MonitoringTasksTestHelper
import io.github.bot.terminal.application.domains.monitoring.rest.dto.MonitoringTaskDTO
import io.github.bot.terminal.application.domains.monitoring.rest.requests.MonitoringTaskRequest
import org.hamcrest.core.Is
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.*
import org.mockito.junit.jupiter.MockitoExtension
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import java.util.*

@ExtendWith(MockitoExtension::class)
internal class MonitoringTasksRestControllerTest : MonitoringTasksTestHelper() {
    @Mock
    private val service: MonitoringTasksRestService? = null

    @InjectMocks
    private val controller: MonitoringTasksRestController? = null

    @Captor
    var monitoringTaskRequestCaptor: ArgumentCaptor<MonitoringTaskRequest>? = null
    private val mapper = ObjectMapper()
    private var mockMvc: MockMvc? = null

    @BeforeEach
    fun setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(controller).build()
    }

    @Test
    @Throws(Exception::class)
    fun addMonitoringSqlSelectAsOneNumberValue() {
        val dto = monitoringTaskSqlSelectAsOneNumberValueDto1
        Mockito.`when`(service!!.add(ArgumentMatchers.any())).thenReturn(dto)
        val request = monitoringTaskRequestSqlAsSelectOneNumber1
        mockMvc!!.perform(MockMvcRequestBuilders.post("/api/monitoring/tasks")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isCreated)
                .andExpect(MockMvcResultMatchers.jsonPath("$.id", Is.`is`(id1)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.name", Is.`is`(name1)))
                .andExpect(jsonPath("$.state", `is`(state1.name())))
                .andExpect(MockMvcResultMatchers.jsonPath("$.action.type", Is.`is`(actionType1.name)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.action.select", Is.`is`(select1)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.action.dbConnectionId", Is.`is`(dbConnectionId1)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.cron", Is.`is`(cron1.cron)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.conditions[0].type", Is.`is`(conditionType1.name)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.conditions[0].expectedValue", Is.`is`(expectedValue1)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.notifyList[0].notificationApiId", Is.`is`(notificationApiId1)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.notifyList[0].messageTemplate", Is.`is`(messageTemplate1)))
        Mockito.verify(service, Mockito.times(1))
                .add(monitoringTaskRequestCaptor!!.capture())
        val botReqPassed = monitoringTaskRequestCaptor!!.value
        Assertions.assertEquals(name1, botReqPassed.name)
        assertEquals(state1.name(), botReqPassed.getState())
        Assertions.assertEquals(cron1.cron, botReqPassed.cron)
        val actionRequest = botReqPassed.action as SqlSelectAsOneNumberValueActionRequest
        Assertions.assertEquals(actionType1.name, actionRequest.type)
        Assertions.assertEquals(select1, actionRequest.select)
        Assertions.assertEquals(dbConnectionId1, actionRequest.dbConnectionId)
        Assertions.assertEquals(conditionType1.name, botReqPassed.conditions[0].type)
        Assertions.assertEquals(expectedValue1, botReqPassed.conditions[0].expectedValue)
        Assertions.assertEquals(notificationApiId1, botReqPassed.notifyList[0].notificationApiId)
        Assertions.assertEquals(messageTemplate1, botReqPassed.notifyList[0].messageTemplate)
    }

    @Test
    @Throws(Exception::class)
    fun editMonitoringSqlSelectAsOneNumberValue() {
        val dto = monitoringTaskSqlSelectAsOneNumberValueDto1
        Mockito.`when`(service!!.edit(ArgumentMatchers.eq(id1), ArgumentMatchers.any())).thenReturn(dto)
        val request = monitoringTaskRequestSqlAsSelectOneNumber1
        mockMvc!!.perform(MockMvcRequestBuilders.put("/api/monitoring/tasks/$id1")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andExpect(MockMvcResultMatchers.jsonPath("$.id", Is.`is`(id1)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.name", Is.`is`(name1)))
                .andExpect(jsonPath("$.state", `is`(state1.name())))
                .andExpect(MockMvcResultMatchers.jsonPath("$.action.type", Is.`is`(actionType1.name)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.action.select", Is.`is`(select1)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.action.dbConnectionId", Is.`is`(dbConnectionId1)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.cron", Is.`is`(cron1.cron)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.conditions[0].type", Is.`is`(conditionType1.name)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.conditions[0].expectedValue", Is.`is`(expectedValue1)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.notifyList[0].notificationApiId", Is.`is`(notificationApiId1)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.notifyList[0].messageTemplate", Is.`is`(messageTemplate1)))
        Mockito.verify(service, Mockito.times(1))
                .edit(ArgumentMatchers.eq(id1), monitoringTaskRequestCaptor!!.capture())
        val botReqPassed = monitoringTaskRequestCaptor!!.value
        Assertions.assertEquals(name1, botReqPassed.name)
        assertEquals(state1.name(), botReqPassed.getState())
        Assertions.assertEquals(cron1.cron, botReqPassed.cron)
        val actionRequest = botReqPassed.action as SqlSelectAsOneNumberValueActionRequest
        Assertions.assertEquals(actionType1.name, actionRequest.type)
        Assertions.assertEquals(select1, actionRequest.select)
        Assertions.assertEquals(dbConnectionId1, actionRequest.dbConnectionId)
        Assertions.assertEquals(conditionType1.name, botReqPassed.conditions[0].type)
        Assertions.assertEquals(expectedValue1, botReqPassed.conditions[0].expectedValue)
        Assertions.assertEquals(notificationApiId1, botReqPassed.notifyList[0].notificationApiId)
        Assertions.assertEquals(messageTemplate1, botReqPassed.notifyList[0].messageTemplate)
    }

    @get:Throws(Exception::class)
    @get:Test
    val monitoringSqlSelectAsOneNumberValue: Unit
        get() {
            val dto = monitoringTaskSqlSelectAsOneNumberValueDto1
            Mockito.`when`(service!![ArgumentMatchers.eq(id1)]).thenReturn(dto)
            mockMvc!!.perform(MockMvcRequestBuilders.get("/api/monitoring/tasks/$id1")
                    .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(MockMvcResultMatchers.status().isOk)
                    .andExpect(MockMvcResultMatchers.jsonPath("$.id", Is.`is`(id1)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.name", Is.`is`(name1)))
                    .andExpect(jsonPath("$.state", `is`(state1.name())))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.action.type", Is.`is`(actionType1.name)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.action.select", Is.`is`(select1)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.action.dbConnectionId", Is.`is`(dbConnectionId1)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.cron", Is.`is`(cron1.cron)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.conditions[0].type", Is.`is`(conditionType1.name)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.conditions[0].expectedValue", Is.`is`(expectedValue1)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.notifyList[0].notificationApiId", Is.`is`(notificationApiId1)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.notifyList[0].messageTemplate", Is.`is`(messageTemplate1)))
            Mockito.verify(service, Mockito.times(1))
                    .get(ArgumentMatchers.eq(id1))
        }

    @Test
    @Throws(Exception::class)
    fun deleteMonitoringTask() {
        mockMvc!!.perform(MockMvcRequestBuilders.delete("/api/monitoring/tasks/$id1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isNoContent)
        Mockito.verify(service, Mockito.times(1))
                .delete(ArgumentMatchers.eq(id1))
    }

    @get:Throws(Exception::class)
    @get:Test
    val list: Unit
        get() {
            val dto1 = monitoringTaskSqlSelectAsOneNumberValueDto1
            val dto2 = monitoringTaskSqlSelectAsOneNumberValueDto2
            val c: MutableList<MonitoringTaskDTO?> = ArrayList()
            c.add(dto1)
            c.add(dto2)
            Mockito.`when`<List<MonitoringTaskDTO?>>(service!!.list()).thenReturn(c)
            mockMvc!!.perform(MockMvcRequestBuilders.get("/api/monitoring/tasks")
                    .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(MockMvcResultMatchers.status().isOk)
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].id", Is.`is`(id1)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].name", Is.`is`(name1)))
                    .andExpect(jsonPath("$[0].state", `is`(state1.name())))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].action.type", Is.`is`(actionType1.name)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].action.select", Is.`is`(select1)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].action.dbConnectionId", Is.`is`(dbConnectionId1)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].cron", Is.`is`(cron1.cron)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].conditions[0].type", Is.`is`(conditionType1.name)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].conditions[0].expectedValue", Is.`is`(expectedValue1)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].notifyList[0].notificationApiId", Is.`is`(notificationApiId1)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[0].notifyList[0].messageTemplate", Is.`is`(messageTemplate1)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].id", Is.`is`(id2)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].name", Is.`is`(name2)))
                    .andExpect(jsonPath("$[1].state", `is`(state2.name())))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].action.type", Is.`is`(actionType2.name)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].action.select", Is.`is`(select2)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].action.dbConnectionId", Is.`is`(dbConnectionId2)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].cron", Is.`is`(cron2.cron)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].conditions[0].type", Is.`is`(conditionType2.name)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].conditions[0].expectedValue", Is.`is`(expectedValue2)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].notifyList[0].notificationApiId", Is.`is`(notificationApiId2)))
                    .andExpect(MockMvcResultMatchers.jsonPath("$[1].notifyList[0].messageTemplate", Is.`is`(messageTemplate2)))
        }
}*/
