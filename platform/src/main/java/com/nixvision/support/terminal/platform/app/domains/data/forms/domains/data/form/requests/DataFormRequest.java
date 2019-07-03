package com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.requests;


import com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.parameters.DataFormParameter;
import com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.results.descriptors.DataFormResultDescriptor;
import com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.steps.DataFormStep;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
public class DataFormRequest {

    @NotBlank
    private String name;
    private String description;
    private String state;
    private List<DataFormParameter> parameters; //входные парметры от пользователя
    private List<DataFormStep> steps; //этапы выполнения формы
    private List<DataFormResultDescriptor> resultDescriptors; //описание как представить результат выполнения пользователю
}
