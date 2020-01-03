package io.github.support.terminal.application.domains.processor.text.services;


import io.github.support.terminal.application.domains.processor.text.dto.TextProcessorFindNumberWithPrefix;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static io.github.support.terminal.application.domains.processor.text.dto.TextProcessorType.FIND_NUMBERS_WITH_PREFIX;


@Slf4j
@Service
public class TextProcessorsFindNumbersWithPrefixHandler implements TextProcessHandler<TextProcessorFindNumberWithPrefix> {

    @Override
    public String type() {
        return FIND_NUMBERS_WITH_PREFIX;
    }

    public String handle(String text, TextProcessorFindNumberWithPrefix request) {
        String prefix = request.getPrefix();
        Pattern p = Pattern.compile(request.getPrefix()+"\\d+");
        Matcher m = p.matcher(text);
        List<String> matchesWithPrefix = new ArrayList<>();
        while (m.find()) {
            matchesWithPrefix.add(m.group());
        }

        StringBuilder builder = new StringBuilder();
        matchesWithPrefix.stream()
             .forEach(s ->
                     builder.append(s.substring(prefix.length()))
                             .append(System.getProperty("line.separator")));
        return builder.toString();
    }

}

