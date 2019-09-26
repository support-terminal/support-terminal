package io.github.support.terminal.app.domains.data.forms.domains.data.form.repositories;


import io.github.support.terminal.app.domains.data.forms.domains.data.form.entities.DataFormExecution;
import lombok.RequiredArgsConstructor;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import static org.dizitart.no2.objects.filters.ObjectFilters.eq;

@Repository
@RequiredArgsConstructor
public class DataFormExecutionRepository {

    private final ObjectRepository<DataFormExecution> dataFormExecutionObjectRepository;

    public DataFormExecution add(DataFormExecution dataFormExecution) {
        dataFormExecutionObjectRepository.insert(dataFormExecution);
        return dataFormExecutionObjectRepository.find(eq("id", dataFormExecution.getId())).firstOrDefault();
    }

    public DataFormExecution update(DataFormExecution dataFormExecution) {
        dataFormExecutionObjectRepository.update(dataFormExecution);
        return dataFormExecutionObjectRepository.find(eq("id", dataFormExecution.getId())).firstOrDefault();
    }


    public DataFormExecution findById(String id) {
        return dataFormExecutionObjectRepository.find(eq("id", id)).firstOrDefault();
    }

    public List<DataFormExecution> findAll() {
        return dataFormExecutionObjectRepository.find().toList();
    }

    public void deleteById(String id) {
        dataFormExecutionObjectRepository.remove(eq("id", id));
    }
    
}
