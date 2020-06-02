package io.github.bot.terminal.application.domains.common.action;


import io.github.bot.terminal.application.domains.common.action.dto.ActionDTO;
import io.github.bot.terminal.application.domains.common.action.dto.SqlSelectAsExcelFileActionDTO;
import io.github.bot.terminal.application.domains.common.action.dto.SqlSelectAsOneNumberValueActionDTO;
import io.github.bot.terminal.application.domains.common.action.dto.SqlSelectAsTextActionDTO;
import io.github.bot.terminal.application.domains.common.action.entity.ActionDetails;
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsOneNumberValueActionDetails;
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsTextActionDetails;
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectInExcelFileActionDetails;
import io.github.bot.terminal.application.domains.common.action.requests.ActionRequest;
import io.github.bot.terminal.application.domains.common.action.requests.SqlSelectAsExcelFileActionRequest;
import io.github.bot.terminal.application.domains.common.action.requests.SqlSelectAsOneNumberValueActionRequest;
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
        if (ActionType.SQL_SELECT_IN_EXCEL_FILE.name().equals(request.getType())) {
            return mapToDetails((SqlSelectAsExcelFileActionRequest) request);
        }
        if (ActionType.SQL_SELECT_AS_ONE_NUMBER.name().equals(request.getType())) {
            return mapToDetails((SqlSelectAsOneNumberValueActionRequest) request);
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

    public SqlSelectInExcelFileActionDetails mapToDetails(SqlSelectAsExcelFileActionRequest request) {
        SqlSelectInExcelFileActionDetails details = new SqlSelectInExcelFileActionDetails();
        details.setType(ActionType.SQL_SELECT_IN_EXCEL_FILE);
        details.setDbConnectionId(request.getDbConnectionId());
        details.setSelect(request.getSelect());
        details.setFileNameTemplate(request.getFileNameTemplate());
        return details;
    }

    public SqlSelectAsOneNumberValueActionDetails mapToDetails(SqlSelectAsOneNumberValueActionRequest request) {
        SqlSelectAsOneNumberValueActionDetails details = new SqlSelectAsOneNumberValueActionDetails();
        details.setType(ActionType.SQL_SELECT_AS_ONE_NUMBER);
        details.setDbConnectionId(request.getDbConnectionId());
        details.setSelect(request.getSelect());
        return details;
    }

    public ActionDTO mapToDto(ActionDetails details) {
        if (ActionType.SQL_SELECT_AS_TEXT.equals(details.getType())) {
            return mapToDto((SqlSelectAsTextActionDetails) details);
        }
        if (ActionType.SQL_SELECT_IN_EXCEL_FILE.equals(details.getType())) {
            return mapToDto((SqlSelectInExcelFileActionDetails) details);
        }
        if (ActionType.SQL_SELECT_AS_ONE_NUMBER.equals(details.getType())) {
            return mapToDto((SqlSelectAsOneNumberValueActionDetails) details);
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

    public SqlSelectAsExcelFileActionDTO mapToDto(SqlSelectInExcelFileActionDetails details) {
        SqlSelectAsExcelFileActionDTO dto = new SqlSelectAsExcelFileActionDTO();
        dto.setDbConnectionId(details.getDbConnectionId());
        dto.setSelect(details.getSelect());
        dto.setFileNameTemplate(details.getFileNameTemplate());
        dto.setType(details.getType().name());
        return dto;
    }

    public SqlSelectAsOneNumberValueActionDTO mapToDto(SqlSelectAsOneNumberValueActionDetails details) {
        SqlSelectAsOneNumberValueActionDTO dto = new SqlSelectAsOneNumberValueActionDTO();
        dto.setDbConnectionId(details.getDbConnectionId());
        dto.setSelect(details.getSelect());
        dto.setType(details.getType().name());
        return dto;
    }

}
