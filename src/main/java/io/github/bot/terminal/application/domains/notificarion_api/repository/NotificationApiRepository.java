package io.github.bot.terminal.application.domains.notificarion_api.repository;


import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApiDetails;
import lombok.RequiredArgsConstructor;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static org.dizitart.no2.objects.filters.ObjectFilters.eq;

@Service
@RequiredArgsConstructor
public class NotificationApiRepository {

    private final ObjectRepository<NotificationApiDetails> db;

    public void add(NotificationApiDetails snapshot) {
        db.insert(snapshot);
    }

    public Optional<NotificationApiDetails> findById(String id) {
        return Optional.ofNullable(db.find(eq("id", id)).firstOrDefault());
    }

    public List<NotificationApiDetails> findAll() {
        return db.find().toList();
    }

    public void deleteById(String id) {
        db.remove(eq("id", id));
    }

    public void update(NotificationApiDetails details) {
        db.update(details);
    }
}
