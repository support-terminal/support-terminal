package io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.entities;


import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.parameters.DataFormParameter;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.results.descriptors.DataFormResultDescriptor;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.steps.DataFormStep;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.dizitart.no2.objects.Id;

import java.util.List;

@Data
@EqualsAndHashCode(of={"id"})
public class DataForm {
    @Id
    private String id;
    private String name;
    private String description;
    private String state;
    private List<DataFormParameter> parameters; //входные парметры от пользователя
    private List<DataFormStep> steps; //этапы выполнения формы
    private List<DataFormResultDescriptor> resultDescriptors;
}

