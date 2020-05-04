package io.github.bot.terminal.application.domains.notificarion_api.rest;

import io.github.bot.terminal.application.domains.notificarion_api.entity.SlackNotificationApi;
import io.github.bot.terminal.application.domains.notificarion_api.entity.SlackNotificationApiDetails;
import io.github.bot.terminal.application.domains.notificarion_api.factory.NotificationApiFactory;
import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository;
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.SlackNotificationApiDTO;
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.SlackNotificationApiRequest;
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
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;


@ExtendWith(MockitoExtension.class)
class NotificationApiRestServiceTest {

    @Mock
    private NotificationApiFactory notificationApiFactory;
    @Mock
    private NotificationApiRepository repository;

    private NotificationApiRestConverter converter = spy(new NotificationApiRestConverter());
    private NotificationApiRestService restService;

    @Captor
    ArgumentCaptor<SlackNotificationApiDetails> detailsCaptor;

    private String id = "id";
    private String label = "label";
    private NotificationApiState state = NotificationApiState.ENABLED;
    private String chanel = "chanel-name";
    private String token = "token";


    @BeforeEach
    public void inti() {
        restService = new NotificationApiRestService(notificationApiFactory, converter);
    }


    @Test
    public void addNewNotificationApi() {

        SlackNotificationApiDetails details = new SlackNotificationApiDetails();
        details.setId(id);
        details.setLabel(label);
        details.setType(NotificationApiType.SLACK_BOT);
        details.setState(state);
        details.setChanel(chanel);
        details.setToken(token);

        SlackNotificationApi api = new SlackNotificationApi(details, repository);

        when(notificationApiFactory.createNew(any()))
                .thenReturn(api);

        SlackNotificationApiRequest request = new SlackNotificationApiRequest();
        request.setLabel(label);
        request.setToken(token);
        request.setChanel(chanel);
        request.setState(state.name());

        SlackNotificationApiDTO apiDTO = (SlackNotificationApiDTO)restService.add(request);
        assertEquals(id, apiDTO.getId());
        assertEquals(label, apiDTO.getLabel());
        assertEquals(state.name(), apiDTO.getState());
        assertEquals(token, apiDTO.getToken());
        assertEquals(chanel, apiDTO.getChanel());
        assertEquals(NotificationApiType.SLACK_BOT.name(), apiDTO.getType());

        verify(notificationApiFactory, times(1)).createNew(detailsCaptor.capture());
        SlackNotificationApiDetails convertedDetails = detailsCaptor.getValue();
        assertEquals(label, convertedDetails.getLabel());
        assertEquals(state, convertedDetails.getState());
        assertEquals(token, convertedDetails.getToken());
        assertEquals(chanel, convertedDetails.getChanel());
        assertEquals(NotificationApiType.SLACK_BOT, convertedDetails.getType());
    }


}