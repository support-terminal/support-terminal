package io.github.support.terminal.application.domains.processor.text.value;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotBlank;

/**
 * Find and return text lines contains key word
 */
@Data
@Accessors(chain = true)
public class TextProcessorFilterByKey extends TextProcessor{
    public TextProcessorFilterByKey() {
        super(TextProcessorType.FILTER_BY_KEY);
    }
    @NotBlank
    private String key;
}
