package com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.services.handlers.steps;



import com.nixvision.support.terminal.platform.app.domains.core.action.models.results.ActionResult;
import com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.entities.StepExecutionTask;

/**
 * Это обработчики корый может обработать шаг
 */
interface StepTypeHandler {
   void startProcessing(StepExecutionTask stepExecutionTask);
   void endProcessing(ActionResult actionResult);
}
