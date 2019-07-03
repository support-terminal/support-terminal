package com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.results.descriptors;


import com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.values.DateFormResultTypes;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper=true)
public class TableDateFormResultDescriptor extends DataFormResultDescriptor {
    public TableDateFormResultDescriptor() {
        super(DateFormResultTypes.TABLE_DATE_FORM_RESULT);
    }

    private List<Column> columns;

    public int columnsMaxIndex() {
        return (columns.size()-1);
    }
}

