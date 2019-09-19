package io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.services.handlers;


import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.StepExecutionTask;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.models.ResultPathKey;
import io.github.support.terminal.platform.app.domains.data.forms.domains.data.form.models.ResultPathValue;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class ResultsDataSetHelperService {


    /**
     * Get known values from step results
     * @param stepExecutionTasks - steps
     */
    public static Map<ResultPathKey, List<ResultPathValue>> getKeyValuesMap(List<StepExecutionTask> stepExecutionTasks) {

        Map<ResultPathKey, List<ResultPathValue>> resultMap = new HashMap<>();
        for (int i = 0; i < stepExecutionTasks.size(); i++) {

            int resultNumber = i + 1;
            StepExecutionTask task = stepExecutionTasks.get(i);
            if( ! task.hasResult()){
                continue;
            }

            List<Map<String, Object>> dataSet = task.getResult().getDataSet();

            for (Map<String, Object> row : dataSet) {

                Map<ResultPathKey, Object> joinValues = new HashMap<>();
                row.forEach((k2, v2) -> {
                    ResultPathKey key2 = new ResultPathKey(resultNumber, k2);
                    joinValues.put(key2,v2);
                });

                row.forEach((k, v) -> {

                    ResultPathKey key = new ResultPathKey(resultNumber, k);

                    List<ResultPathValue> objects = resultMap.getOrDefault(key, new ArrayList<>());

                    ResultPathValue value = new ResultPathValue().setValue(v).setJoinValues(joinValues);
                    objects.add(value);
                    resultMap.put(key, objects);
                });
            }

        }
        return resultMap;
    }

}
