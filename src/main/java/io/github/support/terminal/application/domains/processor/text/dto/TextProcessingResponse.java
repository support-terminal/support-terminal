package io.github.support.terminal.application.domains.processor.text.dto;


import lombok.Data;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
@Accessors(chain = true)
public class TextProcessingResponse {
    private String text;
}
