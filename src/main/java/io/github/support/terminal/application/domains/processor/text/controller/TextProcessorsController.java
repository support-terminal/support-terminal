package io.github.support.terminal.application.domains.processor.text.controller;


import io.github.support.terminal.application.domains.processor.text.dto.TextProcessExecuteRequest;
import io.github.support.terminal.application.domains.processor.text.dto.TextProcessExecuteResponse;
import io.github.support.terminal.application.domains.processor.text.dto.TextProcessHandlerDTO;
import io.github.support.terminal.application.domains.processor.text.dto.TextProcessHandlerRequest;
import io.github.support.terminal.application.domains.processor.text.services.TextProcessApiService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@Slf4j
@RequestMapping("/api/text/process/handlers")
@RequiredArgsConstructor
public class TextProcessorsController {

    private final TextProcessApiService textProcessService;

    @PostMapping()
    public TextProcessHandlerDTO add(@RequestBody @Valid TextProcessHandlerRequest request) {
        return textProcessService.add(request);
    }

    @PutMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public TextProcessHandlerDTO update(@PathVariable String id,
                                        @RequestBody @Valid TextProcessHandlerRequest request) {
        return textProcessService.update(id, request);
    }

    @GetMapping
    @ResponseStatus(code = HttpStatus.OK)
    public List<TextProcessHandlerDTO> getAll(){
        return textProcessService.getList();
    }

    @GetMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public TextProcessHandlerDTO getById(@PathVariable String id) {
        return textProcessService.getById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String id) {
        textProcessService.delete(id);
    }

    @PostMapping("/execute")
    @ResponseStatus(code = HttpStatus.OK)
    public TextProcessExecuteResponse execute(@RequestBody TextProcessExecuteRequest request) {
        return textProcessService.execute(request);
    }

}

