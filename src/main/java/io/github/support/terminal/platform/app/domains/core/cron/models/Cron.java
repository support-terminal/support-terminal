package io.github.support.terminal.platform.app.domains.core.cron.models;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.github.support.terminal.platform.app.domains.core.cron.values.CronTypes;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = CronEvery1Minute.class, name = CronTypes.EVERY_1_MINUTE),
        @JsonSubTypes.Type(value = CronEvery5Minutes.class, name = CronTypes.EVERY_5_MINUTES),
        @JsonSubTypes.Type(value = CronEvery15Minutes.class, name = CronTypes.EVERY_15_MINUTES),
        @JsonSubTypes.Type(value = CronEveryHour.class, name = CronTypes.EVERY_HOUR)
})
public abstract class Cron {
    @NotBlank
    protected String type;
    protected String cron;
    public abstract void validate();
}

