package io.github.bot.terminal.application.domains.notificarion_api.repository;


import io.github.bot.terminal.application.domains.notificarion_api.entity.AbstractNotificationApiDetails;
import lombok.RequiredArgsConstructor;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static org.dizitart.no2.objects.filters.ObjectFilters.eq;

@Service
@RequiredArgsConstructor
public class NotificationApiRepository {

    private final ObjectRepository<AbstractNotificationApiDetails> db;

    public void add(AbstractNotificationApiDetails snapshot) {
        db.insert(snapshot);
    }

    public Optional<AbstractNotificationApiDetails> findById(String id) {
        return Optional.ofNullable(db.find(eq("id", id)).firstOrDefault());
    }

    public List<AbstractNotificationApiDetails> findAll() {
        return db.find().toList();
    }

    public void deleteById(String id) {
        db.remove(eq("id", id));
    }

    public void update(AbstractNotificationApiDetails details) {
        db.update(details);
    }
}
