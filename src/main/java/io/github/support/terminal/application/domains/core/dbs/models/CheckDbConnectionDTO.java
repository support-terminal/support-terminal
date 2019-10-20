package io.github.support.terminal.application.domains.core.dbs.models;


import lombok.Data;


@Data
public class CheckDbConnectionDTO {
    private Boolean success;

    public CheckDbConnectionDTO(Boolean success) {
        this.success = success;
    }
}
