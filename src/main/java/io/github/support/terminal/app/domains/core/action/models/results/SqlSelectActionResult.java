package io.github.support.terminal.app.domains.core.action.models.results;


import io.github.support.terminal.app.domains.core.action.values.ActionTypes;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper=true)
public class SqlSelectActionResult extends ActionResult {
    private String response;
    public SqlSelectActionResult() {
        super(ActionTypes.SQL_SELECT);
    }
}