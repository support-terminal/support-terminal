package io.github.support.terminal.application.domains.processor.text.dto;

import lombok.Data;
import lombok.experimental.Accessors;

/**
 * Find and return text lines contains key word
 */
@Data
@Accessors(chain = true)
public class TextProcessorFilterByKey extends TextProcessor{
    public TextProcessorFilterByKey() {
        super(TextProcessorType.FILTER_BY_KEY);
    }
    private String key;
}
