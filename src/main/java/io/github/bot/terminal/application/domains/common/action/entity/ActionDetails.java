package io.github.bot.terminal.application.domains.common.action.entity;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.github.bot.terminal.application.domains.common.action.values.ActionType;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = SqlSelectAsTextActionDetails.class, name = ActionType.Constants.SQL_SELECT_AS_TEXT),
})
public abstract class ActionDetails {

    public ActionDetails(ActionType type) {
        this.type = type;
    }
    @NotBlank
    protected ActionType type;
}

