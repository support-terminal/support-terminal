package io.github.support.terminal.app.domains.data.forms.domains.data.form.entities.steps;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.github.support.terminal.app.domains.data.forms.domains.data.form.values.DateFormStepTypes;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = SqlRequestDateFormStep.class, name = DateFormStepTypes.SQL_REQUEST_DATE_FORM_STEP),

})
public abstract class DataFormStep {

    protected Integer order;

    @NotBlank
    protected String type;

    public DataFormStep(String type) {
        this.type = type;
    }
}

