package io.github.support.terminal.app.domains.data.forms.rest;

import io.github.support.terminal.app.domains.data.forms.domains.data.form.dto.DataFormDTO;
import io.github.support.terminal.app.domains.data.forms.domains.data.form.entities.DataFormExecution;
import io.github.support.terminal.app.domains.data.forms.domains.data.form.requests.DataFormExecutionRequest;
import io.github.support.terminal.app.domains.data.forms.domains.data.form.requests.DataFormRequest;
import io.github.support.terminal.app.domains.data.forms.domains.data.form.services.DataFormsApiService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;


@RestController
@Slf4j
@RequestMapping("/api/data-forms/forms")
@RequiredArgsConstructor
public class DataFromsController {

    private final DataFormsApiService dataFormsApiService;

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public DataFormDTO add(@RequestBody @Valid DataFormRequest addDataFormRequest) throws Exception {
        return dataFormsApiService.add(addDataFormRequest);
    }

    @GetMapping
    @ResponseStatus(code = HttpStatus.OK)
    public Collection<DataFormDTO> getAll() throws Exception {
        return dataFormsApiService.getList();
    }


    @GetMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public DataFormDTO getById(@PathVariable String id) throws Exception {
        return dataFormsApiService.getById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String id) throws Exception {
        dataFormsApiService.delete(id);
    }


    @PutMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public DataFormDTO update(@PathVariable String id,
                              @RequestBody @Valid DataFormRequest request) throws Exception {
        return dataFormsApiService.update(id, request);
    }



    /**
     * Запрос на исполнение формы
     * @param formId - идентификатор формы которую нужно выполнить
     * @param request- параметры исполнения формы
     * @return
     * @throws Exception
     */
    @PostMapping("/{formId}/executions")
    @ResponseStatus(code = HttpStatus.OK)
    public DataFormExecution execute(@PathVariable String formId,
                                     @RequestBody @Valid DataFormExecutionRequest request) throws Exception {
       return dataFormsApiService.execute(formId, request);
    }

    /**
     * Запрос на исполнение формы
     * @param executionId- идентификатор выполнения
     * @throws Exception
     */
    @GetMapping("/executions/{executionId}")
    @ResponseStatus(code = HttpStatus.OK)
    public DataFormExecution getExecutionById(@PathVariable String executionId) throws Exception {
        return dataFormsApiService.getExecutionById(executionId);
    }



}

