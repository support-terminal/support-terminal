package io.github.bot.terminal.application.domains.common.cron.dto;


import lombok.Data;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotBlank;

@Data
@Accessors(chain = true)
public class CronFrequencyDTO {
    @NotBlank
    protected String type;
    protected String cron;
}

