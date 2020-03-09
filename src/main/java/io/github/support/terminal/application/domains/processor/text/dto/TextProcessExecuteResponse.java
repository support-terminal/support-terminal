package io.github.support.terminal.application.domains.processor.text.dto;


import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class TextProcessExecuteResponse {
    private String result;
}
