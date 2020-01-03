package io.github.support.terminal.application.domains.processor.text.value;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotBlank;

/**
 * Add delimiter between lines
 */
@Data
@Accessors(chain = true)
public class TextProcessorAddDelimiter extends TextProcessor {
    public TextProcessorAddDelimiter() {
        super(TextProcessorType.ADD_DELIMITER);
    }

    private String prefix;
    @NotBlank
    private String delimiter;
    private String suffix;
}
