package io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.services;


import io.github.support.terminal.platform.app.domains.core.CoreConfiguration;
import io.github.support.terminal.platform.app.domains.core.events.services.ApplicationEventsService;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.DataFormExecution;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.StepExecutionTask;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.models.ResultHandlerRequest;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.repositories.DataFormExecutionRepository;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.values.DataFormExecutionStates;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.values.DataFormExecutionStatus;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.values.DataFormExecutionTaskStates;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class DataFormExecutionsService {

    private final DataFormExecutionRepository dataFormExecutionRepository;
    private final JmsTemplate jmsTemplate;
    private final ApplicationEventsService applicationEventsService;
    private static final String LISTENING_QUEUE = "DATA_FORM_MODULE_LISTENING_QUEUE";
    public static final String EXECUTION_PROCESSING_QUEUE = LISTENING_QUEUE + "_EXECUTION_PROCESSING_QUEUE";
    public static final String END_EXECUTION_PROCESSING_QUEUE = LISTENING_QUEUE + "_END_EXECUTION_PROCESSING_QUEUE";


    void execute(DataFormExecution dataFormExecution) {
        jmsTemplate.convertAndSend(EXECUTION_PROCESSING_QUEUE, dataFormExecution.getId());
    }

    public DataFormExecution saveNew(DataFormExecution dataFormExecution) {
        return dataFormExecutionRepository.add(dataFormExecution);
    }

    public DataFormExecution update(DataFormExecution dataFormExecution) {
        return dataFormExecutionRepository.update(dataFormExecution);
    }


    public DataFormExecution getById(String id) {
        //TODO пробовать завершить обработку
        return dataFormExecutionRepository.findById(id);
    }


    @JmsListener(destination = EXECUTION_PROCESSING_QUEUE,
            containerFactory = CoreConfiguration.JMS_FACTORY_NAME)
    public void executionProcessing(String executionId) {

        try {

            //поднимаем запрос на выполнение формы стартуем обработку
            DataFormExecution dataFormExecution = getById(executionId); //нучно читать из базы чтобы имет актуальный статус
            if (dataFormExecution == null || dataFormExecution.isExecutionCompleted()) {
                //если уже отработано или не найдено, просто завершить обработку
                return;
            }
            //если есть что исполнять
            if (!dataFormExecution.getState().equals(DataFormExecutionStates.PROCESSING)) {
                dataFormExecution.setState(DataFormExecutionStates.PROCESSING);
                dataFormExecutionRepository.update(dataFormExecution);
            }

            Optional<StepExecutionTask> nextTaskOptional = getNextExecutionTask(dataFormExecution);
            if (nextTaskOptional.isPresent()) {
                StepExecutionTask task = nextTaskOptional.get();
                jmsTemplate.convertAndSend(task.getStep().getType(), task);
            } else {
                //когда все таски выполнены ставим статус что готово на формирование результата и отправляем на формирование
                dataFormExecution.setState(DataFormExecutionStates.READY_FOR_PREPARE_RESULT);
                dataFormExecutionRepository.update(dataFormExecution);

                dataFormExecution.getResultDescriptors()
                        .stream().forEach(rd ->
                        jmsTemplate.convertAndSend(rd.getType(),
                                new ResultHandlerRequest().setDescriptor(rd).setExecution(dataFormExecution)
                        )
                );

            }


        } catch (Exception ex) {
            log.error("Data form execution processing error:", ex);
            applicationEventsService.notify("Data form execution processing error:" + ex.getMessage());
            return;
        }

    }


    private Optional<StepExecutionTask> getNextExecutionTask(DataFormExecution dataFormExecution) {
        return dataFormExecution.getStepExecutionTasks()
                .stream()
                .filter(t -> t.getState().equals(DataFormExecutionTaskStates.READY_FOR_PROCESSING))
                .findFirst();
    }

    @JmsListener(destination = END_EXECUTION_PROCESSING_QUEUE,
            containerFactory = CoreConfiguration.JMS_FACTORY_NAME)
    public void endProcessing(String executionId) {

        try {
            DataFormExecution dataFormExecution = getById(executionId);
            int needResults = dataFormExecution.getResultDescriptors().size();
            int readyResults = dataFormExecution.getDataFormExecutionResults().size();

            if (readyResults == needResults || readyResults > needResults) {
                //все результаты сформированы
                dataFormExecution.setEndStatus(DataFormExecutionStatus.OK);
                dataFormExecutionRepository.update(dataFormExecution);
                return;
            }
        } catch (Exception ex) {
            log.error("End data form execution error:", ex);
            applicationEventsService.notify("End data form execution error:" + ex.getMessage());
            return;
        }
    }


}
