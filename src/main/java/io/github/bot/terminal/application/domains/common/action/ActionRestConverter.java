package io.github.bot.terminal.application.domains.common.action;


import io.github.bot.terminal.application.domains.common.action.dto.ActionDTO;
import io.github.bot.terminal.application.domains.common.action.dto.SqlSelectAsTextActionDTO;
import io.github.bot.terminal.application.domains.common.action.entity.ActionDetails;
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsTextActionDetails;
import io.github.bot.terminal.application.domains.common.action.requests.ActionRequest;
import io.github.bot.terminal.application.domains.common.action.requests.SqlSelectAsTextActionRequest;
import io.github.bot.terminal.application.domains.common.action.values.ActionType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class ActionRestConverter {

    public ActionDetails mapToDetails(ActionRequest request) {
        if (ActionType.SQL_SELECT_AS_TEXT.name().equals(request.getType())) {
            return mapToDetails((SqlSelectAsTextActionRequest) request);
        }
        throw new IllegalArgumentException("Unknown type: " + request.getType());
    }

    public SqlSelectAsTextActionDetails mapToDetails(SqlSelectAsTextActionRequest request) {
        SqlSelectAsTextActionDetails details = new SqlSelectAsTextActionDetails();
        details.setType(ActionType.SQL_SELECT_AS_TEXT);
        details.setDbConnectionId(request.getDbConnectionId());
        details.setSelect(request.getSelect());
        details.setResultTemplate(request.getResultTemplate());
        return details;
    }

    public ActionDTO mapToDto(ActionDetails details) {
        if (ActionType.SQL_SELECT_AS_TEXT.equals(details.getType())) {
            return mapToDto((SqlSelectAsTextActionDetails) details);
        }
        throw new IllegalArgumentException("Unknown type: " + details.getType());
    }

    public SqlSelectAsTextActionDTO mapToDto(SqlSelectAsTextActionDetails details) {
        SqlSelectAsTextActionDTO dto = new SqlSelectAsTextActionDTO();
        dto.setDbConnectionId(details.getDbConnectionId());
        dto.setSelect(details.getSelect());
        dto.setResultTemplate(details.getResultTemplate());
        dto.setType(details.getType().name());
        return dto;
    }

}
