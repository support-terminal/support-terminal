package io.github.bot.terminal.application.domains.notificarion_api.rest.dto;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class NotificationApiTypeDTO {
    private String label;
    private String type;
}
