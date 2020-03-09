package io.github.support.terminal.application.domains.forms.domains.data.form.entities.results;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.github.support.terminal.application.domains.forms.domains.data.form.values.DateFormResultTypes;
import lombok.Data;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotBlank;


@Data
@Accessors(chain = true)
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = TableDateFormExecutionResult.class, name = DateFormResultTypes.TABLE_DATE_FORM_RESULT),

})
public abstract class DataFormExecutionResult {
    @NotBlank
    private String type;
    public DataFormExecutionResult(String type) {
        this.type = type;
    }
}

