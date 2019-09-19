package io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.results;


import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.values.DateFormResultTypes;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper=true)
public class TableDateFormExecutionResult extends DataFormExecutionResult {

    public TableDateFormExecutionResult() {
        super(DateFormResultTypes.TABLE_DATE_FORM_RESULT);
    }

    private List<String> headers;
    private List<List<Object>> rows; //коллекция строк

}

