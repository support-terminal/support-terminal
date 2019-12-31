package io.github.support.terminal.application.domains.processor.text.services;


import io.github.support.terminal.application.domains.processor.text.dto.TextProcessingRequest;
import io.github.support.terminal.application.domains.processor.text.dto.TextProcessingResponse;
import io.github.support.terminal.application.domains.processor.text.dto.TextProcessor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.function.Function;

import static java.util.stream.Collectors.toMap;


public interface TextProcessService {
    TextProcessingResponse process(TextProcessingRequest request);
}

