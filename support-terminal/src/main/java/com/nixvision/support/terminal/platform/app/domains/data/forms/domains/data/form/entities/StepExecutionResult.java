package com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.entities;


import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.util.List;
import java.util.Map;

@Data
@Accessors(chain = true)
@EqualsAndHashCode
public class StepExecutionResult {
    private List<Map<String, Object>> dataSet;
}

