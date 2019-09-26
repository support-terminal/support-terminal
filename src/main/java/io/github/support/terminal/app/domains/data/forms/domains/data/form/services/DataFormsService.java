package io.github.support.terminal.app.domains.data.forms.domains.data.form.services;


import io.github.support.terminal.app.domains.data.forms.domains.data.form.entities.DataForm;
import io.github.support.terminal.app.domains.data.forms.domains.data.form.repositories.DataFormRepository;
import io.github.support.terminal.app.domains.data.forms.domains.data.form.values.DataFormStates;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.stream.Collectors;


@Service
@Transactional
@RequiredArgsConstructor
public class DataFormsService {

    private final DataFormRepository dataFormRepository;

    DataForm add(DataForm dataForm) {
        return dataFormRepository.add(dataForm);
    }

    DataForm update(DataForm dataForm) {
        return dataFormRepository.update(dataForm);
    }

    DataForm getById(String id) {
        return dataFormRepository.findById(id);
    }

    Collection<DataForm> getAll() {
        return dataFormRepository.findAll();
    }

    Collection<DataForm> getByBotId(String botId) {
        return dataFormRepository.getAllByBotId(botId);
    }

    public Collection<DataForm> getEnabledByBotId(String botId) {
        return getByBotId(botId)
                .stream().filter(c -> c.getState().equals(DataFormStates.ENABLED))
                .collect(Collectors.toList());
    }


    void delete(String id) {
        dataFormRepository.deleteById(id);
    }
}
