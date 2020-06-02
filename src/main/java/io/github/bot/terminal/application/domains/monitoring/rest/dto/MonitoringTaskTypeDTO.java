package io.github.bot.terminal.application.domains.monitoring.rest.dto;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class MonitoringTaskTypeDTO {
    private String label;
    private String type;
}
