package com.nixvision.support.terminal.platform.app.domains.bot.monitoring.domains.bot.task.models.conditions;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.nixvision.support.terminal.platform.app.domains.bot.monitoring.domains.bot.task.values.ConditionTypes;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = ConditionNumericMoreThan.class, name = ConditionTypes.NUMERIC_MORE_THAN),
        @JsonSubTypes.Type(value = ConditionNumericEqual.class, name = ConditionTypes.NUMERIC_EQUAL),
        @JsonSubTypes.Type(value = ConditionNumericLessThan.class, name = ConditionTypes.NUMERIC_LESS_THAN)
})
public abstract class Condition {
    @NotBlank
    private String type;
    public abstract boolean check(Object value);
}

