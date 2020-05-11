package io.github.bot.terminal.application.domains.common.action.entity;


import io.github.bot.terminal.application.domains.db_connection.entity.DbConnection;
import io.github.bot.terminal.application.domains.notificarion_api.entity.Message;
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi;
import lombok.Data;
import lombok.experimental.Accessors;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.text.StringSubstitutor;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Data
@Accessors(chain = true)
public class SqlSelectAsTextAction implements Action {

    public SqlSelectAsTextAction(String select, String resultTemplate, DbConnection dbConnection) {
        this.select = select;
        this.resultTemplate = resultTemplate;
        this.dbConnection = dbConnection;
    }

    private final String select;

    private final DbConnection dbConnection;

    private final String resultTemplate;

    @Override
    public void proceedAndNotify(NotificationApi<?> notificationApi) {
        try {
            JdbcTemplate template = dbConnection.createJdbcTemplate();
            List<Map<String, Object>> rows = template.queryForList(select);
            StringBuilder responseBuilder = new StringBuilder();
            for (Map<String, Object> row : rows) {
                responseBuilder.append(renderRow(row));
                responseBuilder.append(System.lineSeparator());
            }
            String responseMessage = responseBuilder.toString();
            notificationApi.sendMessage(new Message().setText(responseMessage));
        } catch (Exception ex) {
            log.warn("Problem to execute select: {}", select);
        }
    }

    private String renderRow(Map<String, Object> row) {
        Map model = new HashMap();
        row.keySet().forEach(k -> {
            model.put(k, row.get(k));
            model.put(k.toLowerCase(), row.get(k));
        });
        StringSubstitutor sub = new StringSubstitutor(model);
        return sub.replace(resultTemplate);
    }
}
