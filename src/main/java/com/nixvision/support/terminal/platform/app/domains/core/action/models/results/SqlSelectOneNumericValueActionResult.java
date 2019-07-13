package com.nixvision.support.terminal.platform.app.domains.core.action.models.results;


import com.nixvision.support.terminal.platform.app.domains.core.action.values.ActionTypes;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper=true)
public class SqlSelectOneNumericValueActionResult extends ActionResult {
    private Double value;
    public SqlSelectOneNumericValueActionResult() {
        super(ActionTypes.SQL_SELECT_ONE_NUMERIC_VALUE);
    }
}