package io.github.bot.terminal.application.domains.common.conditions.factory;


import io.github.bot.terminal.application.domains.common.conditions.entity.Condition;
import io.github.bot.terminal.application.domains.common.conditions.entity.ConditionDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ConditionsFactory {



    public Condition build(ConditionDetails details) {
        return new Condition()
                .setConditionType(details.getConditionType())
                .setExpectedValue(details.getExpectedValue());
    }


}
