package io.github.bot.terminal.application.domains.monitoring.rest;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.bot.terminal.application.domains.common.action.requests.SqlSelectAsOneNumberValueActionRequest;
import io.github.bot.terminal.application.domains.monitoring.MonitoringTasksTestHelper;
import io.github.bot.terminal.application.domains.monitoring.rest.dto.MonitoringTaskDTO;
import io.github.bot.terminal.application.domains.monitoring.rest.requests.MonitoringTaskRequest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.core.Is.is;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@ExtendWith(MockitoExtension.class)
class MonitoringTasksRestControllerTest extends MonitoringTasksTestHelper {

    @Mock
    private MonitoringTasksRestService service;

    @InjectMocks
    private MonitoringTasksRestController controller;

    @Captor
    ArgumentCaptor<MonitoringTaskRequest> monitoringTaskRequestCaptor;

    private ObjectMapper mapper = new ObjectMapper();

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }

    @Test
    public void addMonitoringSqlSelectAsOneNumberValue() throws Exception {

        MonitoringTaskDTO dto = getMonitoringTaskSqlSelectAsOneNumberValueDto1();
        when(service.add(any())).thenReturn(dto);

        MonitoringTaskRequest request = getMonitoringTaskRequestSqlAsSelectOneNumber1();

        this.mockMvc.perform(post("/api/monitoring/tasks")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())

                .andExpect(jsonPath("$.id", is(id1)))
                .andExpect(jsonPath("$.name", is(name1)))
                .andExpect(jsonPath("$.state", is(state1.name())))
                .andExpect(jsonPath("$.action.type", is(actionType1.name())))
                .andExpect(jsonPath("$.action.select", is(select1)))
                .andExpect(jsonPath("$.action.dbConnectionId", is(dbConnectionId1)))
                .andExpect(jsonPath("$.cron", is(cron1.getCron())))
                .andExpect(jsonPath("$.conditions[0].type", is(conditionType1.name())))
                .andExpect(jsonPath("$.conditions[0].expectedValue", is(expectedValue1)))
                .andExpect(jsonPath("$.notifyList[0].notificationApiId", is(notificationApiId1)))
                .andExpect(jsonPath("$.notifyList[0].messageTemplate", is(messageTemplate1)));

        verify(service, times(1))
                .add(monitoringTaskRequestCaptor.capture());
        MonitoringTaskRequest botReqPassed = monitoringTaskRequestCaptor.getValue();
        assertEquals(name1, botReqPassed.getName());
        assertEquals(state1.name(), botReqPassed.getState());
        assertEquals(cron1.getCron(), botReqPassed.getCron());

        SqlSelectAsOneNumberValueActionRequest actionRequest
                = (SqlSelectAsOneNumberValueActionRequest) botReqPassed.getAction();
        assertEquals(actionType1.name(), actionRequest.getType());
        assertEquals(select1, actionRequest.getSelect());
        assertEquals(dbConnectionId1, actionRequest.getDbConnectionId());

        assertEquals(conditionType1.name(), botReqPassed.getConditions().get(0).getType());
        assertEquals(expectedValue1, botReqPassed.getConditions().get(0).getExpectedValue());

        assertEquals(notificationApiId1, botReqPassed.getNotifyList().get(0).getNotificationApiId());
        assertEquals(messageTemplate1, botReqPassed.getNotifyList().get(0).getMessageTemplate());

    }

    @Test
    public void editMonitoringSqlSelectAsOneNumberValue() throws Exception {

        MonitoringTaskDTO dto = getMonitoringTaskSqlSelectAsOneNumberValueDto1();
        when(service.edit(eq(id1), any())).thenReturn(dto);

        MonitoringTaskRequest request = getMonitoringTaskRequestSqlAsSelectOneNumber1();

        this.mockMvc.perform(put("/api/monitoring/tasks/"+id1)
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())

                .andExpect(jsonPath("$.id", is(id1)))
                .andExpect(jsonPath("$.name", is(name1)))
                .andExpect(jsonPath("$.state", is(state1.name())))
                .andExpect(jsonPath("$.action.type", is(actionType1.name())))
                .andExpect(jsonPath("$.action.select", is(select1)))
                .andExpect(jsonPath("$.action.dbConnectionId", is(dbConnectionId1)))
                .andExpect(jsonPath("$.cron", is(cron1.getCron())))
                .andExpect(jsonPath("$.conditions[0].type", is(conditionType1.name())))
                .andExpect(jsonPath("$.conditions[0].expectedValue", is(expectedValue1)))
                .andExpect(jsonPath("$.notifyList[0].notificationApiId", is(notificationApiId1)))
                .andExpect(jsonPath("$.notifyList[0].messageTemplate", is(messageTemplate1)));

        verify(service, times(1))
                .edit(eq(id1), monitoringTaskRequestCaptor.capture());
        MonitoringTaskRequest botReqPassed = monitoringTaskRequestCaptor.getValue();
        assertEquals(name1, botReqPassed.getName());
        assertEquals(state1.name(), botReqPassed.getState());
        assertEquals(cron1.getCron(), botReqPassed.getCron());

        SqlSelectAsOneNumberValueActionRequest actionRequest
                = (SqlSelectAsOneNumberValueActionRequest) botReqPassed.getAction();
        assertEquals(actionType1.name(), actionRequest.getType());
        assertEquals(select1, actionRequest.getSelect());
        assertEquals(dbConnectionId1, actionRequest.getDbConnectionId());

        assertEquals(conditionType1.name(), botReqPassed.getConditions().get(0).getType());
        assertEquals(expectedValue1, botReqPassed.getConditions().get(0).getExpectedValue());

        assertEquals(notificationApiId1, botReqPassed.getNotifyList().get(0).getNotificationApiId());
        assertEquals(messageTemplate1, botReqPassed.getNotifyList().get(0).getMessageTemplate());

    }

    @Test
    public void getMonitoringSqlSelectAsOneNumberValue() throws Exception {

        MonitoringTaskDTO dto = getMonitoringTaskSqlSelectAsOneNumberValueDto1();
        when(service.get(eq(id1))).thenReturn(dto);

        this.mockMvc.perform(get("/api/monitoring/tasks/"+id1)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())

                .andExpect(jsonPath("$.id", is(id1)))
                .andExpect(jsonPath("$.name", is(name1)))
                .andExpect(jsonPath("$.state", is(state1.name())))
                .andExpect(jsonPath("$.action.type", is(actionType1.name())))
                .andExpect(jsonPath("$.action.select", is(select1)))
                .andExpect(jsonPath("$.action.dbConnectionId", is(dbConnectionId1)))
                .andExpect(jsonPath("$.cron", is(cron1.getCron())))
                .andExpect(jsonPath("$.conditions[0].type", is(conditionType1.name())))
                .andExpect(jsonPath("$.conditions[0].expectedValue", is(expectedValue1)))
                .andExpect(jsonPath("$.notifyList[0].notificationApiId", is(notificationApiId1)))
                .andExpect(jsonPath("$.notifyList[0].messageTemplate", is(messageTemplate1)));

        verify(service, times(1))
                .get(eq(id1));


    }

    @Test
    public void deleteMonitoringTask() throws Exception {
        this.mockMvc.perform(delete("/api/monitoring/tasks/"+id1)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNoContent());

        verify(service, times(1))
                .delete(eq(id1));
    }

    @Test
    public void getList() throws Exception {
        MonitoringTaskDTO dto1 = getMonitoringTaskSqlSelectAsOneNumberValueDto1();
        MonitoringTaskDTO dto2 = getMonitoringTaskSqlSelectAsOneNumberValueDto2();

        List<MonitoringTaskDTO> c = new ArrayList<>();
        c.add(dto1);
        c.add(dto2);

        when(service.list()).thenReturn(c);

        this.mockMvc.perform(get("/api/monitoring/tasks")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())

                .andExpect(jsonPath("$[0].id", is(id1)))
                .andExpect(jsonPath("$[0].name", is(name1)))
                .andExpect(jsonPath("$[0].state", is(state1.name())))
                .andExpect(jsonPath("$[0].action.type", is(actionType1.name())))
                .andExpect(jsonPath("$[0].action.select", is(select1)))
                .andExpect(jsonPath("$[0].action.dbConnectionId", is(dbConnectionId1)))
                .andExpect(jsonPath("$[0].cron", is(cron1.getCron())))
                .andExpect(jsonPath("$[0].conditions[0].type", is(conditionType1.name())))
                .andExpect(jsonPath("$[0].conditions[0].expectedValue", is(expectedValue1)))
                .andExpect(jsonPath("$[0].notifyList[0].notificationApiId", is(notificationApiId1)))
                .andExpect(jsonPath("$[0].notifyList[0].messageTemplate", is(messageTemplate1)))

                .andExpect(jsonPath("$[1].id", is(id2)))
                .andExpect(jsonPath("$[1].name", is(name2)))
                .andExpect(jsonPath("$[1].state", is(state2.name())))
                .andExpect(jsonPath("$[1].action.type", is(actionType2.name())))
                .andExpect(jsonPath("$[1].action.select", is(select2)))
                .andExpect(jsonPath("$[1].action.dbConnectionId", is(dbConnectionId2)))
                .andExpect(jsonPath("$[1].cron", is(cron2.getCron())))
                .andExpect(jsonPath("$[1].conditions[0].type", is(conditionType2.name())))
                .andExpect(jsonPath("$[1].conditions[0].expectedValue", is(expectedValue2)))
                .andExpect(jsonPath("$[1].notifyList[0].notificationApiId", is(notificationApiId2)))
                .andExpect(jsonPath("$[1].notifyList[0].messageTemplate", is(messageTemplate2)));

    }
}