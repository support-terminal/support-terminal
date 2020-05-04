package io.github.bot.terminal.application.domains.notificarion_api.factory;

import io.github.bot.terminal.application.domains.notificarion_api.entity.SlackNotificationApi;
import io.github.bot.terminal.application.domains.notificarion_api.entity.SlackNotificationApiDetails;
import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiState;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class NotificationApiFactoryTest {

    @Mock
    private NotificationApiRepository repository;

    private NotificationApiFactory factory;

    @Captor
    ArgumentCaptor<SlackNotificationApiDetails> detailsCaptor;


    private String label = "label";
    private NotificationApiState state = NotificationApiState.ENABLED;
    private String channel = "chanel-name";
    private String token = "token";


    @BeforeEach
    void init() {
        factory = new NotificationApiFactory(repository);
    }


    @Test
    void createNewSlackNotificationApi() {

        SlackNotificationApiDetails details = new SlackNotificationApiDetails();
        details.setLabel(label);
        details.setType(NotificationApiType.SLACK_BOT);
        details.setState(state);
        details.setChanel(channel);
        details.setToken(token);

        SlackNotificationApi api = (SlackNotificationApi) factory.createNew(details);

        assertNotNull(api.getDetails().getId());
        assertEquals(label, api.getDetails().getLabel());
        assertEquals(state, api.getDetails().getState());
        assertEquals(token, api.getDetails().getToken());
        assertEquals(channel, api.getDetails().getChanel());
        assertEquals(NotificationApiType.SLACK_BOT, api.getDetails().getType());

        verify(repository, times(1)).add(detailsCaptor.capture());
        SlackNotificationApiDetails passedDetails = detailsCaptor.getValue();
        assertEquals(label, passedDetails.getLabel());
        assertEquals(state, passedDetails.getState());
        assertEquals(token, passedDetails.getToken());
        assertEquals(channel, passedDetails.getChanel());
        assertEquals(NotificationApiType.SLACK_BOT, passedDetails.getType());

    }


}