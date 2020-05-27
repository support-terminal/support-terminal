package io.github.bot.terminal.application.domains.monitoring;

import io.github.bot.terminal.application.domains.common.action.dto.SqlSelectAsOneNumberValueActionDTO;
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsOneNumberValueActionDetails;
import io.github.bot.terminal.application.domains.common.action.requests.SqlSelectAsOneNumberValueActionRequest;
import io.github.bot.terminal.application.domains.common.action.values.ActionType;
import io.github.bot.terminal.application.domains.common.conditions.dto.ConditionDTO;
import io.github.bot.terminal.application.domains.common.conditions.entity.ConditionDetails;
import io.github.bot.terminal.application.domains.common.conditions.requests.ConditionRequest;
import io.github.bot.terminal.application.domains.common.conditions.values.ConditionType;
import io.github.bot.terminal.application.domains.common.cron.values.Cron;
import io.github.bot.terminal.application.domains.common.notify.dto.NotifyDTO;
import io.github.bot.terminal.application.domains.common.notify.entity.NotifyDetails;
import io.github.bot.terminal.application.domains.common.notify.requests.NotifyRequest;
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskDetails;
import io.github.bot.terminal.application.domains.monitoring.rest.dto.MonitoringTaskDTO;
import io.github.bot.terminal.application.domains.monitoring.rest.requests.MonitoringTaskRequest;
import io.github.bot.terminal.application.domains.monitoring.values.MonitoringTaskState;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class MonitoringTasksTestHelper {

    public String id1 = UUID.randomUUID().toString();
    public String name1 = UUID.randomUUID().toString();
    public MonitoringTaskState state1 = MonitoringTaskState.ENABLED;
    public String select1 = UUID.randomUUID().toString();
    public String dbConnectionId1 = UUID.randomUUID().toString();
    public String notificationApiId1 = UUID.randomUUID().toString();
    public String messageTemplate1 = UUID.randomUUID().toString();
    public Double expectedValue1 = 1.2D;
    public ActionType actionType1 = ActionType.SQL_SELECT_AS_ONE_NUMBER;

    public ConditionType conditionType1 = ConditionType.NUMERIC_LESS_THAN;
    public Cron cron1 = Cron.EVERY_1_MINUTE;

    public String id2 = UUID.randomUUID().toString();
    public String name2 = UUID.randomUUID().toString();
    public MonitoringTaskState state2 = MonitoringTaskState.DISABLED;
    public String select2 = UUID.randomUUID().toString();
    public String dbConnectionId2 = UUID.randomUUID().toString();
    public String notificationApiId2 = UUID.randomUUID().toString();
    public String messageTemplate2 = UUID.randomUUID().toString();
    public Double expectedValue2 = 3.2D;
    public ActionType actionType2 = ActionType.SQL_SELECT_AS_ONE_NUMBER;

    public ConditionType conditionType2 = ConditionType.NUMERIC_LESS_THAN;
    public Cron cron2 = Cron.EVERY_5_MINUTES;


    public MonitoringTaskDTO getMonitoringTaskSqlSelectAsOneNumberValueDto1() {
        SqlSelectAsOneNumberValueActionDTO actionDTO = new SqlSelectAsOneNumberValueActionDTO();
        actionDTO.setDbConnectionId(dbConnectionId1);
        actionDTO.setSelect(select1);
        actionDTO.setType(actionType1.name());

        List<ConditionDTO> conditions = new ArrayList<>();
        conditions.add(new ConditionDTO().setType(conditionType1.name()).setExpectedValue(expectedValue1));

        List<NotifyDTO> notifyList = new ArrayList<>();
        notifyList.add(new NotifyDTO()
                .setMessageTemplate(messageTemplate1)
                .setNotificationApiId(notificationApiId1));

        MonitoringTaskDTO dto = new MonitoringTaskDTO();
        dto.setId(id1);
        dto.setName(name1);
        dto.setState(state1.name());
        dto.setAction(actionDTO);
        dto.setCron(cron1.getCron());
        dto.setConditions(conditions);
        dto.setNotifyList(notifyList);
        return dto;
    }

    public MonitoringTaskDTO getMonitoringTaskSqlSelectAsOneNumberValueDto2() {
        SqlSelectAsOneNumberValueActionDTO actionDTO = new SqlSelectAsOneNumberValueActionDTO();
        actionDTO.setDbConnectionId(dbConnectionId2);
        actionDTO.setSelect(select2);
        actionDTO.setType(actionType2.name());

        List<ConditionDTO> conditions = new ArrayList<>();
        conditions.add(new ConditionDTO().setType(conditionType2.name())
                .setExpectedValue(expectedValue2));

        List<NotifyDTO> notifyList = new ArrayList<>();
        notifyList.add(new NotifyDTO()
                .setMessageTemplate(messageTemplate2)
                .setNotificationApiId(notificationApiId2));

        MonitoringTaskDTO dto = new MonitoringTaskDTO();
        dto.setId(id2);
        dto.setName(name2);
        dto.setState(state2.name());
        dto.setAction(actionDTO);
        dto.setCron(cron2.getCron());
        dto.setConditions(conditions);
        dto.setNotifyList(notifyList);
        return dto;
    }

    public MonitoringTaskRequest getMonitoringTaskRequestSqlAsSelectOneNumber1() {
        SqlSelectAsOneNumberValueActionRequest action = new SqlSelectAsOneNumberValueActionRequest();
        action.setType(actionType1.name());
        action.setDbConnectionId(dbConnectionId1);
        action.setSelect(select1);

        List<ConditionRequest> conditions = new ArrayList<>();
        conditions.add(new ConditionRequest().setType(conditionType1.name()).setExpectedValue(expectedValue1));

        List<NotifyRequest> notifyList = new ArrayList<>();
        notifyList.add(new NotifyRequest()
                .setMessageTemplate(messageTemplate1)
                .setNotificationApiId(notificationApiId1));

        MonitoringTaskRequest request = new MonitoringTaskRequest();
        request.setName(name1);
        request.setState(state1.name());
        request.setAction(action);
        request.setCron(cron1.getCron());
        request.setNotifyList(notifyList);
        request.setConditions(conditions);
        return request;
    }

    public MonitoringTaskDetails getMonitoringTaskSqlSelectAsOneNumberValueDetails1() {
        SqlSelectAsOneNumberValueActionDetails actionDetails = new SqlSelectAsOneNumberValueActionDetails();
        actionDetails.setType(ActionType.SQL_SELECT_AS_ONE_NUMBER);
        actionDetails.setDbConnectionId(dbConnectionId1);
        actionDetails.setSelect(select1);

        List<ConditionDetails> conditions = new ArrayList<>();
        conditions.add(new ConditionDetails()
                .setConditionType(conditionType1)
                .setExpectedValue(expectedValue1));

        List<NotifyDetails> notifyList = new ArrayList<>();
        notifyList.add(new NotifyDetails()
                .setMessageTemplate(messageTemplate1)
                .setNotificationApiId(notificationApiId1));

        MonitoringTaskDetails details = new MonitoringTaskDetails();
        details.setName(name1);
        details.setState(state1);
        details.setActionDetails(actionDetails);
        details.setCron(cron1.getCron());
        details.setNotifyList(notifyList);
        details.setConditions(conditions);
        return details;
    }


}