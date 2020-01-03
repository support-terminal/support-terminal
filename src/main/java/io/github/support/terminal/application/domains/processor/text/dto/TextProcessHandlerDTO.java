package io.github.support.terminal.application.domains.processor.text.dto;


import io.github.support.terminal.application.domains.processor.text.value.TextProcessor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.dizitart.no2.objects.Id;

import java.util.ArrayList;
import java.util.List;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(of={"id"})
public class TextProcessHandlerDTO {

    @Id
    private String id;

    private String name;

    private List<TextProcessor> processors = new ArrayList<>();

}

