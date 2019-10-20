package io.github.support.terminal.app.domains.data.forms.domains.data.form.services.handlers.results;


import io.github.support.terminal.application.domains.core.CoreConfiguration;
import io.github.support.terminal.application.domains.core.events.services.ApplicationEventsService;
import io.github.support.terminal.app.domains.data.forms.domains.data.form.entities.DataFormExecution;
import io.github.support.terminal.app.domains.data.forms.domains.data.form.entities.StepExecutionTask;
import io.github.support.terminal.app.domains.data.forms.domains.data.form.entities.results.TableDateFormExecutionResult;
import io.github.support.terminal.app.domains.data.forms.domains.data.form.entities.results.descriptors.Column;
import io.github.support.terminal.app.domains.data.forms.domains.data.form.entities.results.descriptors.TableDateFormResultDescriptor;
import io.github.support.terminal.app.domains.data.forms.domains.data.form.models.*;
import io.github.support.terminal.app.domains.data.forms.domains.data.form.services.DataFormExecutionsService;
import io.github.support.terminal.app.domains.data.forms.domains.data.form.services.handlers.ResultsDataSetHelperService;
import io.github.support.terminal.app.domains.data.forms.domains.data.form.values.DateFormResultTypes;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;


import static io.github.support.terminal.app.domains.data.forms.domains.data.form.services.DataFormExecutionsService.END_EXECUTION_PROCESSING_QUEUE;
import static java.util.stream.Collectors.toList;


@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class TableResultDateFormStepHandler implements ResultTypeHandler {


    private final JmsTemplate jmsTemplate;
    private final ApplicationEventsService applicationEventsService;
    private final DataFormExecutionsService dataFormExecutionsService;

    @JmsListener(destination = DateFormResultTypes.TABLE_DATE_FORM_RESULT,
            containerFactory = CoreConfiguration.JMS_FACTORY_NAME)
    public void prepare(ResultHandlerRequest resultHandlerRequest) {

        try {


            DataFormExecution dataFormExecution = resultHandlerRequest.getExecution();
            TableDateFormResultDescriptor descriptor = (TableDateFormResultDescriptor) resultHandlerRequest.getDescriptor();

            List<String> headers = getHeaders(descriptor);

            List<List<Object>> table = getTable(dataFormExecution.getStepExecutionTasks(), descriptor);

            dataFormExecution.getDataFormExecutionResults().add(
                    new TableDateFormExecutionResult()
                            .setHeaders(headers)
                            .setRows(table)
            );
            dataFormExecutionsService.update(dataFormExecution);
            jmsTemplate.convertAndSend(END_EXECUTION_PROCESSING_QUEUE, dataFormExecution.getId());

        } catch (Exception ex) {
            log.error("Data form execution processing error:", ex);
            applicationEventsService.notify("Data form execution processing error:" + ex.getMessage());
            return;
        }
    }


    private List<String> getHeaders(TableDateFormResultDescriptor descriptor) {
        return descriptor.getColumns().stream().map(c -> c.getHeader()).collect(toList());
    }


    private List<List<Object>> getTable(List<StepExecutionTask> stepExecutionTasks, TableDateFormResultDescriptor descriptor) {

        Map<ResultPathKey, List<ResultPathValue>> valuesByKeys = ResultsDataSetHelperService.getKeyValuesMap(stepExecutionTasks);

        Column firstColumn = descriptor.getColumns().get(0);
        ResultPathKey resultPathKey1 = new ResultPathKey(firstColumn.getResultPath());
        List<ResultPathValue> firstColumnRowsValues = valuesByKeys.getOrDefault(resultPathKey1, Collections.emptyList());

        List<Node> resultTreeNodes = new ArrayList<>();
        for (ResultPathValue val : firstColumnRowsValues) {
            Node node = new Node().setValue(val);
            buildNode(node, valuesByKeys, descriptor, 1);
            resultTreeNodes.add(node);
        }

        List<List<Object>> table = makeTable(resultTreeNodes);
        return table;

    }

    private List<List<Object>> makeTable(List<Node> nodes) {
        List<List<Object>> table = new ArrayList<>();
        for (Node node : nodes) {
            List<Object> row = new ArrayList<>();
            row.add(node.getValue().getValue());
            table.addAll(getRows(row, node));
        }
        return table;
    }

    private List<List<Object>> getRows(List<Object> row, Node node) {

        List<List<Object>> rows = new ArrayList<>();
        if (CollectionUtils.isEmpty(node.getNodes())) {
            rows.add(row);
            return rows;
        }

        for (Node n : node.getNodes()) {
            List<Object> r = new ArrayList<>();
            r.addAll(row);
            r.add(n.getValue().getValue());
            rows.addAll(getRows(r, n));
        }
        return rows;
    }

    private void buildNode(Node node, Map<ResultPathKey, List<ResultPathValue>> valuesByKeys, TableDateFormResultDescriptor descriptor, int nextColumnNumber) {

        if (descriptor.columnsMaxIndex() < nextColumnNumber) {
            return;
        }

        Column column = descriptor.getColumns().get(nextColumnNumber);
        ++nextColumnNumber;

        ResultPathKey resultPathKey = new ResultPathKey(column.getResultPath());
        JoinRule joinRule = new JoinRule(column);

        List<ResultPathValue> columnRowsValues = valuesByKeys.get(resultPathKey);
        for (ResultPathValue columnRowValue : columnRowsValues) {
            Node n = new Node().setValue(columnRowValue);

            if (node.nodeJoinMatch(n, joinRule)) {
                node.addNode(n);
                buildNode(n, valuesByKeys, descriptor, nextColumnNumber);
            }

        }


    }


}
