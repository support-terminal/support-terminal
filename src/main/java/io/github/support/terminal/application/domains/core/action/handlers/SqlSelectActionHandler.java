package io.github.support.terminal.application.domains.core.action.handlers;


import io.github.support.terminal.application.domains.core.action.models.ActionExecution;
import io.github.support.terminal.application.domains.core.action.models.actions.SqlSelectAction;
import io.github.support.terminal.application.domains.core.action.models.results.ActionResult;
import io.github.support.terminal.application.domains.core.action.models.results.SqlSelectActionResult;
import io.github.support.terminal.application.domains.core.action.values.ActionTypes;
import io.github.support.terminal.application.domains.core.common.values.CoreJmsQueues;
import io.github.support.terminal.application.domains.core.dbs.services.DbConnectionsService;
import io.github.support.terminal.application.domains.core.events.services.ApplicationEventsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.text.StringSubstitutor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.event.EventListener;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
class SqlSelectActionHandler implements ActionHandler {


    private final ApplicationEventsService applicationEventsService;
    private final DbConnectionsService dbConnectionsService;
    private final ApplicationEventPublisher eventPublisher;


    @Async
    @EventListener(condition = "#actionExecution.destination == '"+ CoreJmsQueues.CORE_MODULE_ACTIONS_HANDLE_QUEUE + ActionTypes.SQL_SELECT+"'")
    public void handle(ActionExecution actionExecution){

        SqlSelectAction action = (SqlSelectAction) actionExecution.getAction();
        Optional<DataSource> dataSourceOptional = dbConnectionsService.getDataSource(action.getDataBaseId());
        if(!dataSourceOptional.isPresent()){
            log.error("Problem execute SQL_SELECT action, could't get data source");
            return;
        }
        JdbcTemplate template = new JdbcTemplate(dataSourceOptional.get());

        try{
            List<Map<String, Object>> rows =  template.queryForList(action.getSelect());
            StringBuilder responseBuilder = new StringBuilder();
            for(Map<String, Object> row : rows){
                responseBuilder = renderRow(action, responseBuilder, row);
            }
            ActionResult result = new SqlSelectActionResult()
                            .setResponse(responseBuilder.toString())
                            .setPayload(actionExecution.getPayload());
            result.setDestination(actionExecution.getResponseToQueue());
            eventPublisher.publishEvent(result);
        }catch (Exception ex){
            log.warn("Не удалось выполнить селект: "+ action.getSelect());
            applicationEventsService.notifyUi("Не удалось выполнить селект: "+ action.getSelect());
            return;
        }
    }

    private StringBuilder renderRow(SqlSelectAction action, StringBuilder responseBuilder, Map<String, Object> row) {
        Map model = new HashMap();
        row.keySet().forEach(k -> {
            model.put(k, row.get(k));
            model.put(k.toLowerCase(), row.get(k));
        });
        StringSubstitutor sub = new StringSubstitutor(model);
        responseBuilder.append(sub.replace(action.getResultTemplate()));
        responseBuilder.append(System.getProperty("line.separator"));
        return responseBuilder;
    }

}
