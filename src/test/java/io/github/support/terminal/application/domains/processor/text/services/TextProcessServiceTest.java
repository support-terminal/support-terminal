package io.github.support.terminal.application.domains.processor.text.services;

import io.github.support.terminal.application.domains.processor.text.dto.TextProcessingRequest;
import io.github.support.terminal.application.domains.processor.text.dto.TextProcessingResponse;
import io.github.support.terminal.application.domains.processor.text.dto.TextProcessorFilterByKey;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Collections;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(SpringExtension.class)
@Import(TextProcessServiceTestConfig.class)
public class TextProcessServiceTest {

    @Autowired
    private TextProcessService textProcessService;

    @Test
    public void filterByKeyMiddleRow(){
        TextProcessingRequest request = new TextProcessingRequest()
                .setText("Text \n key Key \n FFF")
                .setProcessors(Collections.singletonList(new TextProcessorFilterByKey().setKey("key")));
        TextProcessingResponse result = textProcessService.process(request);
        assertEquals("key Key\n",  result.getText());
    }

    @Test
    public void filterByKeyAmongEmptyRows(){
        TextProcessingRequest request = new TextProcessingRequest()
                .setText(" \n zzz Key \n FFF \nzzzz ")
                .setProcessors(Collections.singletonList(new TextProcessorFilterByKey().setKey("zzz")));
        TextProcessingResponse result = textProcessService.process(request);
        assertEquals("zzz Key\nzzzz\n",  result.getText());
    }


}

