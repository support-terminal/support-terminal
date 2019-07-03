package com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.services.handlers.results;


import com.nixvision.support.terminal.platform.app.domains.data.forms.domains.data.form.models.ResultHandlerRequest;

/**
 * Это обработчики корый может обработать результат
 */
interface ResultTypeHandler {
   void prepare(ResultHandlerRequest request);
}
