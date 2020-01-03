package io.github.support.terminal.application.domains.processor.text.services;


import io.github.support.terminal.application.domains.processor.text.dto.TextProcessor;

interface TextProcessHandler<T extends TextProcessor> {

    String type();

    String handle(String text, T request);
}

