package io.github.bot.terminal.application.domains.db_connection.rest.dto;


import lombok.Data;


@Data
public class CheckDbConnectionDTO {
    private Boolean success;

    public CheckDbConnectionDTO(Boolean success) {
        this.success = success;
    }
}
