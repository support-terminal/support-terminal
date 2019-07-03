package com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.parameters;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.values.DateFormParameterTypes;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = SelectParameter.class, name = DateFormParameterTypes.SELECT_PARAMETER),
        @JsonSubTypes.Type(value = StringParameter.class, name = DateFormParameterTypes.STRING_PARAMETER),
        @JsonSubTypes.Type(value = IntegerParameter.class, name = DateFormParameterTypes.INTEGER_PARAMETER),
        @JsonSubTypes.Type(value = DateParameter.class, name = DateFormParameterTypes.DATE_PARAMETER)
})
public abstract class DataFormParameter {

    @NotBlank
    private String label;
    @NotBlank
    protected String type;

    protected String description; //описание что за параметр

    public DataFormParameter(String type) {
        this.type = type;
    }
}

