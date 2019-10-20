package io.github.support.terminal.application.domains.forms.domains.data.form.services.handlers.steps;


import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.support.terminal.application.domains.core.action.models.ActionExecution;
import io.github.support.terminal.application.domains.core.action.models.actions.SqlSelectDataSet;
import io.github.support.terminal.application.domains.core.action.models.results.ActionResult;
import io.github.support.terminal.application.domains.core.action.models.results.SqlSelectInDataSetActionResult;
import io.github.support.terminal.application.domains.core.common.values.CoreJmsQueues;
import io.github.support.terminal.application.domains.core.events.services.ApplicationEventsService;
import io.github.support.terminal.application.domains.forms.domains.data.form.entities.DataFormExecution;
import io.github.support.terminal.application.domains.forms.domains.data.form.entities.StepExecutionResult;
import io.github.support.terminal.application.domains.forms.domains.data.form.entities.StepExecutionTask;
import io.github.support.terminal.application.domains.forms.domains.data.form.entities.steps.SqlRequestDateFormStep;
import io.github.support.terminal.application.domains.forms.domains.data.form.models.ResultPathKey;
import io.github.support.terminal.application.domains.forms.domains.data.form.models.ResultPathValue;
import io.github.support.terminal.application.domains.forms.domains.data.form.services.DataFormExecutionsService;
import io.github.support.terminal.application.domains.forms.domains.data.form.services.handlers.ResultsDataSetHelperService;
import io.github.support.terminal.application.domains.forms.domains.data.form.values.DataFormExecutionTaskStates;
import io.github.support.terminal.application.domains.forms.domains.data.form.values.DataFormParameterValue;
import io.github.support.terminal.application.domains.forms.domains.data.form.values.DateFormStepTypes;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.text.StringSubstitutor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import static io.github.support.terminal.application.domains.core.action.values.ActionTypes.SQL_SELECT_IN_DATA_SET;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toMap;


@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
class SqlRequestDateFormStepHandler implements StepTypeHandler {

    private final ApplicationEventsService applicationEventsService;
    private final DataFormExecutionsService dataFormExecutionsService;
    private final ApplicationEventPublisher eventPublisher;

    private final ObjectMapper mapper = new ObjectMapper();
    private final String END_PROCESSING_QUEUE = DateFormStepTypes.SQL_REQUEST_DATE_FORM_STEP + "_END_PROCESSING_QUEUE";


    @Async
    @EventListener
    public void startProcessing(StepExecutionTask stepExecutionTask) {

        try {

            SqlRequestDateFormStep sqlRequestDateFromStep = (SqlRequestDateFormStep) stepExecutionTask.getStep();
            DataFormExecution execution = dataFormExecutionsService.getById(stepExecutionTask.getExecutionId());

            Integer stepIndex = sqlRequestDateFromStep.getOrder() - 1;
            StepExecutionTask task = execution.getStepExecutionTasks().get(stepIndex);
            task.setState(DataFormExecutionTaskStates.PROCESSING);
            dataFormExecutionsService.update(execution);

            String select = createSelect(sqlRequestDateFromStep, execution);


            SqlSelectDataSet action = new SqlSelectDataSet()
                    .setSelect(select)
                    .setDataBaseId(sqlRequestDateFromStep.getDataBaseId());

            Map<String, Object> payload = new HashMap<>();
            payload.put("execution", execution);
            payload.put("stepIndex", stepIndex);


            ActionExecution commandExecution = new ActionExecution()
                    .setAction(action)
                    .setDestination(CoreJmsQueues.CORE_MODULE_ACTIONS_HANDLE_QUEUE + SQL_SELECT_IN_DATA_SET)
                    .setPayload(payload)
                    .setResponseToQueue(END_PROCESSING_QUEUE);
            eventPublisher.publishEvent(commandExecution);

        } catch (Exception ex) {
            log.error("Data form execution processing error:", ex);
            applicationEventsService.notify("Data form execution processing error:" + ex.getMessage());
            return;
        }
    }

    //TODO нужно реализовать получение параметров из уже отработанных результатов
    private String createSelect(SqlRequestDateFormStep sqlRequestDateFormStep,
                                DataFormExecution execution) {

        //шаблон селекта
        String sqlTemplate = sqlRequestDateFormStep.getSql();

        List<StepExecutionTask> stepExecutionTasks = execution.getStepExecutionTasks();
        Map<ResultPathKey, List<ResultPathValue>> valuesByKeys = ResultsDataSetHelperService.getKeyValuesMap(stepExecutionTasks);

        //пользовательские параметры
        Map<String, DataFormParameterValue> userParametersValuesMap = execution.getParametersValues()
                .stream().collect(toMap(DataFormParameterValue::getLabel, Function.identity()));

        //добавить обработку результатов
        Map model = new HashMap();

        //наполняем модель параметрами от пользователя
        userParametersValuesMap.forEach((k, v) -> {
            //TODO учесть параметр как мультиселект
            //FIXME в зависимости от типа параметра можно втавлять его в разном виде, или парсить по разному в модель
            model.put(k, v.getValue());
        });

        //наполняем модель параметрами от из результатов
        valuesByKeys.forEach((k, v) -> {
            String modelVal = v.stream().map(rv -> rv.getValue().toString())
                    .collect(joining("','"));
            model.put(k.getResultPathPlane(), modelVal);
        });

        StringSubstitutor sub = new StringSubstitutor(model);
        return sub.replace(sqlTemplate);

    }

    @Async
    @EventListener(condition = "#actionResult.destination = '"+ END_PROCESSING_QUEUE+"'")
    public void endProcessing(ActionResult actionResult) {
        try {
            SqlSelectInDataSetActionResult selectInDataSetActionResult
                    = (SqlSelectInDataSetActionResult) actionResult;

            DataFormExecution execution = mapper.convertValue(actionResult.getPayload().get("execution"), DataFormExecution.class);
            Integer stepIndex = (Integer) actionResult.getPayload().get("stepIndex");

            StepExecutionTask task = execution.getStepExecutionTasks().get(stepIndex);
            task.setState(DataFormExecutionTaskStates.END_PROCESSING);
            task.setResult(new StepExecutionResult().setDataSet(selectInDataSetActionResult.getDataSet()));
            dataFormExecutionsService.update(execution);

          //  eventPublisher.publishEvent();
           // jmsTemplate.convertAndSend(EXECUTION_PROCESSING_QUEUE, execution.getId());

        } catch (Exception ex) {
            log.error("Data form execution processing error:", ex);
            applicationEventsService.notify("Data form execution processing error:" + ex.getMessage());
            return;
        }
    }

}
