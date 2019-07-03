package com.nixvision.support.terminal.platform.app.domains.core.action.models.results;


import com.nixvision.support.terminal.platform.app.domains.core.action.values.ActionTypes;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.util.List;
import java.util.Map;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper=true)
public class SqlSelectInDataSetActionResult extends ActionResult {
    private List<Map<String, Object>> dataSet;
    public SqlSelectInDataSetActionResult() {
        super(ActionTypes.SQL_SELECT_IN_DATA_SET);
    }
}
