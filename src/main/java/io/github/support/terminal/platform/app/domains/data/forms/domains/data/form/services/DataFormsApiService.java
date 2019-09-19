package io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.services;


import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.dto.DataFormDTO;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.DataForm;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.DataFormExecution;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.StepExecutionTask;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.steps.DataFormStep;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.requests.DataFormExecutionRequest;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.requests.DataFormRequest;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.values.DataFormExecutionStates;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.values.DataFormExecutionTaskStates;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.values.DataFormStates;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Comparator;
import java.util.List;
import java.util.UUID;

import static java.util.stream.Collectors.toList;

@Service
@Transactional
@RequiredArgsConstructor
public class DataFormsApiService {

    private final DataFormsService dataFormsService;
    private final DataFormExecutionsService dataFormExecutionsService;
    private final ObjectMapper objectMapper;

    public DataFormDTO add(DataFormRequest addDataFormRequest) {
        DataForm dataForm = objectMapper.convertValue(addDataFormRequest, DataForm.class);
        dataForm.setId(UUID.randomUUID().toString());
        dataForm.setState(DataFormStates.ENABLED);
        return getDataFormDTO(dataFormsService.add(dataForm));
    }

    public Collection<DataFormDTO> getList() {
        return dataFormsService.getAll()
                .stream().map(c -> getDataFormDTO(c))
                .collect(toList());
    }

    public DataFormDTO getById(String id) {
        DataForm dataForm = dataFormsService.getById(id);
        return getDataFormDTO(dataForm);
    }

    public DataFormDTO update(String id, DataFormRequest request) throws Exception {
        if(dataFormsService.getById(id) == null){
            throw new Exception("DataForm not found");
        }
        DataForm dataForm = objectMapper.convertValue(request, DataForm.class);
        dataForm.setId(id);
        return getDataFormDTO(dataFormsService.update(dataForm));
    }

    public void delete(String id) {
        dataFormsService.delete(id);
    }

    private DataFormDTO getDataFormDTO(DataForm dataForm) {
        DataFormDTO dto = objectMapper.convertValue(dataForm, DataFormDTO.class);
        return dto;
    }

    /**
     * Запустить выполнение формы
     * @param formId - идентификатор формы которую нужно отработать
     * @param request - параметры с которыми отработать форму
     * @return
     */
    public DataFormExecution execute(String formId, DataFormExecutionRequest request) {
        DataFormExecution execution = prepareDataFormExecution(formId, request);
        dataFormExecutionsService.saveNew(execution);
        dataFormExecutionsService.execute(execution);
        return execution;
    }

    private DataFormExecution prepareDataFormExecution(String formId, DataFormExecutionRequest request) {

        DataFormExecution execution = new DataFormExecution()
                .setId(UUID.randomUUID().toString())
                .setDataFormId(formId)
                .setState(DataFormExecutionStates.READY_FOR_PROCESSING)
                .setUserId("ADMIN")
                .setParametersValues(request.getParametersValues());
        DataForm form = dataFormsService.getById(formId);

        List<StepExecutionTask> executionSteps = form.getSteps()
                .stream()
                .sorted(Comparator.comparingInt(DataFormStep::getOrder))
                .map(step ->
                        new StepExecutionTask()
                                .setStep(step)
                                .setState(DataFormExecutionTaskStates.READY_FOR_PROCESSING)
                                .setExecutionId(execution.getId())
                ).collect(toList());

        execution.setStepExecutionTasks(executionSteps);

        execution.setResultDescriptors(form.getResultDescriptors());

        return execution;
    }

    public DataFormExecution getExecutionById(String executionId) {
        return dataFormExecutionsService.getById(executionId);
    }
}
