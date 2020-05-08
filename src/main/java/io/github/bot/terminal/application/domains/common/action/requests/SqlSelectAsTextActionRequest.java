package io.github.bot.terminal.application.domains.common.action.requests;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class SqlSelectAsTextActionRequest extends ActionRequest {

    @NotBlank
    private String select;
    @NotBlank
    private String dataBaseId;
    @NotBlank
    private String resultTemplate;

}
