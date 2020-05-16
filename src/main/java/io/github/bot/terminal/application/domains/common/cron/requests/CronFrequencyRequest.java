package io.github.bot.terminal.application.domains.common.cron.requests;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotBlank;

@Data
@Accessors(chain = true)
public class CronFrequencyRequest {
    @NotBlank
    protected String type;
    protected String cron;
}
