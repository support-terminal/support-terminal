package io.github.support.terminal.application.domains.processor.text.services;


import io.github.support.terminal.application.domains.processor.text.dto.TextProcessorAddDelimiter;
import io.github.support.terminal.application.domains.processor.text.dto.TextProcessorFindNumberWithPrefix;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import static io.github.support.terminal.application.domains.processor.text.dto.TextProcessorType.ADD_DELIMITER;
import static io.github.support.terminal.application.domains.processor.text.dto.TextProcessorType.FIND_NUMBERS_WITH_PREFIX;


@Slf4j
@Service
public class TextProcessorsAddDelimiterHandler implements TextProcessHandler<TextProcessorAddDelimiter> {

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

