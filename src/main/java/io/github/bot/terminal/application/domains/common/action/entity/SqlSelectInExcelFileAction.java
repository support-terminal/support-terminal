package io.github.bot.terminal.application.domains.common.action.entity;


import com.fasterxml.jackson.databind.util.StdDateFormat;
import io.github.bot.terminal.application.domains.common.services.ExcelManagerService;
import io.github.bot.terminal.application.domains.db_connection.entity.DbConnection;
import io.github.bot.terminal.application.domains.integrations.DocumentFile;
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi;
import lombok.Data;
import lombok.experimental.Accessors;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.text.StringSubstitutor;
import org.springframework.jdbc.core.JdbcTemplate;

import java.io.IOException;
import java.text.DateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Data
@Accessors(chain = true)
public class SqlSelectInExcelFileAction implements Action {

    public SqlSelectInExcelFileAction(String select,
                                      String fileNameTemplate,
                                      DbConnection dbConnection,
                                      ExcelManagerService excelManagerService) {
        this.select = select;
        this.fileNameTemplate = fileNameTemplate;
        this.dbConnection = dbConnection;
        this.excelManagerService = excelManagerService;
    }

    private final String select;

    private final DbConnection dbConnection;

    private final ExcelManagerService excelManagerService;

    private final String fileNameTemplate;

    private final long MEGABYTE = 1024L * 1024L;

    private final DateFormat df = new StdDateFormat();

    @Override
    public ActionResult execute() {
        try {
            JdbcTemplate template = dbConnection.createJdbcTemplate();
            List<Map<String, Object>> rows = template.queryForList(select);
            try {
                DocumentFile file = excelManagerService.createExcelDocumentFile(getExcelFileName(fileNameTemplate) + ".xls", rows);
                return new ActionResultImpl(file);
            } catch (IOException e) {
                log.error("", e);
                throw e;
            }
        } catch (Exception ex) {
            log.warn("Problem to execute select: {}", select);
            throw new RuntimeException(ex);
        }
    }

    private String getExcelFileName(String fileNameTemplate) {
        Map model = new HashMap();
        model.put("now", df.format(new Date()));
        StringSubstitutor sub = new StringSubstitutor(model);
        return sub.replace(fileNameTemplate);
    }


    public class ActionResultImpl implements ActionResult<DocumentFile> {

        private final DocumentFile result;

        public ActionResultImpl(DocumentFile result) {
            this.result = result;
        }

        @Override
        public void notify(NotificationApi notificationApi) {
            notificationApi.sendDocument(result);
        }

        @Override
        public DocumentFile getResult() {
            return result;
        }

    }


}
