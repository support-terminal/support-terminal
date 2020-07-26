package io.github.bot.terminal.application.domains.bot_commands;

import io.github.bot.terminal.application.domains.bot_commands.repository.BotCommandDetails;
import io.github.bot.terminal.application.domains.bot_commands.rest.dto.BotCommandDTO;
import io.github.bot.terminal.application.domains.bot_commands.rest.requests.BotCommandRequest;
import io.github.bot.terminal.application.domains.bot_commands.values.BotCommandState;
import io.github.bot.terminal.application.domains.common.action.dto.SqlSelectAsTextActionDTO;
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsTextActionDetails;
import io.github.bot.terminal.application.domains.common.action.requests.SqlSelectAsTextActionRequest;
import io.github.bot.terminal.application.domains.common.action.values.ActionType;

import java.util.Collections;
import java.util.List;
import java.util.UUID;

public class BotCommandsTestHelper {

    public ActionType type = ActionType.SQL_SELECT_AS_TEXT;
    public ActionType type2 = ActionType.SQL_SELECT_AS_TEXT;
    public String select = UUID.randomUUID().toString();
    public String dbConnectionId = UUID.randomUUID().toString();
    public String resultTemplate = UUID.randomUUID().toString();
    public String id = UUID.randomUUID().toString();
    public String name = UUID.randomUUID().toString();
    public String cmd = UUID.randomUUID().toString();
    public List<String> botIds = Collections.singletonList(UUID.randomUUID().toString());
    public BotCommandState state = BotCommandState.ENABLED;

    public String select2 = UUID.randomUUID().toString();
    public String dbConnectionId2 = UUID.randomUUID().toString();
    public String resultTemplate2 = UUID.randomUUID().toString();
    public String id2 = UUID.randomUUID().toString();
    public String name2 = UUID.randomUUID().toString();
    public String cmd2 = UUID.randomUUID().toString();
    public List<String> botIds2 = Collections.singletonList(UUID.randomUUID().toString());
    public BotCommandState state2 = BotCommandState.DISABLED;


    public BotCommandDetails getSqlAsSelectBotCommandDetails1() {
        SqlSelectAsTextActionDetails actionDetails = new SqlSelectAsTextActionDetails();
        actionDetails.setType(ActionType.SQL_SELECT_AS_TEXT);
        actionDetails.setDbConnectionId(dbConnectionId);
        actionDetails.setSelect(select);
        actionDetails.setResultTemplate(resultTemplate);

        BotCommandDetails details = new BotCommandDetails();
        details.setId(id);
        details.setCmd(cmd);
        details.setName(name);
        details.setBotIds(botIds);
        details.setState(state);
        details.setActionDetails(actionDetails);
        return details;
    }

    public BotCommandDetails getSqlAsSelectBotCommandDetails2() {
        SqlSelectAsTextActionDetails actionDetails2 = new SqlSelectAsTextActionDetails();
        actionDetails2.setType(ActionType.SQL_SELECT_AS_TEXT);
        actionDetails2.setDbConnectionId(dbConnectionId2);
        actionDetails2.setSelect(select2);
        actionDetails2.setResultTemplate(resultTemplate2);

        BotCommandDetails details2 = new BotCommandDetails();
        details2.setId(id);
        details2.setCmd(cmd2);
        details2.setName(name2);
        details2.setBotIds(botIds2);
        details2.setState(state2);
        details2.setActionDetails(actionDetails2);
        return details2;
    }

    public BotCommandDTO getSqlAsSelectBotCommandDto1() {
        SqlSelectAsTextActionDTO actionDTO = new SqlSelectAsTextActionDTO();
        actionDTO.setType(ActionType.SQL_SELECT_AS_TEXT.name());
        actionDTO.setDbConnectionId(dbConnectionId);
        actionDTO.setSelect(select);
        actionDTO.setResultTemplate(resultTemplate);

        BotCommandDTO dto = new BotCommandDTO();
        dto.setId(id);
        dto.setCmd(cmd);
        dto.setName(name);
        dto.setBotIds(botIds);
        dto.setState(state.name());
        dto.setAction(actionDTO);
        return dto;
    }

    public BotCommandDTO getSqlAsSelectBotCommandDto2() {
        SqlSelectAsTextActionDTO actionDTO2 = new SqlSelectAsTextActionDTO();
        actionDTO2.setType(ActionType.SQL_SELECT_AS_TEXT.name());
        actionDTO2.setDbConnectionId(dbConnectionId2);
        actionDTO2.setSelect(select2);
        actionDTO2.setResultTemplate(resultTemplate2);

        BotCommandDTO dto2 = new BotCommandDTO();
        dto2.setId(id2);
        dto2.setCmd(cmd2);
        dto2.setName(name2);
        dto2.setBotIds(botIds2);
        dto2.setState(state2.name());
        dto2.setAction(actionDTO2);
        return dto2;
    }

    public BotCommandRequest getSqlAsSelectBotCommandRequest1() {
        SqlSelectAsTextActionRequest actionRequest = new SqlSelectAsTextActionRequest();
        actionRequest.setType(ActionType.SQL_SELECT_AS_TEXT.name());
        actionRequest.setDbConnectionId(dbConnectionId);
        actionRequest.setSelect(select);
        actionRequest.setResultTemplate(resultTemplate);

        BotCommandRequest request = new BotCommandRequest();
        request.setCmd(cmd);
        request.setName(name);
        request.setBotIds(botIds);
        request.setState(state.name());
        request.setAction(actionRequest);
        return request;
    }

    public BotCommandRequest getSqlAsSelectBotCommandRequest2() {
        SqlSelectAsTextActionRequest action = new SqlSelectAsTextActionRequest();
        action.setType(ActionType.SQL_SELECT_AS_TEXT.name());
        action.setDbConnectionId(dbConnectionId2);
        action.setSelect(select2);
        action.setResultTemplate(resultTemplate2);

        BotCommandRequest request = new BotCommandRequest();
        request.setCmd(cmd2);
        request.setName(name2);
        request.setBotIds(botIds2);
        request.setState(state2.name());
        request.setAction(action);
        return request;
    }
}