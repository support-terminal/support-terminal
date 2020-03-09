package io.github.support.terminal.application.domains.forms.domains.data.form.services.handlers.steps;



import io.github.support.terminal.application.domains.core.action.models.results.ActionResult;
import io.github.support.terminal.application.domains.forms.domains.data.form.entities.StepExecutionTask;

/**
 * Это обработчики корый может обработать шаг
 */
interface StepTypeHandler {
   void startProcessing(StepExecutionTask stepExecutionTask);
   void endProcessing(ActionResult actionResult);
}
