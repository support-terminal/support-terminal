package com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.parameters;


import com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.values.DateFormParameterTypes;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper=true)
public class SelectParameter extends DataFormParameter {
    public SelectParameter() {
        super(DateFormParameterTypes.SELECT_PARAMETER);
    }


//FIXME multiselect


}