package io.github.support.terminal.app.domains.data.forms.domains.data.form.entities.results.descriptors;

import lombok.Data;
import lombok.experimental.Accessors;

//описание колонки в итоговой таблице предоставления результата
@Data
@Accessors(chain = true)
public class Column{
    private Integer order;//заголовок колонки
    private String header;//заголовок колонки
    private String resultPath;//откуда взять значение для колонки
    private String joinRule;//правило для заполения при использовании справоника
}
