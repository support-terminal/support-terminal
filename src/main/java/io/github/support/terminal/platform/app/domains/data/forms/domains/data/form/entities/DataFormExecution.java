package io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.entities;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.results.DataFormExecutionResult;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.results.descriptors.DataFormResultDescriptor;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.values.DataFormParameterValue;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.dizitart.no2.objects.Id;

import java.util.ArrayList;
import java.util.List;

@Data
@Accessors(chain = true)
@JsonIgnoreProperties(ignoreUnknown = true)
@EqualsAndHashCode(of={"id"})
public class DataFormExecution {
    @Id
    private String id;
    private String dataFormId;
    private String state; //created, start, end
    private String endStatus; //end status ok, error
    private String userId;
    private List<StepExecutionTask> stepExecutionTasks = new ArrayList<>();; //подзадания выполнения формы
    private List<DataFormParameterValue> parametersValues = new ArrayList<>();; //значения входных парметров

    private List<DataFormResultDescriptor> resultDescriptors = new ArrayList<>(); //описание как сформировать конечный результат
    private List<DataFormExecutionResult> dataFormExecutionResults = new ArrayList<>();; //конечный результат для отображения


    public boolean isExecutionCompleted(){
        return Status.ERROR.equals(endStatus) || Status.OK.equals(endStatus);
    }


    public class Status{
        public static final String ERROR = "ERROR";
        public static final String OK = "OK";
    }
}

