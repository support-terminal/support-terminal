package io.github.bot.terminal.application.domains.monitoring.rest;

import io.github.bot.terminal.application.domains.common.action.ActionRestConverter;
import io.github.bot.terminal.application.domains.common.action.dto.SqlSelectAsOneNumberValueActionDTO;
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsOneNumberValueActionDetails;
import io.github.bot.terminal.application.domains.common.conditions.ConditionRestConverter;
import io.github.bot.terminal.application.domains.common.notify.NotifyRestConverter;
import io.github.bot.terminal.application.domains.monitoring.MonitoringTasksTestHelper;
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskDetails;
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskRepository;
import io.github.bot.terminal.application.domains.monitoring.rest.dto.MonitoringTaskDTO;
import io.github.bot.terminal.application.domains.monitoring.rest.requests.MonitoringTaskRequest;
import io.github.bot.terminal.application.domains.workers.MonitoringTasksWorker;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;


@ExtendWith(MockitoExtension.class)
class MonitoringTasksRestServiceTest extends MonitoringTasksTestHelper {

    private ActionRestConverter actionConverter = new ActionRestConverter();
    private ConditionRestConverter conditionRestConverter = new ConditionRestConverter();
    private NotifyRestConverter notifyRestConverter = new NotifyRestConverter();
    private MonitoringTasksRestConverter converter
            = spy(new MonitoringTasksRestConverter(actionConverter,
            conditionRestConverter, notifyRestConverter));
    @Mock
    private MonitoringTaskRepository repository;
    @Mock
    private MonitoringTasksWorker worker;
    private MonitoringTasksRestService service;

    @Captor
    ArgumentCaptor<MonitoringTaskDetails> monitoringTaskDetailsCaptor;


    @BeforeEach
    public void inti() {
        service = new MonitoringTasksRestService(repository, converter, worker);
    }

    @Test
    public void addMonitoringTaskSqlSelectAsOneNumberValue(){
        MonitoringTaskRequest request = getMonitoringTaskRequestSqlAsSelectOneNumber1();
        doAnswer(invocation ->
                ((MonitoringTaskDetails) invocation.getArgument(0)).setId(id1)
        ).when(repository).add(any());

        MonitoringTaskDTO dto1 = service.add(request);
        assertEquals(id1, dto1.getId());
        assertEquals(name1, dto1.getName());
        assertEquals(state1.name(), dto1.getState());
        assertEquals(cron1.getCron(), dto1.getCron());

        SqlSelectAsOneNumberValueActionDTO actionDto
                = (SqlSelectAsOneNumberValueActionDTO) dto1.getAction();
        assertEquals(actionType1.name(), actionDto.getType());
        assertEquals(select1, actionDto.getSelect());
        assertEquals(dbConnectionId1, actionDto.getDbConnectionId());

        assertEquals(conditionType1.name(), dto1.getConditions().get(0).getType());
        assertEquals(expectedValue1, dto1.getConditions().get(0).getExpectedValue());

        assertEquals(notificationApiId1, dto1.getNotifyList().get(0).getNotificationApiId());
        assertEquals(messageTemplate1, dto1.getNotifyList().get(0).getMessageTemplate());

        verify(repository, times(1)).add(monitoringTaskDetailsCaptor.capture());
        MonitoringTaskDetails details = monitoringTaskDetailsCaptor.getValue();
        assertEquals(id1, details.getId());
        assertEquals(name1, details.getName());
        assertEquals(state1, details.getState());
        assertEquals(cron1.getCron(), details.getCron());

        SqlSelectAsOneNumberValueActionDetails actionDetails
                = (SqlSelectAsOneNumberValueActionDetails) details.getActionDetails();
        assertEquals(actionType1, actionDetails.getType());
        assertEquals(select1, actionDetails.getSelect());
        assertEquals(dbConnectionId1, actionDetails.getDbConnectionId());

        assertEquals(conditionType1, details.getConditions().get(0).getConditionType());
        assertEquals(expectedValue1, details.getConditions().get(0).getExpectedValue());

        assertEquals(notificationApiId1, details.getNotifyList().get(0).getNotificationApiId());
        assertEquals(messageTemplate1, details.getNotifyList().get(0).getMessageTemplate());

        verify(worker, times(1)).runRefreshSchedulers();
    }

}