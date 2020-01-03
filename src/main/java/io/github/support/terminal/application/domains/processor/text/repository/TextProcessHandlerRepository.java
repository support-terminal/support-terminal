package io.github.support.terminal.application.domains.processor.text.repository;


import io.github.support.terminal.application.domains.processor.text.entities.TextProcessHandler;
import lombok.RequiredArgsConstructor;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

import static org.dizitart.no2.objects.filters.ObjectFilters.eq;

@Repository
@RequiredArgsConstructor
public class TextProcessHandlerRepository {

    private final ObjectRepository<TextProcessHandler> textProcessHandlerObjectRepository;

    public TextProcessHandler add(TextProcessHandler textProcessHandler) {
        textProcessHandlerObjectRepository.insert(textProcessHandler);
        return textProcessHandlerObjectRepository.find(eq("id",
                textProcessHandler.getId())).firstOrDefault();
    }

    public TextProcessHandler update(TextProcessHandler textProcessHandler) {
        textProcessHandlerObjectRepository.update(textProcessHandler);
        return textProcessHandlerObjectRepository
                .find(eq("id", textProcessHandler.getId())).firstOrDefault();
    }


    public Optional<TextProcessHandler> findById(String id) {
        return Optional.ofNullable(textProcessHandlerObjectRepository
                .find(eq("id", id)).firstOrDefault());
    }

    public List<TextProcessHandler> findAll() {
        return textProcessHandlerObjectRepository.find().toList();
    }

    public void deleteById(String id) {
        textProcessHandlerObjectRepository
                .remove(eq("id", id));
    }

}
