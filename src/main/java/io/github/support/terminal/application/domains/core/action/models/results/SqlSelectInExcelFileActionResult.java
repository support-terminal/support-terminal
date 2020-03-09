package io.github.support.terminal.application.domains.core.action.models.results;


import io.github.support.terminal.application.domains.core.action.values.ActionTypes;
import io.github.support.terminal.application.domains.core.bots.models.DocumentFile;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper=true)
public class SqlSelectInExcelFileActionResult extends ActionResult {
    private String response;
    private DocumentFile document;
    public SqlSelectInExcelFileActionResult() {
        super(ActionTypes.SQL_SELECT_IN_EXCEL_FILE);
    }
}
