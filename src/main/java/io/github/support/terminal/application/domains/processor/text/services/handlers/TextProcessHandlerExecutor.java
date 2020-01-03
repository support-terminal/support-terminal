package io.github.support.terminal.application.domains.processor.text.services.handlers;


import io.github.support.terminal.application.domains.processor.text.value.TextProcessor;

public interface TextProcessHandlerExecutor<T extends TextProcessor> {

    String type();

    String handle(String text, T request);
}

