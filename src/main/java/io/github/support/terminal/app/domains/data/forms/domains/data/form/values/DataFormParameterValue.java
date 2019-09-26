package io.github.support.terminal.app.domains.data.forms.domains.data.form.values;


import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class DataFormParameterValue {

    @NotBlank
    private String label; //если нейм совпадает то воспринимается как коллекция и будет написана через запятую

    @NotBlank
    private String type;

    @NotBlank
    private String value;

}

