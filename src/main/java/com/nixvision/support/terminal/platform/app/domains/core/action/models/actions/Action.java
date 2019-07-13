package com.nixvision.support.terminal.platform.app.domains.core.action.models.actions;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.nixvision.support.terminal.platform.app.domains.core.action.values.ActionTypes;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = SqlSelectAction.class, name = ActionTypes.SQL_SELECT),
        @JsonSubTypes.Type(value = SqlSelectDataSet.class, name = ActionTypes.SQL_SELECT_IN_DATA_SET),
        @JsonSubTypes.Type(value = SqlSelectOneNumericValueAction.class, name = ActionTypes.SQL_SELECT_ONE_NUMERIC_VALUE),
        @JsonSubTypes.Type(value = SqlSelectInExcelFileAction.class, name = ActionTypes.SQL_SELECT_IN_EXCEL_FILE)
})
public abstract class Action {

    public Action(String type) {
        this.type = type;
    }
    @NotBlank
    protected String type;
}

