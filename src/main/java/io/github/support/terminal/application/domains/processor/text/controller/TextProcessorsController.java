package io.github.support.terminal.application.domains.processor.text.controller;


import io.github.support.terminal.application.domains.processor.text.dto.TextProcessingRequest;
import io.github.support.terminal.application.domains.processor.text.dto.TextProcessingResponse;
import io.github.support.terminal.application.domains.processor.text.services.TextProcessService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;


@RestController
@Slf4j
@RequestMapping("/api/processors/text")
@RequiredArgsConstructor
public class TextProcessorsController {

    private final TextProcessService textProcessService;

    @PostMapping("/process")
    public TextProcessingResponse process(@RequestBody @Valid TextProcessingRequest request) {
        return textProcessService.process(request);
    }

}

