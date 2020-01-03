package io.github.support.terminal.application.domains.processor.text.services;

import io.github.support.terminal.application.domains.processor.text.dto.*;

import io.github.support.terminal.application.domains.processor.text.value.TextProcessor;
import io.github.support.terminal.application.domains.processor.text.value.TextProcessorAddDelimiter;
import io.github.support.terminal.application.domains.processor.text.value.TextProcessorFilterByKey;
import io.github.support.terminal.application.domains.processor.text.value.TextProcessorFindNumberWithPrefix;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(SpringExtension.class)
@Import(TextProcessServiceTestConfig.class)
public class TextProcessApiServiceTest {

    @Autowired
    private TextProcessApiService textProcessService;

    @Test
    public void filterByKeyMiddleRow(){
        TextProcessHandlerRequest request = new TextProcessHandlerRequest()
                .setText("Text \n key Key \n FFF")
                .setProcessors(Collections.singletonList(new TextProcessorFilterByKey().setKey("key")));
        AddTextProcessingResponse result = textProcessService.add(request);
        assertEquals("key Key\n",  result.getText());
    }

    @Test
    public void filterByKeyAmongEmptyRows(){
        TextProcessHandlerRequest request = new TextProcessHandlerRequest()
                .setText(" \n zzz Key \n FFF \nzzzz ")
                .setProcessors(Collections.singletonList(new TextProcessorFilterByKey().setKey("zzz")));
        AddTextProcessingResponse result = textProcessService.add(request);
        assertEquals("zzz Key\nzzzz\n",  result.getText());
    }

    @Test
    public void addDelimiter(){
        TextProcessHandlerRequest request = new TextProcessHandlerRequest()
                .setText("234\n123\n345\n")
                .setProcessors(Collections.singletonList(new TextProcessorAddDelimiter()
                        .setPrefix("'").setDelimiter("','").setSuffix("'")));
        AddTextProcessingResponse result = textProcessService.add(request);
        assertEquals("'234','123','345'",  result.getText());

    }

    @Test
    public void findByPrefixAndSuffix(){
        TextProcessHandlerRequest request = new TextProcessHandlerRequest()
                .setText("Поиск Акт№ 234 чтото там чтото , потом Акт№ 123 \n Акт№ 345 \n")
                .setProcessors(Collections.singletonList(new TextProcessorFindNumberWithPrefix()
                        .setPrefix("Акт№ ")));
        AddTextProcessingResponse result = textProcessService.add(request);
        assertEquals("234\n123\n345\n",  result.getText());

    }


    @Test
    public void combinate(){

        List<TextProcessor> processors = new ArrayList<>();
        processors.add(new TextProcessorFilterByKey().setKey("там"));
        processors.add(new TextProcessorFindNumberWithPrefix().setPrefix("Акт№ "));
        processors.add(new TextProcessorAddDelimiter()
                .setPrefix("'").setDelimiter("','").setSuffix("'"));

        TextProcessHandlerRequest request = new TextProcessHandlerRequest()
                .setText("Поиск Акт№ 234 чтото там чтото \n, потом Акт№ 123 \n Акт№ 345 там \n")
                .setProcessors(processors);
        AddTextProcessingResponse result = textProcessService.add(request);
        assertEquals("'234','345'",  result.getText());

    }


}

