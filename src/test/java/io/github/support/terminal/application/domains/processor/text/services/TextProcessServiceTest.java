package io.github.support.terminal.application.domains.processor.text.services;

import io.github.support.terminal.application.domains.processor.text.dto.TextProcessingRequest;
import io.github.support.terminal.application.domains.processor.text.dto.TextProcessingResponse;
import io.github.support.terminal.application.domains.processor.text.dto.TextProcessorFilterByKey;
import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Collections;

@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = TextProcessServiceTestConfig.class)
public class TextProcessServiceTest {

    @Autowired
    private TextProcessService textProcessService;

    @Test
    public void filterByKey(){


        TextProcessingRequest request = new TextProcessingRequest()
                .setText("Text ")
                .setProcessors(Collections.singletonList(new TextProcessorFilterByKey().setKey("key")));

        TextProcessingResponse result = textProcessService.process(request);
        System.out.println(result.toString());





    }

}

