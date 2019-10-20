package io.github.support.terminal.app.domains.core.action.handlers;


import io.github.support.terminal.application.domains.core.CoreConfiguration;
import io.github.support.terminal.app.domains.core.action.models.ActionExecution;
import io.github.support.terminal.app.domains.core.action.models.actions.SqlSelectOneNumericValueAction;
import io.github.support.terminal.app.domains.core.action.models.results.SqlSelectOneNumericValueActionResult;
import io.github.support.terminal.app.domains.core.action.values.ActionTypes;
import io.github.support.terminal.application.domains.core.common.values.CoreJmsQueues;
import io.github.support.terminal.application.domains.core.events.services.ApplicationEventsService;
import io.github.support.terminal.app.domains.core.source.dbs.services.DbConnectionsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.sql.DataSource;
import java.util.Optional;


@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
class SqlSelectOneNumericValueActionHandler implements ActionHandler {


    private final ApplicationEventsService applicationEventsService;
    private final DbConnectionsService dbConnectionsService;
    private final JmsTemplate jmsTemplate;


    @JmsListener(destination = CoreJmsQueues.CORE_MODULE_ACTIONS_HANDLE_QUEUE + ActionTypes.SQL_SELECT_ONE_NUMERIC_VALUE,
            containerFactory = CoreConfiguration.JMS_FACTORY_NAME)
    public void handle(ActionExecution actionExecution){

        SqlSelectOneNumericValueAction action = (SqlSelectOneNumericValueAction) actionExecution.getAction();

        Optional<DataSource> dataSourceOptional = dbConnectionsService.getDataSource(action.getDataBaseId());
        if(!dataSourceOptional.isPresent()){
            log.error("Problem execute SQL_SELECT_ONE_NUMERIC_VALUE action, could't get data source");
            return;
        }
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSourceOptional.get());

        try{
            Double value = jdbcTemplate.queryForObject(
                    action.getSelect(), null, Double.class);
            jmsTemplate.convertAndSend(actionExecution.getResponseToQueue(),
                    new SqlSelectOneNumericValueActionResult().setValue(value).setPayload(actionExecution.getPayload()));
        }catch (Exception ex){
            log.warn("Не удалось выполнить селект: "+ action.getSelect());
            applicationEventsService.notifyUi("Не удалось выполнить селект: "+ action.getSelect());
            return;
        }
    }

}
