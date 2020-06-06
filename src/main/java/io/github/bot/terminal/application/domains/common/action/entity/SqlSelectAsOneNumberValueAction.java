package io.github.bot.terminal.application.domains.common.action.entity;


import io.github.bot.terminal.application.domains.db_connection.entity.DbConnection;
import io.github.bot.terminal.application.domains.notificarion_api.entity.Message;
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi;
import lombok.Data;
import lombok.experimental.Accessors;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.JdbcTemplate;

@Slf4j
@Data
@Accessors(chain = true)
public class SqlSelectAsOneNumberValueAction implements Action {

    public SqlSelectAsOneNumberValueAction(String select, DbConnection dbConnection) {
        this.select = select;
        this.dbConnection = dbConnection;
    }

    private final String select;

    private final DbConnection dbConnection;

    @Override
    public ActionResult execute() {
        try {
            JdbcTemplate template = dbConnection.createJdbcTemplate();
            Double value = template.queryForObject(select, null, Double.class);
            return new ActionResultImpl(value);
        } catch (Exception ex) {
            log.warn("Problem to execute select: {}", select);
            throw ex;
        }
    }

    public class ActionResultImpl implements ActionResult<Double> {

        private final Double result;

        public ActionResultImpl(Double result) {
            this.result = result;
        }

        @Override
        public void notify(NotificationApi notificationApi) {
            notificationApi.sendMessage(new Message(result.toString()));
        }

        @Override
        public Double getResult() {
            return result;
        }
    }
}
