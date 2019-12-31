package io.github.support.terminal.application.domains.processor.text.services;


import io.github.support.terminal.application.domains.processor.text.dto.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;


@Slf4j
@Service
public class TextProcessorsFilterByKeyHandler implements TextProcessHandler {

    @Override
    public String type() {
        return TextProcessorType.FILTER_BY_KEY;
    }

    public String handle(String text, TextProcessor request) {
       return "result wuth key";
    }
}

