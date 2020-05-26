package io.github.bot.terminal.application.domains.common.action.requests;

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
        @JsonSubTypes.Type(value = SqlSelectAsTextActionRequest.class, name = ActionType.Constants.SQL_SELECT_AS_TEXT),
        @JsonSubTypes.Type(value = SqlSelectAsOneNumberValueActionRequest.class, name = ActionType.Constants.SQL_SELECT_AS_ONE_NUMBER)
})
public class ActionRequest {
    @NotBlank
    protected String type;
}
