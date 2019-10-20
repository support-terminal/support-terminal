package io.github.support.terminal.application.domains.forms.domains.data.form.entities.parameters;


import io.github.support.terminal.application.domains.forms.domains.data.form.values.DateFormParameterTypes;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper=true)
public class DateParameter extends DataFormParameter {
    public DateParameter() {
        super(DateFormParameterTypes.DATE_PARAMETER);
    }

}
