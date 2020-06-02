package io.github.bot.terminal.application.domains.common.action.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class SqlSelectAsExcelFileActionDTO extends ActionDTO {
    @NotBlank
    private String select;
    @NotBlank
    private String dbConnectionId;
    @NotBlank
    private String fileNameTemplate;
}
