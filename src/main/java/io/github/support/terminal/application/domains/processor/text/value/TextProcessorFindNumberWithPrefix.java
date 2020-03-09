package io.github.support.terminal.application.domains.processor.text.value;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotBlank;

/**
 * Find and return text between prefix and suffix
 */
@Data
@Accessors(chain = true)
public class TextProcessorFindNumberWithPrefix extends TextProcessor{
    public TextProcessorFindNumberWithPrefix() {
        super(TextProcessorType.FIND_NUMBERS_WITH_PREFIX);
    }
    private String prefix;
}
