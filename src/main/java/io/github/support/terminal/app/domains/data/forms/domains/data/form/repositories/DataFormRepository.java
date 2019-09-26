package io.github.support.terminal.app.domains.data.forms.domains.data.form.repositories;


import io.github.support.terminal.app.domains.data.forms.domains.data.form.entities.DataForm;
import lombok.RequiredArgsConstructor;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

import static org.dizitart.no2.objects.filters.ObjectFilters.elemMatch;
import static org.dizitart.no2.objects.filters.ObjectFilters.eq;

@Repository
@RequiredArgsConstructor
public class DataFormRepository {

    private final ObjectRepository<DataForm> dataFormObjectRepository;

    public DataForm add(DataForm dataForm) {
        dataFormObjectRepository.insert(dataForm);
        return dataFormObjectRepository.find(eq("id", dataForm.getId())).firstOrDefault();
    }

    public DataForm update(DataForm dataForm) {
        dataFormObjectRepository.update(dataForm);
        return dataFormObjectRepository.find(eq("id", dataForm.getId())).firstOrDefault();
    }


    public DataForm findById(String id) {
        return dataFormObjectRepository.find(eq("id", id)).firstOrDefault();
    }

    public List<DataForm> findAll() {
        return dataFormObjectRepository.find().toList();
    }

    public void deleteById(String id) {
        dataFormObjectRepository.remove(eq("id", id));
    }
    
    public Collection<DataForm> getAllByBotId(String botId){
        return dataFormObjectRepository.find(elemMatch("botIds", eq("$", botId))).toList();
    }

}
