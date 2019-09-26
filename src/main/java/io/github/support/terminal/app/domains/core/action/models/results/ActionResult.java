package io.github.support.terminal.app.domains.core.action.models.results;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.github.support.terminal.app.domains.core.action.values.ActionTypes;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.Map;

@Data
@Accessors(chain = true)
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = SqlSelectActionResult.class, name = ActionTypes.SQL_SELECT),
        @JsonSubTypes.Type(value = SqlSelectInExcelFileActionResult.class, name = ActionTypes.SQL_SELECT_IN_EXCEL_FILE)
})
public abstract class ActionResult {
    public ActionResult(String type) {
        this.type = type;
    }
    protected String type;
    protected Map<String, Object> payload;
}

