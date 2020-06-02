package io.github.bot.terminal.application.domains.common.action.factory;


import io.github.bot.terminal.application.domains.common.action.entity.*;
import io.github.bot.terminal.application.domains.common.action.values.ActionType;
import io.github.bot.terminal.application.domains.common.services.ExcelManagerService;
import io.github.bot.terminal.application.domains.db_connection.entity.DbConnection;
import io.github.bot.terminal.application.domains.db_connection.factory.DbConnectionsFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ActionsFactory {

    private final DbConnectionsFactory dbConnectionsFactory;
    private final ExcelManagerService excelManagerService;

    public Action build(ActionDetails actionDetails) {
        if (ActionType.SQL_SELECT_AS_TEXT.equals(actionDetails.getType())) {
            SqlSelectAsTextActionDetails details
                    = (SqlSelectAsTextActionDetails) actionDetails;
            DbConnection<?> dbConnection = dbConnectionsFactory.byId(details.getDbConnectionId());
            return new SqlSelectAsTextAction(details.getSelect(), details.getResultTemplate(), dbConnection);
        }
        if (ActionType.SQL_SELECT_IN_EXCEL_FILE.equals(actionDetails.getType())) {
            SqlSelectInExcelFileActionDetails details
                    = (SqlSelectInExcelFileActionDetails) actionDetails;
            DbConnection<?> dbConnection = dbConnectionsFactory.byId(details.getDbConnectionId());
            return new SqlSelectInExcelFileAction(details.getSelect(), details.getFileNameTemplate(),
                    dbConnection, excelManagerService);
        }
        if (ActionType.SQL_SELECT_AS_ONE_NUMBER.equals(actionDetails.getType())) {
            SqlSelectAsOneNumberValueActionDetails details
                    = (SqlSelectAsOneNumberValueActionDetails) actionDetails;
            DbConnection<?> dbConnection = dbConnectionsFactory.byId(details.getDbConnectionId());
            return new SqlSelectAsOneNumberValueAction(details.getSelect(), dbConnection);
        }
        throw new IllegalArgumentException("Action type not found");
    }


}
