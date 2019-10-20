package io.github.support.terminal.application.domains.core.bots.services;



import io.github.support.terminal.application.domains.core.bots.entities.JoinRequest;
import io.github.support.terminal.application.domains.core.bots.exceptions.JoinRequestNotFoundException;
import io.github.support.terminal.application.domains.core.bots.repositories.JoinRequestRepository;
import io.github.support.terminal.application.domains.core.bots.values.JoinRequestStates;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

import static java.util.Optional.ofNullable;

@Service
@Transactional
@RequiredArgsConstructor
public class JoinRequestsService {

    private final JoinRequestRepository joinRequestRepository;

    public void addNewRequest(JoinRequest joinRequest) {
        if (joinRequest == null) {
            throw new IllegalArgumentException("Null request");
        }

        Collection<String> accountsIds
                = getByTelegramBotId(joinRequest.getBotId()).stream()
                .map(JoinRequest::getAccountId)
                .collect(Collectors.toList());

        if(accountsIds.contains(joinRequest.getAccountId())){
            return;
        }

        joinRequest.setCreatedDate(new Date())
                .setId(UUID.randomUUID().toString())
                .setState(JoinRequestStates.IS_AWAITING_APPROVAL);
        joinRequestRepository.add(joinRequest);
    }

    JoinRequest update(JoinRequest joinRequest) {
        return joinRequestRepository.update(joinRequest);
    }

    public JoinRequest getById(String id) {
        return ofNullable(joinRequestRepository.findById(id))
                .orElseThrow(() -> new JoinRequestNotFoundException());
    }

    public Collection<JoinRequest> getByTelegramBotId(String telegramBotId) {
        return ofNullable(joinRequestRepository.findByTelegramBotId(telegramBotId))
                .orElse(Collections.emptyList());
    }

    public List<JoinRequest> getAll() {
        return joinRequestRepository.findAll();
    }

    void delete(String id) {
        joinRequestRepository.deleteById(id);
    }

}
