package io.github.support.terminal.application.domains.processor.text.dto;


import lombok.Data;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@Data
@Accessors(chain = true)
public class TextProcessingRequest {

    @NotBlank
    private String text;

    private List<TextProcessor> processors = new ArrayList<>();

}
