package io.github.support.terminal.platform.app.domains.core.bots.repositories;


import io.github.support.terminal.platform.app.domains.core.bots.entities.JoinRequest;
import lombok.RequiredArgsConstructor;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

import static org.dizitart.no2.objects.filters.ObjectFilters.eq;

@Repository
@RequiredArgsConstructor
public class JoinRequestRepository {

    private final ObjectRepository<JoinRequest> joinRequestRepository;

    public JoinRequest add(JoinRequest joinRequest) {
        joinRequestRepository.insert(joinRequest);
        return joinRequestRepository.find(eq("id", joinRequest.getId())).firstOrDefault();
    }

    public JoinRequest update(JoinRequest joinRequest) {
        joinRequestRepository.update(joinRequest);
        return joinRequestRepository.find(eq("id", joinRequest.getId())).firstOrDefault();
    }

    public JoinRequest findById(String id) {
        return joinRequestRepository.find(eq("id", id)).firstOrDefault();
    }

    public List<JoinRequest> findAll() {
        return joinRequestRepository.find().toList();
    }

    public void deleteById(String id) {
        joinRequestRepository.remove(eq("id", id));
    }

    public Collection<JoinRequest> findByTelegramBotId(String telegramBotId){
        return joinRequestRepository.find(eq("botId", telegramBotId)).toList();
    }

}
