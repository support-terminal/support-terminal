package io.github.bot.terminal.application.domains.common.action.entity;


import io.github.bot.terminal.application.domains.common.action.values.ActionType;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotBlank;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper=true)
public class SqlSelectAsOneNumberValueActionDetails extends ActionDetails {

    public SqlSelectAsOneNumberValueActionDetails() {
        super(ActionType.SQL_SELECT_AS_ONE_NUMBER);
    }

    @NotBlank
    private String select;
    @NotBlank
    private String dbConnectionId;


}
