package io.github.support.terminal.application.domains.processor.text.dto;


import io.github.support.terminal.application.domains.processor.text.value.TextProcessor;
import lombok.Data;
import lombok.experimental.Accessors;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;

@Data
@Accessors(chain = true)
public class TextProcessHandlerRequest {

    @NotBlank
    private String name;

    private List<TextProcessor> processors = new ArrayList<>();

}
