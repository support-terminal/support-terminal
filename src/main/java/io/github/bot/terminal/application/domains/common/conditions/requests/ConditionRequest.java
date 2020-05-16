package io.github.bot.terminal.application.domains.common.conditions.requests;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.github.bot.terminal.application.domains.common.conditions.values.ConditionTypes;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = ConditionNumericMoreThanRequest.class, name = ConditionTypes.Constants.NUMERIC_MORE_THAN),
        @JsonSubTypes.Type(value = ConditionNumericEqualRequest.class, name = ConditionTypes.Constants.NUMERIC_EQUAL),
        @JsonSubTypes.Type(value = ConditionNumericLessThanRequest.class, name = ConditionTypes.Constants.NUMERIC_LESS_THAN)
})
public abstract class ConditionRequest {
    @NotBlank
    private String type;
}

