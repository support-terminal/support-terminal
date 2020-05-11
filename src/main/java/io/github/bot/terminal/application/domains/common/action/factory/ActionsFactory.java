package io.github.bot.terminal.application.domains.common.action.factory;


import io.github.bot.terminal.application.domains.common.action.entity.Action;
import io.github.bot.terminal.application.domains.common.action.entity.ActionDetails;
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsTextAction;
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsTextActionDetails;
import io.github.bot.terminal.application.domains.common.action.values.ActionType;
import io.github.bot.terminal.application.domains.db_connection.entity.DbConnection;
import io.github.bot.terminal.application.domains.db_connection.factory.DbConnectionsFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ActionsFactory {

    private final DbConnectionsFactory dbConnectionsFactory;

    public Action build(ActionDetails actionDetails) {
        if (ActionType.SQL_SELECT_AS_TEXT.equals(actionDetails.getType())) {
            SqlSelectAsTextActionDetails details
                    = (SqlSelectAsTextActionDetails) actionDetails;
            DbConnection<?> dbConnection = dbConnectionsFactory.byId(details.getDbConnectionId());
            return new SqlSelectAsTextAction(details.getSelect(), details.getResultTemplate(), dbConnection);
        }
        throw new IllegalArgumentException("Action type not found");
    }


}
