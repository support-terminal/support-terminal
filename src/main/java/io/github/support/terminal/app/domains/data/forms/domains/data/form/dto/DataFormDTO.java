package io.github.support.terminal.app.domains.data.forms.domains.data.form.dto;


import io.github.support.terminal.app.domains.data.forms.domains.data.form.entities.parameters.DataFormParameter;
import io.github.support.terminal.app.domains.data.forms.domains.data.form.entities.results.descriptors.DataFormResultDescriptor;
import io.github.support.terminal.app.domains.data.forms.domains.data.form.entities.steps.DataFormStep;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true)
public class DataFormDTO {
    private String id;
    private String name;
    private String description;
    private String state;
    private List<DataFormParameter> parameters; //входные парметры от пользователя
    private List<DataFormStep> steps; //этапы выполнения формы
    private List<DataFormResultDescriptor> resultDescriptors;
}

