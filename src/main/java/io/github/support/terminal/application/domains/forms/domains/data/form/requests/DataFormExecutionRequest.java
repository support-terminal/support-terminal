package io.github.support.terminal.application.domains.forms.domains.data.form.requests;


import io.github.support.terminal.application.domains.forms.domains.data.form.values.DataFormParameterValue;
import lombok.Data;

import java.util.List;

@Data
public class DataFormExecutionRequest {

    private List<DataFormParameterValue> parametersValues; //значения входных парметров
}