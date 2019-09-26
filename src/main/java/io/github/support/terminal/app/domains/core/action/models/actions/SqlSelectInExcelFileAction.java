package io.github.support.terminal.app.domains.core.action.models.actions;


import io.github.support.terminal.app.domains.core.action.values.ActionTypes;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotBlank;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper=true)
public class SqlSelectInExcelFileAction extends Action {
    @NotBlank
    private String select;
    @NotBlank
    private String dataBaseId;
    @NotBlank
    private String fileNameTemplate;
    public SqlSelectInExcelFileAction() {
        super(ActionTypes.SQL_SELECT_IN_EXCEL_FILE);
    }
}
