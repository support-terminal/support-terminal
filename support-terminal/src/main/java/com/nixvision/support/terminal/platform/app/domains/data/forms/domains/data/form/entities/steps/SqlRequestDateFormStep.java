package com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.steps;


import com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.values.DateFormStepTypes;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper=true)
public class SqlRequestDateFormStep extends DataFormStep {
    public SqlRequestDateFormStep() {
        super(DateFormStepTypes.SQL_REQUEST_DATE_FORM_STEP);
    }
    private String dataBaseId;
    private String sql;

}
