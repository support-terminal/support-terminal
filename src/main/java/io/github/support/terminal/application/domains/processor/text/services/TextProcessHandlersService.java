package io.github.support.terminal.application.domains.processor.text.services;


import io.github.support.terminal.application.domains.processor.text.entities.TextProcessHandler;
import io.github.support.terminal.application.domains.processor.text.repository.TextProcessHandlerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Slf4j
@Service
@RequiredArgsConstructor
public class TextProcessHandlersService {

    private final TextProcessHandlerRepository textProcessHandlerRepository;

    public TextProcessHandler add(TextProcessHandler handler) {
        return textProcessHandlerRepository.add(handler);
    }

    TextProcessHandler getById(String id) {
        return textProcessHandlerRepository.findById(id).get();
    }

    TextProcessHandler update(TextProcessHandler user) {
        return textProcessHandlerRepository.update(user);
    }

    Collection<TextProcessHandler> getAll() {
        return textProcessHandlerRepository.findAll();
    }

    void delete(String id) {
        textProcessHandlerRepository.deleteById(id);
    }
}
