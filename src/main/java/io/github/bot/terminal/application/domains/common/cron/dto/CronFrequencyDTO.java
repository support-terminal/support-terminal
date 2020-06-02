package io.github.bot.terminal.application.domains.common.cron.dto;


import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class CronFrequencyDTO {
    private String label;
    private String cron;
}

