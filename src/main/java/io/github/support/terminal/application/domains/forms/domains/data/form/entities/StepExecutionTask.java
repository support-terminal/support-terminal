package io.github.support.terminal.application.domains.forms.domains.data.form.entities;


import io.github.support.terminal.application.domains.forms.domains.data.form.entities.steps.DataFormStep;
import io.github.support.terminal.application.domains.forms.domains.data.form.values.DataFormExecutionTaskStates;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class StepExecutionTask {
    private DataFormStep step;
    private StepExecutionResult result;
    private String state;
    private String executionId;


    public boolean hasResult(){
        return DataFormExecutionTaskStates.END_PROCESSING.equals(state) &&
                result != null && result.getDataSet() !=null;
    }

}
