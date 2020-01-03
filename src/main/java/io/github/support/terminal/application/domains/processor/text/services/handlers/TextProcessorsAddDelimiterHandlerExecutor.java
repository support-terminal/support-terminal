package io.github.support.terminal.application.domains.processor.text.services.handlers;


import io.github.support.terminal.application.domains.processor.text.value.TextProcessorAddDelimiter;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.stream.Collectors;

import static io.github.support.terminal.application.domains.processor.text.value.TextProcessorType.ADD_DELIMITER;


@Slf4j
@Service
public class TextProcessorsAddDelimiterHandlerExecutor implements TextProcessHandlerExecutor<TextProcessorAddDelimiter> {

    @Override
    public String type() {
        return ADD_DELIMITER;
    }

    public String handle(String text, TextProcessorAddDelimiter request) {

        String[] lines = text.split(System.getProperty("line.separator"));
        if(StringUtils.isBlank(request.getPrefix())){
            request.setPrefix("");
        }
        if(StringUtils.isBlank(request.getSuffix())){
            request.setSuffix("");
        }

        return Arrays.stream(lines).filter(StringUtils::isNotBlank)
                .collect(Collectors.joining(request.getDelimiter()
                ,request.getPrefix(), request.getSuffix()));
    }

}

