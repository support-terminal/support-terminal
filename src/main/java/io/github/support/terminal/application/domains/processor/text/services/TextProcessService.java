package io.github.support.terminal.application.domains.processor.text.services;


import io.github.support.terminal.application.domains.processor.text.dto.TextProcessingRequest;
import io.github.support.terminal.application.domains.processor.text.dto.TextProcessingResponse;
import io.github.support.terminal.application.domains.processor.text.dto.TextProcessor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.function.Function;

import static java.util.stream.Collectors.toMap;


@Slf4j
@Service
public class TextProcessService {

    private final Map<String, TextProcessHandler> handlers;

    @Autowired
    public TextProcessService(List<TextProcessHandler> handlers) {
        this.handlers = handlers.stream().collect(toMap(
                TextProcessHandler::type,
                Function.identity()
        ));
    }

    public TextProcessingResponse process(TextProcessingRequest request) {
        String result = request.getText();
        for (TextProcessor processor : request.getProcessors()) {
            result = handlers.get(processor.getType()).handle(result, processor);
        }
        return new TextProcessingResponse().setText(result);
    }
}

