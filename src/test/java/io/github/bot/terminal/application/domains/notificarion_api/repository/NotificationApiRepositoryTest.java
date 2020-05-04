package io.github.bot.terminal.application.domains.notificarion_api.repository;

import io.github.bot.terminal.application.domains.notificarion_api.NotificationApiRepositoryTestConfig;
import io.github.bot.terminal.application.domains.notificarion_api.entity.SlackNotificationApiDetails;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiState;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;


@ExtendWith(SpringExtension.class)
@Import(NotificationApiRepositoryTestConfig.class)
public class NotificationApiRepositoryTest {

    @Autowired
    NotificationApiRepository repository;


    private String id = "id";
    private String label = "label";
    private NotificationApiState state = NotificationApiState.ENABLED;
    private String chanel = "chanel-name";
    private String token = "token";


    @Test
    public void addDetails(){
        SlackNotificationApiDetails details = new SlackNotificationApiDetails();
        details.setId(id);
        details.setLabel(label);
        details.setType(NotificationApiType.SLACK_BOT);
        details.setState(state);
        details.setChanel(chanel);
        details.setToken(token);

        repository.add(details);

        SlackNotificationApiDetails byId = (SlackNotificationApiDetails)repository.findById(id).get();
        assertEquals(label, byId.getLabel());
        assertEquals(state, byId.getState());
        assertEquals(token, byId.getToken());
        assertEquals(chanel, byId.getChanel());
        assertEquals(NotificationApiType.SLACK_BOT, byId.getType());
    }

}

