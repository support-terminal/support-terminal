package io.github.bot.terminal.application.domains.notificarion_api.rest.dto;

import lombok.Data;

@Data
public abstract class NotificationApiDTO {
    public NotificationApiDTO(String type) {
        this.type = type;
    }

    protected String id;
    protected String label;
    protected String state;
    private String type;
}
