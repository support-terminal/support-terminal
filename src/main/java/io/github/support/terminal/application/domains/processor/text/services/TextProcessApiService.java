package io.github.support.terminal.application.domains.processor.text.services;


import io.github.support.terminal.application.domains.processor.text.dto.TextProcessExecuteRequest;
import io.github.support.terminal.application.domains.processor.text.dto.TextProcessExecuteResponse;
import io.github.support.terminal.application.domains.processor.text.dto.TextProcessHandlerDTO;
import io.github.support.terminal.application.domains.processor.text.dto.TextProcessHandlerRequest;
import io.github.support.terminal.application.domains.processor.text.entities.TextProcessHandler;
import io.github.support.terminal.application.domains.processor.text.services.handlers.TextProcessHandlerExecutor;
import io.github.support.terminal.application.domains.processor.text.value.TextProcessor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.function.Function;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.toMap;


@Slf4j
@Service
public class TextProcessApiService {

    private final Map<String, TextProcessHandlerExecutor> handlers;
    private final TextProcessHandlersService textProcessHandlersService;

    @Autowired
    public TextProcessApiService(List<TextProcessHandlerExecutor> handlers,
                                 TextProcessHandlersService textProcessHandlersService) {
        this.handlers = handlers.stream().collect(toMap(
                TextProcessHandlerExecutor::type,
                Function.identity()
        ));
        this.textProcessHandlersService = textProcessHandlersService;
    }

    public TextProcessHandlerDTO add(TextProcessHandlerRequest request) {
        TextProcessHandler handler = new TextProcessHandler()
                .setId(UUID.randomUUID().toString())
                .setName(request.getName())
                .setProcessors(request.getProcessors());
        return mapToDTO(textProcessHandlersService.add(handler));
    }

    public TextProcessHandlerDTO update(String id, TextProcessHandlerRequest request) {
        TextProcessHandler handler = textProcessHandlersService.getById(id);
        handler.setName(request.getName());
        handler.setProcessors(request.getProcessors());
        return mapToDTO(textProcessHandlersService.update(handler));
    }

    public List<TextProcessHandlerDTO> getList() {
        return textProcessHandlersService.getAll().stream()
                .map(h -> mapToDTO(h)).collect(Collectors.toList());
    }

    public TextProcessHandlerDTO getById(String id) {
        return mapToDTO(textProcessHandlersService.getById(id));
    }

    public void delete(String id) {
        textProcessHandlersService.delete(id);
    }


    public TextProcessExecuteResponse execute(TextProcessExecuteRequest request) {
        String result = request.getText();

        List<TextProcessor> processors = textProcessHandlersService
                .getById(request.getHandlerId()).getProcessors();

        for (TextProcessor processor : processors) {
            result = handlers.get(processor.getType()).handle(result, processor);
        }
        return new TextProcessExecuteResponse().setResult(result);

    }

    private TextProcessHandlerDTO mapToDTO(TextProcessHandler handler) {
        return new TextProcessHandlerDTO()
                .setId(handler.getId())
                .setName(handler.getName())
                .setProcessors(handler.getProcessors());
    }
}

