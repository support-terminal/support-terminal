package com.nixvision.support.terminal.platform.app.domains.core.action.handlers;


import com.nixvision.support.terminal.platform.app.domains.core.action.models.ActionExecution;

/**
 * Это обработчики коры которые могут отрабатывать действия и возвращать запросившему результат
 */
interface ActionHandler {
   void handle(ActionExecution actionExecution);
}
