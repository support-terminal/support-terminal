package io.github.bot.terminal.application.domains.notificarion_api.rest;

import io.github.bot.terminal.application.domains.notificarion_api.entity.*;
import io.github.bot.terminal.application.domains.notificarion_api.factory.NotificationApiFactory;
import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository;
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.AbstractNotificationApiDTO;
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.NotificationApiTypeDTO;
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.SlackNotificationApiDTO;
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.TelegramNotificationApiDTO;
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.SlackNotificationApiRequest;
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.TelegramNotificationApiRequest;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiState;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
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
    ArgumentCaptor<SlackNotificationApiDetails> slackDetailsCaptor;
    @Captor
    ArgumentCaptor<TelegramNotificationApiDetails> telegramDetailsCaptor;

    private String id = "id";
    private String label = "label";
    private NotificationApiState state = NotificationApiState.ENABLED;
    private String chanel = "chanel-name";
    private String botFatherName = "botFatherName-name";
    private String token = "token";

    private String id2 = "id2";
    private String label2 = "label";
    private NotificationApiState state2 = NotificationApiState.DISABLED;
    private String chanel2 = "chanel-name2";
    private String botFatherName2 = "botFatherName-name2";
    private String token2 = "token2";


    @BeforeEach
    public void inti() {
        restService = new NotificationApiRestService(notificationApiFactory, converter);
    }


    @Test
    public void addUnknownNotificationApi() {
        SlackNotificationApiRequest request = new SlackNotificationApiRequest();
        request.setLabel(label);
        request.setType("SomeType");
        request.setToken(token);
        request.setChanel(chanel);
        request.setState(state.name());

        assertThrows(IllegalArgumentException.class, () ->
                restService.add(request)
        );

    }

    @Test
    public void mapFromUnknownNotificationApiType() {

        SlackNotificationApiDetails details = new SlackNotificationApiDetails();
        details.setId(id);
        details.setLabel(label);
        details.setType(null);
        details.setState(state);
        details.setChanel(chanel);
        details.setToken(token);

        NotificationApi api = new SlackNotificationApi(details, repository);

        when(notificationApiFactory.createNew(any()))
                .thenReturn(api);

        SlackNotificationApiRequest request = new SlackNotificationApiRequest();
        request.setLabel(label);
        request.setToken(token);
        request.setChanel(chanel);
        request.setState(state.name());

        assertThrows(IllegalArgumentException.class, () ->
                restService.add(request)
        );

    }

    @Test
    public void addNewSlackNotificationApi() {

        SlackNotificationApiDetails details = new SlackNotificationApiDetails();
        details.setId(id);
        details.setLabel(label);
        details.setType(NotificationApiType.SLACK_BOT);
        details.setState(state);
        details.setChanel(chanel);
        details.setToken(token);

        NotificationApi api = new SlackNotificationApi(details, repository);

        when(notificationApiFactory.createNew(any()))
                .thenReturn(api);

        SlackNotificationApiRequest request = new SlackNotificationApiRequest();
        request.setLabel(label);
        request.setToken(token);
        request.setChanel(chanel);
        request.setState(state.name());

        SlackNotificationApiDTO apiDTO = (SlackNotificationApiDTO) restService.add(request);
        assertEquals(id, apiDTO.getId());
        assertEquals(label, apiDTO.getLabel());
        assertEquals(state.name(), apiDTO.getState());
        assertEquals(token, apiDTO.getToken());
        assertEquals(chanel, apiDTO.getChanel());
        assertEquals(NotificationApiType.SLACK_BOT.name(), apiDTO.getType());

        verify(notificationApiFactory, times(1)).createNew(slackDetailsCaptor.capture());
        SlackNotificationApiDetails convertedDetails = slackDetailsCaptor.getValue();
        assertEquals(label, convertedDetails.getLabel());
        assertEquals(state, convertedDetails.getState());
        assertEquals(token, convertedDetails.getToken());
        assertEquals(chanel, convertedDetails.getChanel());
        assertEquals(NotificationApiType.SLACK_BOT, convertedDetails.getType());
    }


    @Test
    public void editSlackNotificationApi() {

        SlackNotificationApiDetails details = new SlackNotificationApiDetails();
        details.setId(id);
        details.setLabel(label2);
        details.setType(NotificationApiType.SLACK_BOT);
        details.setState(state2);
        details.setChanel(chanel2);
        details.setToken(token2);

        NotificationApi api = new SlackNotificationApi(details, repository);

        when(notificationApiFactory.merge(anyString(), any()))
                .thenReturn(api);

        SlackNotificationApiRequest request = new SlackNotificationApiRequest();
        request.setLabel(label2);
        request.setToken(token2);
        request.setChanel(chanel2);
        request.setState(state2.name());

        SlackNotificationApiDTO apiDTO = (SlackNotificationApiDTO) restService.edit(id, request);
        assertEquals(id, apiDTO.getId());
        assertEquals(label2, apiDTO.getLabel());
        assertEquals(state2.name(), apiDTO.getState());
        assertEquals(token2, apiDTO.getToken());
        assertEquals(chanel2, apiDTO.getChanel());
        assertEquals(NotificationApiType.SLACK_BOT.name(), apiDTO.getType());

        verify(notificationApiFactory, times(1)).merge(eq(id), slackDetailsCaptor.capture());
        SlackNotificationApiDetails convertedDetails = slackDetailsCaptor.getValue();
        assertEquals(label2, convertedDetails.getLabel());
        assertEquals(state2, convertedDetails.getState());
        assertEquals(token2, convertedDetails.getToken());
        assertEquals(chanel2, convertedDetails.getChanel());
        assertEquals(NotificationApiType.SLACK_BOT, convertedDetails.getType());
    }

    @Test
    public void getSlackNotificationApi() {

        SlackNotificationApiDetails details = new SlackNotificationApiDetails();
        details.setId(id);
        details.setLabel(label);
        details.setType(NotificationApiType.SLACK_BOT);
        details.setState(state);
        details.setChanel(chanel);
        details.setToken(token);

        NotificationApi api = new SlackNotificationApi(details, repository);

        when(notificationApiFactory.byId(eq(id)))
                .thenReturn(api);

        SlackNotificationApiDTO apiDTO = (SlackNotificationApiDTO) restService.get(id);
        assertEquals(id, apiDTO.getId());
        assertEquals(label, apiDTO.getLabel());
        assertEquals(state.name(), apiDTO.getState());
        assertEquals(token, apiDTO.getToken());
        assertEquals(chanel, apiDTO.getChanel());
        assertEquals(NotificationApiType.SLACK_BOT.name(), apiDTO.getType());

    }


    @Test
    public void addNewTelegramNotificationApi() {

        TelegramNotificationApiDetails details = new TelegramNotificationApiDetails();
        details.setId(id);
        details.setLabel(label);
        details.setType(NotificationApiType.TELEGRAM_BOT);
        details.setState(state);
        details.setBotFatherName(botFatherName);
        details.setToken(token);

        NotificationApi api = new TelegramNotificationApi(details, repository);

        when(notificationApiFactory.createNew(any()))
                .thenReturn(api);

        TelegramNotificationApiRequest request = new TelegramNotificationApiRequest();
        request.setLabel(label);
        request.setToken(token);
        request.setBotFatherName(botFatherName);
        request.setState(state.name());

        TelegramNotificationApiDTO apiDTO = (TelegramNotificationApiDTO) restService.add(request);
        assertEquals(id, apiDTO.getId());
        assertEquals(label, apiDTO.getLabel());
        assertEquals(state.name(), apiDTO.getState());
        assertEquals(token, apiDTO.getToken());
        assertEquals(botFatherName, apiDTO.getBotFatherName());
        assertEquals(NotificationApiType.TELEGRAM_BOT.name(), apiDTO.getType());

        verify(notificationApiFactory, times(1)).createNew(telegramDetailsCaptor.capture());
        TelegramNotificationApiDetails convertedDetails = telegramDetailsCaptor.getValue();
        assertEquals(label, convertedDetails.getLabel());
        assertEquals(state, convertedDetails.getState());
        assertEquals(token, convertedDetails.getToken());
        assertEquals(botFatherName, convertedDetails.getBotFatherName());
        assertEquals(NotificationApiType.TELEGRAM_BOT, convertedDetails.getType());
    }

    @Test
    public void editTelegramNotificationApi() {

        TelegramNotificationApiDetails details = new TelegramNotificationApiDetails();
        details.setId(id);
        details.setLabel(label2);
        details.setType(NotificationApiType.TELEGRAM_BOT);
        details.setState(state2);
        details.setBotFatherName(botFatherName2);
        details.setToken(token2);

        NotificationApi api = new TelegramNotificationApi(details, repository);

        when(notificationApiFactory.merge(anyString(), any()))
                .thenReturn(api);

        TelegramNotificationApiRequest request = new TelegramNotificationApiRequest();
        request.setLabel(label2);
        request.setToken(token2);
        request.setBotFatherName(botFatherName2);
        request.setState(state2.name());

        TelegramNotificationApiDTO apiDTO = (TelegramNotificationApiDTO) restService.edit(id, request);
        assertEquals(id, apiDTO.getId());
        assertEquals(label2, apiDTO.getLabel());
        assertEquals(state2.name(), apiDTO.getState());
        assertEquals(token2, apiDTO.getToken());
        assertEquals(botFatherName2, apiDTO.getBotFatherName());
        assertEquals(NotificationApiType.TELEGRAM_BOT.name(), apiDTO.getType());

        verify(notificationApiFactory, times(1)).merge(eq(id), telegramDetailsCaptor.capture());
        TelegramNotificationApiDetails convertedDetails = telegramDetailsCaptor.getValue();
        assertEquals(label2, convertedDetails.getLabel());
        assertEquals(state2, convertedDetails.getState());
        assertEquals(token2, convertedDetails.getToken());
        assertEquals(botFatherName2, convertedDetails.getBotFatherName());
        assertEquals(NotificationApiType.TELEGRAM_BOT, convertedDetails.getType());
    }


    @Test
    public void getTelegramNotificationApi() {

        TelegramNotificationApiDetails details = new TelegramNotificationApiDetails();
        details.setId(id);
        details.setLabel(label);
        details.setType(NotificationApiType.TELEGRAM_BOT);
        details.setState(state);
        details.setBotFatherName(botFatherName);
        details.setToken(token);

        NotificationApi api = new TelegramNotificationApi(details, repository);

        when(notificationApiFactory.byId(eq(id)))
                .thenReturn(api);

        TelegramNotificationApiDTO apiDTO = (TelegramNotificationApiDTO) restService.get(id);
        assertEquals(id, apiDTO.getId());
        assertEquals(label, apiDTO.getLabel());
        assertEquals(state.name(), apiDTO.getState());
        assertEquals(token, apiDTO.getToken());
        assertEquals(botFatherName, apiDTO.getBotFatherName());
        assertEquals(NotificationApiType.TELEGRAM_BOT.name(), apiDTO.getType());
    }


    @Test
    public void deleteNotificationApi() {

        NotificationApi api = Mockito.mock(NotificationApi.class);

        when(notificationApiFactory.byId(eq(id)))
                .thenReturn(api);

        restService.delete(id);

        verify(api, timeout(1)).delete();
    }


    @Test
    public void getAllNotificationApi() {

        SlackNotificationApiDetails details = new SlackNotificationApiDetails();
        details.setId(id);
        details.setLabel(label);
        details.setType(NotificationApiType.SLACK_BOT);
        details.setState(state);
        details.setChanel(chanel);
        details.setToken(token);

        NotificationApi api1 = new SlackNotificationApi(details, repository);

        TelegramNotificationApiDetails details2 = new TelegramNotificationApiDetails();
        details2.setId(id2);
        details2.setLabel(label2);
        details2.setType(NotificationApiType.TELEGRAM_BOT);
        details2.setState(state2);
        details2.setBotFatherName(botFatherName2);
        details2.setToken(token2);

        NotificationApi api2 = new TelegramNotificationApi(details2, repository);


        List<NotificationApi<?>> c = new ArrayList();
        c.add(api1);
        c.add(api2);

        when(notificationApiFactory.getAll())
                .thenReturn(c);

        List<AbstractNotificationApiDTO> list = restService.list();

        SlackNotificationApiDTO apiDTO = (SlackNotificationApiDTO)  list.get(0);
        assertEquals(id, apiDTO.getId());
        assertEquals(label, apiDTO.getLabel());
        assertEquals(state.name(), apiDTO.getState());
        assertEquals(token, apiDTO.getToken());
        assertEquals(chanel, apiDTO.getChanel());
        assertEquals(NotificationApiType.SLACK_BOT.name(), apiDTO.getType());

        TelegramNotificationApiDTO apiDTO2 = (TelegramNotificationApiDTO) list.get(1);
        assertEquals(id2, apiDTO2.getId());
        assertEquals(label2, apiDTO2.getLabel());
        assertEquals(state2.name(), apiDTO2.getState());
        assertEquals(token2, apiDTO2.getToken());
        assertEquals(botFatherName2, apiDTO2.getBotFatherName());
        assertEquals(NotificationApiType.TELEGRAM_BOT.name(), apiDTO2.getType());

    }


    @Test
    public void getTypes() {
        List<NotificationApiTypeDTO> types = restService.types();
        assertEquals(2, types.size());
        assertEquals(NotificationApiType.TELEGRAM_BOT.name(), types.get(0).getType());
        assertEquals(NotificationApiType.TELEGRAM_BOT.getLabel(), types.get(0).getLabel());
        assertEquals(NotificationApiType.SLACK_BOT.name(), types.get(1).getType());
        assertEquals(NotificationApiType.SLACK_BOT.getLabel(), types.get(1).getLabel());
    }
}