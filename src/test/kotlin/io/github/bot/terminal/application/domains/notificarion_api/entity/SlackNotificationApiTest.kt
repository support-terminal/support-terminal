package io.github.bot.terminal.application.domains.notificarion_api.entity;

import io.github.bot.terminal.application.domains.integrations.slack.SlackApiClient;
import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiState;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class SlackNotificationApiTest {

    @Mock
    private NotificationApiRepository repository;
    @Mock
    private SlackApiClient client;

    private String id = "id";
    private String label = "label";
    private NotificationApiState state = NotificationApiState.ENABLED;
    private String chanel = "chanel-name";
    private String token = "token";

    @Test
    public void deleteSlackApi(){

        SlackNotificationApiDetails details = new SlackNotificationApiDetails();
        details.setId(id);
        details.setLabel(label);
        details.setType(NotificationApiType.SLACK_BOT);
        details.setState(state);
        details.setChanel(chanel);
        details.setToken(token);

        NotificationApi api1 = new SlackNotificationApi(details, repository, client);

        api1.delete();
        verify(repository, times(1)).deleteById(eq(id));

    }


}