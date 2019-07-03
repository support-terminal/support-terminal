package com.nixvision.support.terminal.platform.app.domains.core.source.dbs.models;


import lombok.Data;


@Data
public class CheckDbConnectionDTO {
    private Boolean success;

    public CheckDbConnectionDTO(Boolean success) {
        this.success = success;
    }
}
