package io.github.support.terminal.application.domains.processor.text.services;

import io.github.support.terminal.application.domains.processor.text.dto.TextProcessExecuteRequest;
import io.github.support.terminal.application.domains.processor.text.dto.TextProcessExecuteResponse;
import io.github.support.terminal.application.domains.processor.text.dto.TextProcessHandlerDTO;
import io.github.support.terminal.application.domains.processor.text.dto.TextProcessHandlerRequest;
import io.github.support.terminal.application.domains.processor.text.entities.TextProcessHandler;
import io.github.support.terminal.application.domains.processor.text.repository.TextProcessHandlerRepository;
import io.github.support.terminal.application.domains.processor.text.value.TextProcessor;
import io.github.support.terminal.application.domains.processor.text.value.TextProcessorAddDelimiter;
import io.github.support.terminal.application.domains.processor.text.value.TextProcessorFilterByKey;
import io.github.support.terminal.application.domains.processor.text.value.TextProcessorFindNumberWithPrefix;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(SpringExtension.class)
@Import(TextProcessServiceTestConfig.class)
public class TextProcessApiServiceTest {

    @Autowired
    private TextProcessApiService textProcessService;

    @MockBean
    TextProcessHandlerRepository textProcessHandlerRepository;

    @Test
    public void combinate() {

        List<TextProcessor> processors = new ArrayList<>();
        processors.add(new TextProcessorFilterByKey().setKey("там"));
        processors.add(new TextProcessorFindNumberWithPrefix().setPrefix("Акт№ "));
        processors.add(new TextProcessorAddDelimiter()
                .setPrefix("'").setDelimiter("','").setSuffix("'"));

        TextProcessHandler handler = new TextProcessHandler()
                .setId("1")
                .setName("Поиск актов")
                .setProcessors(processors);

        when(textProcessHandlerRepository.findById("1")).thenReturn(Optional.of(handler));


        TextProcessExecuteRequest requestExecute = new TextProcessExecuteRequest()
                .setHandlerId("1")
                .setText("Поиск Акт№ 234 чтото там чтото \n, потом Акт№ 123 \n Акт№ 345 там \n");
        TextProcessExecuteResponse executeResult = textProcessService.execute(requestExecute);
        assertEquals("'234','345'", executeResult.getResult());

    }

}

