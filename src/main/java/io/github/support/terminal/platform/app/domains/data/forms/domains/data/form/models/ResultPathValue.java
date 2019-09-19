package io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.models;


import lombok.Data;
import lombok.experimental.Accessors;

import java.util.Map;

@Data
@Accessors(chain = true)
public class ResultPathValue{
    private Object value;
    private Map<ResultPathKey, Object> joinValues;
}