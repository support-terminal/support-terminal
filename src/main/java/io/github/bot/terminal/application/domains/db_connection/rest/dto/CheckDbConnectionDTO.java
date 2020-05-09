package io.github.bot.terminal.application.domains.db_connection.rest.dto;


import lombok.Data;

@Data
public class CheckDbConnectionDTO {
    private boolean success;

    public CheckDbConnectionDTO(boolean success) {
        this.success = success;
    }
}
