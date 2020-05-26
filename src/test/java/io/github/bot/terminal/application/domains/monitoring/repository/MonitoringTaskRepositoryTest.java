package io.github.bot.terminal.application.domains.monitoring.repository;

import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsOneNumberValueActionDetails;
import io.github.bot.terminal.application.domains.monitoring.MonitoringTasksRepositoryTestConfig;
import io.github.bot.terminal.application.domains.monitoring.MonitoringTasksTestHelper;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(SpringExtension.class)
@Import(MonitoringTasksRepositoryTestConfig.class)
class MonitoringTaskRepositoryTest extends MonitoringTasksTestHelper {

    @Autowired
    private MonitoringTaskRepository repository;

    @AfterEach
    public void clean() {
        repository.findAll().stream().forEach(d -> repository.deleteById(d.getId()));
    }


    @Test
    public void addMonitoringTaskSqlSelectAsOneNumberValueDetails() {
        MonitoringTaskDetails details = getMonitoringTaskSqlSelectAsOneNumberValueDetails1();
        repository.add(details);

        MonitoringTaskDetails byId = repository.findById(details.getId()).get();
        assertEquals(details.getId(), byId.getId());
        assertEquals(name1, byId.getName());
        assertEquals(state1, byId.getState());
        assertEquals(cron1.getCron(), byId.getCron());

        SqlSelectAsOneNumberValueActionDetails actionDetails
                = (SqlSelectAsOneNumberValueActionDetails) byId.getAction();
        assertEquals(actionType1, actionDetails.getType());
        assertEquals(select1, actionDetails.getSelect());
        assertEquals(dbConnectionId1, actionDetails.getDbConnectionId());

        assertEquals(conditionType1, byId.getConditions().get(0).getConditionType());
        assertEquals(expectedValue1, byId.getConditions().get(0).getExpectedValue());

        assertEquals(notificationApiId1, byId.getNotifyList().get(0).getNotificationApiId());
        assertEquals(messageTemplate1, byId.getNotifyList().get(0).getMessageTemplate());


    }


}