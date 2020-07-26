/*
package io.github.bot.terminal.application.domains.monitoring

import io.github.bot.terminal.application.domains.common.action.dto.SqlSelectAsOneNumberValueActionDTO
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsOneNumberValueActionDetails
import io.github.bot.terminal.application.domains.common.action.requests.SqlSelectAsOneNumberValueActionRequest
import io.github.bot.terminal.application.domains.common.action.values.ActionType
import io.github.bot.terminal.application.domains.common.conditions.dto.ConditionDTO
import io.github.bot.terminal.application.domains.common.conditions.entity.ConditionDetails
import io.github.bot.terminal.application.domains.common.conditions.requests.ConditionRequest
import io.github.bot.terminal.application.domains.common.conditions.values.ConditionType
import io.github.bot.terminal.application.domains.common.cron.values.Cron
import io.github.bot.terminal.application.domains.common.notify.dto.NotifyDTO
import io.github.bot.terminal.application.domains.common.notify.entity.NotifyDetails
import io.github.bot.terminal.application.domains.common.notify.requests.NotifyRequest
import io.github.bot.terminal.application.domains.monitoring.repository.MonitoringTaskDetails
import io.github.bot.terminal.application.domains.monitoring.rest.dto.MonitoringTaskDTO
import io.github.bot.terminal.application.domains.monitoring.rest.requests.MonitoringTaskRequest
import io.github.bot.terminal.application.domains.monitoring.values.MonitoringTaskState
import java.util.*

open class MonitoringTasksTestHelper {
    var id1 = UUID.randomUUID().toString()
    var name1 = UUID.randomUUID().toString()
    var state1: MonitoringTaskState = MonitoringTaskState.ENABLED
    var select1 = UUID.randomUUID().toString()
    var dbConnectionId1 = UUID.randomUUID().toString()
    var notificationApiId1 = UUID.randomUUID().toString()
    var messageTemplate1 = UUID.randomUUID().toString()
    var expectedValue1 = 1.2
    var actionType1 = ActionType.SQL_SELECT_AS_ONE_NUMBER
    var conditionType1 = ConditionType.NUMERIC_LESS_THAN
    var cron1 = Cron.EVERY_1_MINUTE
    var id2 = UUID.randomUUID().toString()
    var name2 = UUID.randomUUID().toString()
    var state2: MonitoringTaskState = MonitoringTaskState.DISABLED
    var select2 = UUID.randomUUID().toString()
    var dbConnectionId2 = UUID.randomUUID().toString()
    var notificationApiId2 = UUID.randomUUID().toString()
    var messageTemplate2 = UUID.randomUUID().toString()
    var expectedValue2 = 3.2
    var actionType2 = ActionType.SQL_SELECT_AS_ONE_NUMBER
    var conditionType2 = ConditionType.NUMERIC_LESS_THAN
    var cron2 = Cron.EVERY_5_MINUTES
    val monitoringTaskSqlSelectAsOneNumberValueDto1: MonitoringTaskDTO
        get() {
            val actionDTO = SqlSelectAsOneNumberValueActionDTO()
            actionDTO.setDbConnectionId(dbConnectionId1)
            actionDTO.setSelect(select1)
            actionDTO.setType(actionType1.name)
            val conditions: MutableList<ConditionDTO> = ArrayList()
            conditions.add(ConditionDTO().setType(conditionType1.name).setExpectedValue(expectedValue1))
            val notifyList: MutableList<NotifyDTO> = ArrayList()
            notifyList.add(NotifyDTO()
                    .setMessageTemplate(messageTemplate1)
                    .setNotificationApiId(notificationApiId1))
            val dto = MonitoringTaskDTO()
            dto.setId(id1)
            dto.setName(name1)
            dto.setState(state1.name())
            dto.setAction(actionDTO)
            dto.setCron(cron1.cron)
            dto.setConditions(conditions)
            dto.setNotifyList(notifyList)
            return dto
        }

    val monitoringTaskSqlSelectAsOneNumberValueDto2: MonitoringTaskDTO
        get() {
            val actionDTO = SqlSelectAsOneNumberValueActionDTO()
            actionDTO.setDbConnectionId(dbConnectionId2)
            actionDTO.setSelect(select2)
            actionDTO.setType(actionType2.name)
            val conditions: MutableList<ConditionDTO> = ArrayList()
            conditions.add(ConditionDTO().setType(conditionType2.name)
                    .setExpectedValue(expectedValue2))
            val notifyList: MutableList<NotifyDTO> = ArrayList()
            notifyList.add(NotifyDTO()
                    .setMessageTemplate(messageTemplate2)
                    .setNotificationApiId(notificationApiId2))
            val dto = MonitoringTaskDTO()
            dto.setId(id2)
            dto.setName(name2)
            dto.setState(state2.name())
            dto.setAction(actionDTO)
            dto.setCron(cron2.cron)
            dto.setConditions(conditions)
            dto.setNotifyList(notifyList)
            return dto
        }

    val monitoringTaskRequestSqlAsSelectOneNumber1: MonitoringTaskRequest
        get() {
            val action = SqlSelectAsOneNumberValueActionRequest()
            action.type = actionType1.name
            action.setDbConnectionId(dbConnectionId1)
            action.setSelect(select1)
            val conditions: MutableList<ConditionRequest> = ArrayList()
            conditions.add(ConditionRequest().setType(conditionType1.name).setExpectedValue(expectedValue1))
            val notifyList: MutableList<NotifyRequest> = ArrayList()
            notifyList.add(messageTemplate1.also {
                NotifyRequest()
                        .messageTemplate = it
            }
                    .setNotificationApiId(notificationApiId1))
            val request = MonitoringTaskRequest()
            request.setName(name1)
            request.setState(state1.name())
            request.setAction(action)
            request.setCron(cron1.cron)
            request.setNotifyList(notifyList)
            request.setConditions(conditions)
            return request
        }

    val monitoringTaskSqlSelectAsOneNumberValueDetails1: MonitoringTaskDetails
        get() {
            val actionDetails = SqlSelectAsOneNumberValueActionDetails()
            actionDetails.setType(ActionType.SQL_SELECT_AS_ONE_NUMBER)
            actionDetails.dbConnectionId = dbConnectionId1
            actionDetails.select = select1
            val conditions: MutableList<ConditionDetails> = ArrayList()
            conditions.add(conditionType1.also {
                ConditionDetails()
                        .conditionType = it
            }
                    .setExpectedValue(expectedValue1))
            val notifyList: MutableList<NotifyDetails> = ArrayList()
            notifyList.add(messageTemplate1.also {
                NotifyDetails()
                        .messageTemplate = it
            }
                    .setNotificationApiId(notificationApiId1))
            val details = MonitoringTaskDetails()
            details.name = name1
            details.setState(state1)
            details.actionDetails = actionDetails
            details.cron = cron1.cron
            details.notifyList = notifyList
            details.conditions = conditions
            return details
        }
}*/
