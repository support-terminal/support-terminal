package com.nixvision.support.terminal.platform.app.domains.core.action.models.actions;


import com.nixvision.support.terminal.platform.app.domains.core.action.values.ActionTypes;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotBlank;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper=true)
public class SqlSelectDataSet extends Action {
    @NotBlank
    private String select;
    @NotBlank
    private String dataBaseId;
    public SqlSelectDataSet() {
        super(ActionTypes.SQL_SELECT_IN_DATA_SET);
    }
}