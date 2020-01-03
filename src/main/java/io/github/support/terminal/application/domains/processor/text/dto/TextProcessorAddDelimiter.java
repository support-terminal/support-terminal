package io.github.support.terminal.application.domains.processor.text.dto;

import lombok.Data;
import lombok.experimental.Accessors;

/**
 * Add delimiter between lines
 */
@Data
@Accessors(chain = true)
public class TextProcessorAddDelimiter extends TextProcessor{
    public TextProcessorAddDelimiter() {
        super(TextProcessorType.ADD_DELIMITER);
    }
    private String prefix;
    private String delimiter;
    private String suffix;
}
