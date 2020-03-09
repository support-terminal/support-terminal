package io.github.support.terminal.application.domains.processor.text.services.handlers;


import io.github.support.terminal.application.domains.processor.text.value.TextProcessorFilterByKey;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import static io.github.support.terminal.application.domains.processor.text.value.TextProcessorType.FILTER_BY_KEY;


@Slf4j
@Service
public class TextProcessorsFilterByKeyHandlerExecutor implements TextProcessHandlerExecutor<TextProcessorFilterByKey> {

    @Override
    public String type() {
        return FILTER_BY_KEY;
    }

    public String handle(String text, TextProcessorFilterByKey request){
        String[] lines = text.split(System.getProperty("line.separator"));
        StringBuilder builder = new StringBuilder();
        for(String line : lines){
            if(line.contains(request.getKey())){
                builder.append(line.trim()).append(System.getProperty("line.separator"));
            }
        }
        return builder.toString();
    }
}

