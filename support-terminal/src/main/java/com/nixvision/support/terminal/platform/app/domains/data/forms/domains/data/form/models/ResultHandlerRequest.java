package com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.models;

import com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.DataFormExecution;
import com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.results.descriptors.DataFormResultDescriptor;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class ResultHandlerRequest {
    private DataFormResultDescriptor descriptor;
    private DataFormExecution execution;
}