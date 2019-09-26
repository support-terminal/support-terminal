package io.github.support.terminal.app.domains.core.action.handlers;


import io.github.support.terminal.app.domains.core.action.models.ActionExecution;

/**
 * Это обработчики коры которые могут отрабатывать действия и возвращать запросившему результат
 */
interface ActionHandler {
   void handle(ActionExecution actionExecution);
}
