package io.github.support.terminal.application.domains.processor.text.value;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = TextProcessorFilterByKey.class, name = TextProcessorType.FILTER_BY_KEY),
        @JsonSubTypes.Type(value = TextProcessorFindNumberWithPrefix.class, name = TextProcessorType.FIND_NUMBERS_WITH_PREFIX),
        @JsonSubTypes.Type(value = TextProcessorAddDelimiter.class, name = TextProcessorType.ADD_DELIMITER)
})
public abstract class TextProcessor {
    @NotBlank
    private String type;

    public TextProcessor(String type) {
        this.type = type;
    }
}
