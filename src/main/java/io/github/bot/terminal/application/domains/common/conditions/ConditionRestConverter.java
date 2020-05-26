package io.github.bot.terminal.application.domains.common.conditions;


import io.github.bot.terminal.application.domains.common.conditions.dto.ConditionDTO;
import io.github.bot.terminal.application.domains.common.conditions.entity.ConditionDetails;
import io.github.bot.terminal.application.domains.common.conditions.requests.ConditionRequest;
import io.github.bot.terminal.application.domains.common.conditions.values.ConditionType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class ConditionRestConverter {

    public ConditionDetails mapToDetails(ConditionRequest request) {
        return new ConditionDetails()
                .setConditionType(ConditionType.valueOf(request.getType()))
                .setExpectedValue(request.getExpectedValue());
    }

    public ConditionDTO mapToDto(ConditionDetails details) {
        return new ConditionDTO()
                .setType(details.getConditionType().name())
                .setExpectedValue(details.getExpectedValue());
    }

}
