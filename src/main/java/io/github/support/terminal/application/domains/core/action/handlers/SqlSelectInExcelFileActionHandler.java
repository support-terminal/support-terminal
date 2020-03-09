package io.github.support.terminal.application.domains.core.action.handlers;


import com.fasterxml.jackson.databind.util.StdDateFormat;
import io.github.support.terminal.application.domains.core.action.models.ActionExecution;
import io.github.support.terminal.application.domains.core.action.models.actions.SqlSelectInExcelFileAction;
import io.github.support.terminal.application.domains.core.action.models.results.SqlSelectInExcelFileActionResult;
import io.github.support.terminal.application.domains.core.action.values.ActionTypes;
import io.github.support.terminal.application.domains.core.bots.models.DocumentFile;
import io.github.support.terminal.application.domains.core.common.services.ExcelManagerService;
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
import java.io.IOException;
import java.text.DateFormat;
import java.util.*;


@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
class SqlSelectInExcelFileActionHandler implements ActionHandler {

    private final ApplicationEventsService applicationEventsService;
    private final ExcelManagerService excelManagerService;
    private final DbConnectionsService dbConnectionsService;
    private final ApplicationEventPublisher eventPublisher;

    private final long MEGABYTE = 1024L * 1024L;
    private final DateFormat df = new StdDateFormat();

    @Async
    @EventListener(condition = "#actionExecution.destination == '"+ CoreJmsQueues.CORE_MODULE_ACTIONS_HANDLE_QUEUE + ActionTypes.SQL_SELECT_IN_EXCEL_FILE+"'")
    public void handle(ActionExecution actionExecution){

        SqlSelectInExcelFileAction action = (SqlSelectInExcelFileAction) actionExecution.getAction();

        Optional<DataSource> dataSourceOptional = dbConnectionsService.getDataSource(action.getDataBaseId());
        if(!dataSourceOptional.isPresent()){
            log.error("Problem execute SQL_SELECT_IN_EXCEL_FILE action, could't get data source");
            return;
        }
        JdbcTemplate template = new JdbcTemplate(dataSourceOptional.get());

        List<Map<String, Object>> rows;
        try{
           rows =  template.queryForList(action.getSelect());
        }catch (Exception ex){
            log.warn("Не удалось выполнить селект: "+ action.getSelect());
            applicationEventsService.notifyUi("Не удалось выполнить селект: "+ action.getSelect());
            return;
        }

        SqlSelectInExcelFileActionResult executionResult = new SqlSelectInExcelFileActionResult();
        executionResult.setPayload(actionExecution.getPayload());
        DocumentFile file;
        try {
            file = excelManagerService.createExcelDocumentFile(getExcelFileName(action.getFileNameTemplate())+".xls", rows);
        } catch (IOException e) {
            log.error("Не удалось сформировать пустой excel файл");
            sendAnswer(actionExecution.getResponseToQueue(), executionResult.setResponse("Не удалось сформировать excel файл"));
            return;
        }

        long mb = file.getSize() / MEGABYTE;
        if(mb < 50L){
            sendAnswer(actionExecution.getResponseToQueue(), executionResult.setDocument(file));
        }else{
            sendAnswer(actionExecution.getResponseToQueue(), executionResult.setResponse("Превышен размер отправляемого файла (> 50 Mb)"));
        }

    }

    private String getExcelFileName(String fileNameTemplate) {
        Map model = new HashMap();
        model.put("now", df.format(new Date()));
        StringSubstitutor sub = new StringSubstitutor(model);
        return sub.replace(fileNameTemplate);
    }

    private void sendAnswer(String responseToQueue, SqlSelectInExcelFileActionResult executionResult){
        executionResult.setDestination(responseToQueue);
        eventPublisher.publishEvent(executionResult);
    }


 }
