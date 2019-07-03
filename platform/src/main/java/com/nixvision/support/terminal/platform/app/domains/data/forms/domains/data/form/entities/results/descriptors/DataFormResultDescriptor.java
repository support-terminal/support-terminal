package com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.results.descriptors;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.values.DateFormResultTypes;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = TableDateFormResultDescriptor.class, name = DateFormResultTypes.TABLE_DATE_FORM_RESULT),

})
public abstract class DataFormResultDescriptor {

    @NotBlank
    protected String type;

    @NotNull
    protected Integer order;

    public DataFormResultDescriptor(String type) {
        this.type = type;
    }
}

